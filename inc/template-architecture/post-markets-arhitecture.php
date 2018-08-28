<?php
/*
 * ‘markets Template Architecture
 * Meta Boxes, Fields, etc.
 */
 
require_once( dirname( __FILE__ ) . '/Structure/meta-structure.php' );
/*********************Add meta boxes**********************/
function markets_meta_boxes() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
		add_meta_box( 
	    	'market_post', 
	    	__( 'Markets Hero', 'textdomain' ), 
	    	'market_callback', 
	    	'markets',
			  'normal',
			  'high'
	    	);
        add_meta_box( 
            'market_post_main', 
            __( 'Market Main Content', 'textdomain' ), 
            'market_main_content_callback', 
            'markets',
            'normal',
            'default'
        );
}
add_action( 'add_meta_boxes', 'markets_meta_boxes' );

function market_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'home_inner_custom_box', 'home_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "mrk_";
            /*$return[] = array(
                "post_id"=>$post->ID,
                "name" => "Markets Image",
                "id" => $shortname."market_desktop",
                "type" => "media_upload",
                "size" =>"1000 x 667"
            );*/
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Market Desktop Hero Image",
                "id" => $shortname."market_desktop",
                "type" => "media_upload",
                "size" =>"1600 x 600"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                 "name" => "Market Home Page Image ",
                "id" => $shortname."market_page",
                "type" => "media_upload",
                "size" =>"1000 x 667"
            );

            return_callback($return);
            ?>
        </tbody>
    </table>
    <?php
}
function market_main_content_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'home_inner_custom_box', 'home_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "mrk_";

            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Main Content Slogan",
                "id" => $shortname."market_slogan",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Main Content Image",
                "id" => $shortname."market_image",
                "type" => "media_upload",
                "size" =>"800 x 534"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Main Content Copy",
                "id" => $shortname."market_copy",
                "type" => "editor"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Main Content Button Text",
                "id" => $shortname."market_cta_text",
                "type" => "text"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Main Content Button Url",
                "id" => $shortname."market_cta_url",
                "type" => "text"
            );

            return_callback($return);
            ?>
        </tbody>
    </table>
    <?php
}


 /***************************Save Meta Box***************************/
function markets_save_meta_box( $post_id ) {

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

    $fields = array('mrk_market_show_home', 'mrk_market_show_acs', 'mrk_market_show_ce');
    foreach ( $fields as $pos) {
        if( $post->post_type == 'revision' ) return;

        //$mydata[$pos] = (isset($_POST[$pos])) ? sanitize_text_field( ) : '';
        $mydata[$pos] = (isset($_POST[$pos])) ? $_POST[$pos]  : '';

        update_post_meta($post_id, $pos, $_POST[$pos]);
    }


    foreach ( $_POST as $key => $value) {
        if( $post->post_type == 'revision' ) return;

        $pos = strpos($key, "mrk_");
        if($pos === false || $pos != 0)
            continue;

        if($key == "mrk_markets_scheduling_date"){
            $_POST[$key] = strtotime($_POST[$key]);
        }
        update_post_meta($post_id, $key, $value);
    }
}

add_action( 'save_post', 'markets_save_meta_box' );

?>