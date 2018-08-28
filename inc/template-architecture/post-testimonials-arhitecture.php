<?php
/*
 * ‘testimonials Template Architecture
 * Meta Boxes, Fields, etc.
 */
 
require_once( dirname( __FILE__ ) . '/Structure/meta-structure.php' );
/*********************Add meta boxes**********************/
function testimonials_meta_boxes() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
		add_meta_box( 
	    	'testimonial_post', 
	    	__( 'Custom Meta Boxes', 'textdomain' ), 
	    	'testimonial_callback', 
	    	'testimonials',
			  'normal',
			  'high'
	    	);
}
add_action( 'add_meta_boxes', 'testimonials_meta_boxes' );

function testimonial_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'home_inner_custom_box', 'home_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "tst_";
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Main Copy",
                "id" => $shortname."event_details_description",
                "type" => "editor"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Show on Home Page?",
                "id" => $shortname."show_hp",
                "type" => "checkbox"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Show on Partners Page?",
                "id" => $shortname."show_prt",
                "type" => "checkbox"
            );


            return_callback($return);
            ?>
        </tbody>
    </table>
    <?php
}


 /***************************Save Meta Box***************************/
function testimonials_save_meta_box( $post_id ) {

    if ( ! isset( $_POST['home_inner_custom_box_nonce'] ) ) {
        return $post_id;
    }
    $nonce = $_POST['home_inner_custom_box_nonce'];

    if ( ! wp_verify_nonce( $nonce, 'home_inner_custom_box' ) ) {
        return $post_id;
    }

    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return $post_id;
    }

    if ( 'page' == $_POST['post_type'] ) {
        if ( ! current_user_can( 'edit_page', $post_id ) ) {
            return $post_id;
        }
    } else {
        if ( ! current_user_can( 'edit_post', $post_id ) ) {
            return $post_id;
        }
    }

    $fields = array('tst_show_hp', 'tst_show_prt');
    foreach ( $fields as $pos) {
        if( $post->post_type == 'revision' ) return;

        //$mydata[$pos] = (isset($_POST[$pos])) ? sanitize_text_field( ) : '';
        $mydata[$pos] = (isset($_POST[$pos])) ? $_POST[$pos]  : '';

        update_post_meta($post_id, $pos, $_POST[$pos]);
    }


    foreach ( $_POST as $key => $value) {
        if( $post->post_type == 'revision' ) return;

        $pos = strpos($key, "tst_");
        if($pos === false || $pos != 0)
            continue;

        if($key == "tst_testimonials_scheduling_date"){
            $_POST[$key] = strtotime($_POST[$key]);
        }
        update_post_meta($post_id, $key, $value);
    }
}

add_action( 'save_post', 'testimonials_save_meta_box' );

?>