<?php
/*
 * contact Page Template Architecture
 * Meta Boxes, Fields, etc.
 */


require_once( dirname( __FILE__ ) . '/Structure/meta-structure.php' );


/*********************Add meta boxes**********************/
function contact_page_meta_boxes() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
	
	if( get_post_meta( $post_id, '_wp_page_template', true) == 'page-contact.php') {
		add_meta_box( 
	    	'hero_section', 
	    	__( 'Hero Section', 't1p' ), 
	    	'contact_hero_section_callback', 
	    	'page',
			'normal',
			'high'
	    );
      add_meta_box( 
            'contact_main_section', 
            __( 'Main Section', 't1p' ), 
            'contact_main_section_callback', 
            'page',
            'normal',
            'default'
        );


	}
}
add_action( 'add_meta_boxes', 'contact_page_meta_boxes' );

function contact_hero_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'contact_inner_custom_box', 'contact_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            
            <?php
            $shortname = "mer_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Slogan",
                "id" => $shortname."contact_hero_slogan",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Image",
                "id" => $shortname."contact_hero_image",
                "type" => "media_upload",
                "size" =>"1600 x 600"
            );

            return_callback($return);

           ?>
        </tbody>
    </table>
    <?php
}


function contact_main_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'contact_inner_custom_box', 'contact_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            
            <?php
            $shortname = "mer_";
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Main Copy",
                "id" => $shortname."contact_copy",
                "type" => "editor"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Company Title",
                "id" => $shortname."contact_company_title",
                "type" => "text"
            ); 

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Company Address",
                "id" => $shortname."contact_company_address",
                "type" => "text"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Sales Email",
                "id" => $shortname."contact_sales_email",
                "type" => "text"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Support Email",
                "id" => $shortname."contact_support_emai",
                "type" => "text"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Corporate Office Phone",
                "id" => $shortname."contact_office_phone",
                "type" => "text"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Fax",
                "id" => $shortname."contact_fax",
                "type" => "text"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hours of Operation",
                "id" => $shortname."contact_hours_operation",
                "type" => "textarea",
                "characters_limit" => ""
            );

            
            
            return_callback($return);

           ?>
        </tbody>
    </table>
    <?php
}

function contact_page_save_meta_box( $post_id ) {
    //echo "<pre>"; var_dump($_POST); echo "</pre>";die;

    if ( ! isset( $_POST['contact_inner_custom_box_nonce'] ) ) {
        return $post_id;
    }
    $nonce = $_POST['contact_inner_custom_box_nonce'];

    if ( ! wp_verify_nonce( $nonce, 'contact_inner_custom_box' ) ) {
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

add_action( 'save_post', 'contact_page_save_meta_box' );

?>