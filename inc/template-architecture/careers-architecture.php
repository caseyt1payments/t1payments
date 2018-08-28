<?php
/*
 * careers Page Template Architecture
 * Meta Boxes, Fields, etc.
 */


require_once( dirname( __FILE__ ) . '/Structure/meta-structure.php' );


/*********************Add meta boxes**********************/
function careers_page_meta_boxes() { 
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
	
	if( get_post_meta( $post_id, '_wp_page_template', true) == 'page-careers.php') { 
		add_meta_box( 
	    	'hero_section', 
	    	__( 'Hero Section', 't1p' ), 
	    	'careers_hero_section_callback', 
	    	'page',
			'normal',
			'high'
	    );
        add_meta_box( 
            'careers_main_section', 
            __( 'Main Section', 't1p' ), 
            'careers_main_section_callback', 
            'page',
            'normal',
            'default'
        );

        
	}
}
add_action( 'add_meta_boxes', 'careers_page_meta_boxes' );

function careers_hero_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'careers_inner_custom_box', 'careers_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            
            <?php
            $shortname = "mer_";
        
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Slogan",
                "id" => $shortname."careers_hero_slogan",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Subslogan",
                "id" => $shortname."careers_hero_subslogan",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Image",
                "id" => $shortname."careers_hero_image",
                "type" => "media_upload",
                "size" =>"1600 x 600"
            );
            
            return_callback($return);

           ?>
        </tbody>
    </table>
    <?php
}

function careers_main_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'careers_inner_custom_box', 'careers_inner_custom_box_nonce' );

    ?>
    <strong>This section will show the available jobs</strong>
    <?php
}



function careers_page_save_meta_box( $post_id ) {
    //echo "<pre>"; var_dump($_POST); echo "</pre>";die;

    if ( ! isset( $_POST['careers_inner_custom_box_nonce'] ) ) {
        return $post_id;
    }
    $nonce = $_POST['careers_inner_custom_box_nonce'];

    if ( ! wp_verify_nonce( $nonce, 'careers_inner_custom_box' ) ) {
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

add_action( 'save_post', 'careers_page_save_meta_box' );

?>