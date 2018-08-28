<?php
/*
 * partners Page Template Architecture
 * Meta Boxes, Fields, etc.
 */


require_once( dirname( __FILE__ ) . '/Structure/meta-structure.php' );


/*********************Add meta boxes**********************/
function partners_page_meta_boxes() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
	
	if( get_post_meta( $post_id, '_wp_page_template', true) == 'page-partners.php') {
		add_meta_box( 
	    	'hero_section', 
	    	__( 'Hero Section', 't1p' ), 
	    	'partners_hero_section_callback', 
	    	'page',
			'normal',
			'high'
	    );
       add_meta_box( 
            'partners_program', 
            __( 'Partners Program Section', 't1p' ), 
            'partners_program_callback', 
            'page',
            'normal',
            'default'
        );

       add_meta_box( 
            'partners_benefits_section', 
            __( 'Benefits Section', 't1p' ), 
            'partners_benefits_callback', 
            'page',
            'normal',
            'default'
        );
       add_meta_box( 
            'partners_markets_section', 
            __( 'Partner Testimonials Section', 't1p' ), 
            'partners_testimonials_callback', 
            'page',
            'normal',
            'default'
        );
       add_meta_box( 
            'become_partners_section', 
            __( 'Become a Partner Section', 't1p' ), 
            'become_partners_callback', 
            'page',
            'normal',
            'default'
        );
        
	}
}
add_action( 'add_meta_boxes', 'partners_page_meta_boxes' );

function partners_hero_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'partners_inner_custom_box', 'partners_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            
            <?php
            $shortname = "mer_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Slogan",
                "id" => $shortname."partners_hero_slogan",
                "type" => "textarea",
                "characters_limit" => ""
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Image",
                "id" => $shortname."partners_hero_image",
                "type" => "media_upload",
                "size" =>"1600 x 600"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Subnav  Button Text",
                "id" => $shortname."partners_hero_sub_text",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Subnav  Button URL",
                "id" => $shortname."partners_hero_sub_url",
                "type" => "text"
            );

            
            return_callback($return);

           ?>
        </tbody>
    </table>
    <?php
}

function partners_program_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'partners_inner_custom_box', 'partners_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "mer_";

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Partners Program Image",
                "id" => $shortname."partners_prg_image",
                "type" => "media_upload",
                "size" =>"1000 x 667"
            );
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Partners Program Slogan",
                "id" => $shortname."partners_prg_slogan",
                "type" => "textarea",
                "characters_limit" => ""
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Partners Program Main Copy",
                "id" => $shortname."partners_prg_copy",
                "type" => "editor"
            );
            
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}



function partners_benefits_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'partners_inner_custom_box', 'partners_inner_custom_box_nonce' );

    ?>
    <strong>This section will show the relevant benefits</strong>
    <?php
}

function partners_testimonials_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'partners_inner_custom_box', 'partners_inner_custom_box_nonce' );

    ?>
    <strong>This section will show the partner testimonials</strong>
    <?php
}

function become_partners_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'partners_inner_custom_box', 'partners_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "mer_";
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Become Partners Image",
                "id" => $shortname."partners_become_image",
                "type" => "media_upload",
                "size" =>"1080 x 721"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Section Slogan",
                "id" => $shortname."partners_become_slogan",
                "type" => "text"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Section Copy",
                "id" => $shortname."partners_become_copy",
                "type" => "textarea",
                "characters_limit" => ""
            );

           
            
            
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}


function partners_page_save_meta_box( $post_id ) {
    //echo "<pre>"; var_dump($_POST); echo "</pre>";die;

    if ( ! isset( $_POST['partners_inner_custom_box_nonce'] ) ) {
        return $post_id;
    }
    $nonce = $_POST['partners_inner_custom_box_nonce'];

    if ( ! wp_verify_nonce( $nonce, 'partners_inner_custom_box' ) ) {
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

add_action( 'save_post', 'partners_page_save_meta_box' );

?>