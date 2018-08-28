<?php
/*
 * ‘Benefit Template Architecture
 * Meta Boxes, Fields, etc.
 */
 
require_once( dirname( __FILE__ ) . '/Structure/meta-structure.php' );
/*********************Add meta boxes**********************/
function benefit_meta_boxes() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
		add_meta_box( 
	    	'event_scheduling', 
	    	__( 'Custom Meta Boxes', 'textdomain' ), 
	    	'Benefit_scheduling_callback', 
	    	'benefits',
			  'normal',
			  'high'
	    	);



}
add_action( 'add_meta_boxes', 'Benefit_meta_boxes' );

function benefit_scheduling_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'home_inner_custom_box', 'home_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "cp_";

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Show On Merchants Page?",
                "id" => $shortname."site_show_mer",
                "type" => "checkbox"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Show On Partners Page?",
                "id" => $shortname."site_show_par",
                "type" => "checkbox"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Show On Global Processing Page?",
                "id" => $shortname."site_show_pro",
                "type" => "checkbox"
            );
           
            return_callback($return);
            ?>
        </tbody>
    </table>
    <?php
}


 /***************************Save Meta Box***************************/
function Benefit_save_meta_box( $post_id ) {

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
 
    $fields = array('cp_site_show_mer', 'cp_site_show_par', 'cp_site_show_pro');
    foreach ( $fields as $pos) {
        if( $post->post_type == 'revision' ) return;

        //$mydata[$pos] = (isset($_POST[$pos])) ? sanitize_text_field( ) : '';
        $mydata[$pos] = (isset($_POST[$pos])) ? $_POST[$pos]  : '';

        update_post_meta($post_id, $pos, $_POST[$pos]);
    }


    foreach ( $_POST as $key => $value) {
        if( $post->post_type == 'revision' ) return;

        $pos = strpos($key, "cp_");
        if($pos === false || $pos != 0)
            continue;

        update_post_meta($post_id, $key, $value);
    }
}

add_action( 'save_post', 'Benefit_save_meta_box' );

?>