<?php
/*
 *Default Page Template Architecture
 * Meta Boxes, Fields, etc.
 */


require_once( dirname( __FILE__ ) . '/Structure/meta-structure.php' );


/*********************Add meta boxes**********************/
function default_page_meta_boxes() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;

	if( get_post_meta( $post_id, '_wp_page_template', true) == 'default') {
		add_meta_box( 
	    	'default_hero', 
	    	__( 'Hero Section', 'ssd' ), 
	    	'default_hero_section_callback', 
	    	'page',
			'normal',
			'high'
	    );
	}
}
add_action( 'add_meta_boxes', 'default_page_meta_boxes' );

function default_hero_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'home_inner_custom_box', 'home_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "cp_";
              $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Image",
                "id" => $shortname."default_hero_image",
                "type" => "media_upload",
                "size" =>"1200 x 574"
            );

            return_callback($return);
            ?>
        </tbody>
    </table>
    <?php
}

function default_page_save_meta_box( $post_id ) {

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

	if( $post->post_type == 'revision' ){
		return;
	}

	foreach ( $_POST as $key => $value) {
		$pos = strpos(" ".$key, "cp_");
		
		if($pos === false || $pos == 0){
			continue;
		}
		
		update_post_meta($post_id, $key, $value);
	}
	
}

add_action( 'save_post', 'default_page_save_meta_box' );

?>