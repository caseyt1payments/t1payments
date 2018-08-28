<?php
/*
 * global_procesing Page Template Architecture
 * Meta Boxes, Fields, etc.
 */


require_once( dirname( __FILE__ ) . '/Structure/meta-structure.php' );


/*********************Add meta boxes**********************/
function global_procesing_page_meta_boxes() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
	
	if( get_post_meta( $post_id, '_wp_page_template', true) == 'page-global-procesing.php') {
		add_meta_box( 
	    	'hero_section', 
	    	__( 'Hero Section', 't1p' ), 
	    	'global_procesing_hero_section_callback', 
	    	'page',
			'normal',
			'high'
	    );
      add_meta_box( 
            'global_program_overview', 
            __( 'Program Overview Section', 't1p' ), 
            'global_program_overview_callback', 
            'page',
            'normal',
            'default'
        );
        add_meta_box( 
            'global_benefits_section', 
            __( 'Benefits Section', 't1p' ), 
            'global_benefits_section_callback', 
            'page',
            'normal',
            'default'
        );
       add_meta_box( 
            'global_sign_up_section', 
            __( 'Sign Up Today Section', 't1p' ), 
            'global_sign_up_section_callback', 
            'page',
            'normal',
            'default'
        );
       
	}
}
add_action( 'add_meta_boxes', 'global_procesing_page_meta_boxes' );

function global_procesing_hero_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'global_procesing_inner_custom_box', 'global_procesing_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            
            <?php
            $shortname = "glb_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Slogan",
                "id" => $shortname."global_procesing_hero_slogan",
                "type" => "textarea",
                "characters_limit" => ""
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Image",
                "id" => $shortname."global_procesing_hero_image",
                "type" => "media_upload",
                "size" =>"1600 x 600"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Subnav  Button Text",
                "id" => $shortname."global_procesing_hero_sub_text",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Subnav  Button URL",
                "id" => $shortname."global_procesing_hero_sub_url",
                "type" => "text"
            );

            
            return_callback($return);

           ?>
        </tbody>
    </table>
    <?php
}

function global_program_overview_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'global_procesing_inner_custom_box', 'global_procesing_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "glb_";

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Program Overview Image",
                "id" => $shortname."global_overview_image",
                "type" => "media_upload",
                "size" =>"1000 x 667"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Program Overview Slogan",
                "id" => $shortname."global_overview_slogan",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Program Overview Copy",
                "id" => $shortname."global_overview_copy",
                "type" => "editor"
            );
            
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}

function global_benefits_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'global_procesing_inner_custom_box', 'global_procesing_inner_custom_box_nonce' );

    ?>
    <strong>This section will show the relevant benefits</strong>
    <?php
}




function global_sign_up_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'global_procesing_inner_custom_box', 'global_procesing_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "glb_";
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Image",
                "id" => $shortname."global_sign_up_image",
                "type" => "media_upload",
                "size" =>"1000 x 667"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Section Slogan",
                "id" => $shortname."global_sign_up_slogan",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Section Copy",
                "id" => $shortname."global_sign_up_copy",
                "type" => "textarea",
                "characters_limit" => ""
            );
            
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}

function global_procesing_page_save_meta_box( $post_id ) {
    //echo "<pre>"; var_dump($_POST); echo "</pre>";die;

    if ( ! isset( $_POST['global_procesing_inner_custom_box_nonce'] ) ) {
        return $post_id;
    }
    $nonce = $_POST['global_procesing_inner_custom_box_nonce'];

    if ( ! wp_verify_nonce( $nonce, 'global_procesing_inner_custom_box' ) ) {
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
		$pos = strpos(strval($key), "glb_");
		
		if($pos === false){
			continue;
		}
		
        update_post_meta($post_id, $key, $value);
	}
}

add_action( 'save_post', 'global_procesing_page_save_meta_box' );

?>