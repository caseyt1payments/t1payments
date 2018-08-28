<?php
/*
 * news Page Template Architecture
 * Meta Boxes, Fields, etc.
 */


require_once( dirname( __FILE__ ) . '/Structure/meta-structure.php' );


/*********************Add meta boxes**********************/
function news_page_meta_boxes() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
	
	if( get_post_meta( $post_id, '_wp_page_template', true) == 'page-news.php') {
		add_meta_box( 
	    	'hero_section', 
	    	__( 'Content', 't1p' ), 
	    	'news_hero_section_callback', 
	    	'page',
			'normal',
			'high'
	    );
	}
}
add_action( 'add_meta_boxes', 'news_page_meta_boxes' );

function news_hero_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'news_inner_custom_box', 'news_inner_custom_box_nonce' );

    ?>
    <strong>This section will show the News posts</strong>
    <?php
}

function news_page_save_meta_box( $post_id ) {
    //echo "<pre>"; var_dump($_POST); echo "</pre>";die;

    if ( ! isset( $_POST['news_inner_custom_box_nonce'] ) ) {
        return $post_id;
    }
    $nonce = $_POST['news_inner_custom_box_nonce'];

    if ( ! wp_verify_nonce( $nonce, 'news_inner_custom_box' ) ) {
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
		$pos = strpos(strval($key), "mer_");
		
		if($pos === false){
			continue;
		}
		
        update_post_meta($post_id, $key, $value);
	}
}

add_action( 'save_post', 'news_page_save_meta_box' );

?>