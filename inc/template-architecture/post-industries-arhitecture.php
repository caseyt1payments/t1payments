<?php
/*
 * ‘Industries Template Architecture
 * Meta Boxes, Fields, etc.
 */
 
require_once( dirname( __FILE__ ) . '/Structure/meta-structure.php' );
/*********************Add meta boxes**********************/
function Industries_meta_boxes() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
		add_meta_box( 
	    	'industry_post', 
	    	__( 'Industry Hero', 'textdomain' ), 
	    	'industry_callback', 
	    	'industries',
			  'normal',
			  'high'
	    	);
        add_meta_box( 
            'industry_post_main', 
            __( 'Industry Main Content', 'textdomain' ), 
            'industry_main_content_callback', 
            'industries',
            'normal',
            'default'
        );
}
add_action( 'add_meta_boxes', 'Industries_meta_boxes' );



function industry_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'home_inner_custom_box', 'home_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "pia_";
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Industry Desktop Hero Image",
                "id" => $shortname."industry_desktop",
                "type" => "media_upload",
                "size" =>"1600 x 600"
            );
            // $return[] = array(
            //     "post_id"=>$post->ID,
            //     "name" => "Industry Mobile Hero Image",
            //     "id" => $shortname."industry_mobile",
            //     "type" => "media_upload",
            //     "size" =>"1000 x 667"
            // );
            $return[] = array(
                "post_id"=>$post->ID,
                 "name" => "Industry Home Page Image ",
                "id" => $shortname."industry_page",
                "type" => "media_upload",
                "size" =>"1000 x 667"
            );
          
            return_callback($return);
            ?>
        </tbody>
    </table>
    <?php
}

function industry_main_content_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'home_inner_custom_box', 'home_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "pia_";

            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Main Content Slogan",
                "id" => $shortname."industry_slogan",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Main Content Image",
                "id" => $shortname."industry_image",
                "type" => "media_upload",
                "size" =>"800 x 534"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Main Content Copy",
                "id" => $shortname."industry_copy",
                "type" => "editor"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Main Content Button Text",
                "id" => $shortname."industry_cta_text",
                "type" => "text"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Main Content Button Url",
                "id" => $shortname."industry_cta_url",
                "type" => "text"
            );

            return_callback($return);
            ?>
        </tbody>
    </table>
    <?php
}



 /***************************Save Meta Box***************************/
function Industries_save_meta_box( $post_id ) {

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

    $fields = array('pia_site_show_home', 'pia_site_show_acs', 'pia_site_show_ce');
    foreach ( $fields as $pos) {
        if( $post->post_type == 'revision' ) return;

        //$mydata[$pos] = (isset($_POST[$pos])) ? sanitize_text_field( ) : '';
        $mydata[$pos] = (isset($_POST[$pos])) ? $_POST[$pos]  : '';

        update_post_meta($post_id, $pos, $_POST[$pos]);
    }


    foreach ( $_POST as $key => $value) {
        if( $post->post_type == 'revision' ) return;

        $pos = strpos($key, "pia_");
        if($pos === false || $pos != 0)
            continue;

        if($key == "pia_Industries_scheduling_date"){
            $_POST[$key] = strtotime($_POST[$key]);
        }
        update_post_meta($post_id, $key, $value);
    }
}

add_action( 'save_post', 'Industries_save_meta_box' );

?>