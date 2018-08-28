<?php
/*
 * ‘careers Template Architecture
 * Meta Boxes, Fields, etc.
 */
 
require_once( dirname( __FILE__ ) . '/Structure/meta-structure.php' );
/*********************Add meta boxes**********************/
function careers_meta_boxes() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
		add_meta_box( 
	    	'career_post', 
	    	__( 'Custom Meta Boxes', 'textdomain' ), 
	    	'career_callback', 
	    	'career',
			  'normal',
			  'high'
	    	);
}
add_action( 'add_meta_boxes', 'careers_meta_boxes' );

function career_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'home_inner_custom_box', 'home_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "crs_";
    
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Careers Landing Page Blurb",
                "id" => $shortname."career_blurb",
                "type" => "textarea",
                "characters_limit" => ""
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Careers Subtitle",
                "id" => $shortname."career_subtitle",
                "type" => "text",
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Form Description",
                "id" => $shortname."form_description",
                "type" => "textarea",
            );

            return_callback($return);
            ?>
        </tbody>
    </table>
    <?php
}


 /***************************Save Meta Box***************************/
function careers_save_meta_box( $post_id ) {

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

    $fields = array('crs_career_show_home', 'crs_career_show_acs', 'crs_career_show_ce');
    foreach ( $fields as $pos) {
        if( $post->post_type == 'revision' ) return;

        //$mydata[$pos] = (isset($_POST[$pos])) ? sanitize_text_field( ) : '';
        $mydata[$pos] = (isset($_POST[$pos])) ? $_POST[$pos]  : '';

        update_post_meta($post_id, $pos, $_POST[$pos]);
    }


    foreach ( $_POST as $key => $value) {
        if( $post->post_type == 'revision' ) return;

        $pos = strpos($key, "crs_");
        if($pos === false || $pos != 0)
            continue;

        if($key == "crs_careers_scheduling_date"){
            $_POST[$key] = strtotime($_POST[$key]);
        }
        update_post_meta($post_id, $key, $value);
    }
}

add_action( 'save_post', 'careers_save_meta_box' );

?>