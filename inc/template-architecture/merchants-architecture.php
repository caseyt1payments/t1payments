<?php
/*
 * merchants Page Template Architecture
 * Meta Boxes, Fields, etc.
 */


require_once( dirname( __FILE__ ) . '/Structure/meta-structure.php' );


/*********************Add meta boxes**********************/
function merchants_page_meta_boxes() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
	
	if( get_post_meta( $post_id, '_wp_page_template', true) == 'page-merchants.php') {
		add_meta_box( 
	    	'hero_section', 
	    	__( 'Hero Section', 't1p' ), 
	    	'merchants_hero_section_callback', 
	    	'page',
			'normal',
			'high'
	    );
       add_meta_box( 
            'merchants_getting_started', 
            __( 'Getting Started', 't1p' ), 
            'merchants_getting_started_callback', 
            'page',
            'normal',
            'default'
        );
      /* add_meta_box( 
            'merchants_getting_started_existing', 
            __( 'Getting Started Existing Business Steps', 't1p' ), 
            'merchants_getting_started_existing_callback', 
            'page',
            'normal',
            'default'
        );*/
       add_meta_box( 
            'merchants_benefits_section', 
            __( 'Benefits Section', 't1p' ), 
            'merchants_benefits_callback', 
            'page',
            'normal',
            'default'
        );
       add_meta_box( 
            'merchants_markets_section', 
            __( 'Markets Section', 't1p' ), 
            'merchants_markets_callback', 
            'page',
            'normal',
            'default'
        );
       add_meta_box( 
            'merchants_logo_section', 
            __( 'Client Logo Section', 't1p' ), 
            'merchants_logo_callback', 
            'page',
            'normal',
            'default'
        );
        
	}
}
add_action( 'add_meta_boxes', 'merchants_page_meta_boxes' );

function merchants_hero_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'merchants_inner_custom_box', 'merchants_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            
            <?php
            $shortname = "mer_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Slogan",
                "id" => $shortname."merchants_hero_slogan",
                "type" => "textarea",
                "characters_limit" => ""
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Image",
                "id" => $shortname."merchants_hero_image",
                "type" => "media_upload",
                "size" =>"1600 x 600"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Subnav  Button Text",
                "id" => $shortname."merchants_hero_sub_text",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Subnav  Button URL",
                "id" => $shortname."merchants_hero_sub_url",
                "type" => "text"
            );

            
            return_callback($return);

           ?>
        </tbody>
    </table>
    <?php
}

function merchants_getting_started_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'merchants_inner_custom_box', 'merchants_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "mer_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Started Image",
                "id" => $shortname."merchants_started_image",
                "type" => "media_upload",
                "size" =>"150 x 150"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Started Copy",
                "id" => $shortname."merchants_started_copy",
                "type" => "editor"
            );

             $return[] = array(
                    "post_id"=>$post->ID,
                    "name" => "Button Text",
                    "id" => $shortname."merchants_started_button",
                    "type" => "text"
                );
            $return[] = array(
                    "post_id"=>$post->ID,
                    "name" => "Button URL",
                    "id" => $shortname."merchants_started_url",
                    "type" => "text"
                );
            
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}

/*function merchants_getting_started_existing_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'merchants_inner_custom_box', 'merchants_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "mer_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Existing Business Steps",
                "id" => $shortname."merchants_existing_steps",
                "type" => "editor"
            );
            
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}
*/
function merchants_benefits_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'merchants_inner_custom_box', 'merchants_inner_custom_box_nonce' );

    ?>
    <strong>This section will show the relevant benefits</strong>
    <?php
}

function merchants_markets_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'merchants_inner_custom_box', 'merchants_inner_custom_box_nonce' );

    ?>
    <strong>This section will show the markets</strong>
    <?php
}

function merchants_logo_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'merchants_inner_custom_box', 'merchants_inner_custom_box_nonce' );

    ?>
     <style>
        [id^=remove]:hover{background: rgba(245, 241, 241, 0.5);}
        [id^=remove], #add-new-item {padding: 15px;}
        hr{margin: 0;}
    </style>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "mer_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Client Logo",
                "text_paragraph"=>"",
                "text" => "Logo ",
                "size" =>"80 x 80",
                "id" => $shortname."client_logo",
                "image_text"       => "Slide Image",
                "type" => "repetable_img",
                "button_text"=>"Add Logo"
            );
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}


function merchants_page_save_meta_box( $post_id ) {
    //echo "<pre>"; var_dump($_POST); echo "</pre>";die;

    if ( ! isset( $_POST['merchants_inner_custom_box_nonce'] ) ) {
        return $post_id;
    }
    $nonce = $_POST['merchants_inner_custom_box_nonce'];

    if ( ! wp_verify_nonce( $nonce, 'merchants_inner_custom_box' ) ) {
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
    global $wpdb;
    $sql = "delete from " . $wpdb->prefix . "postmeta where (`meta_key` like '%mer_client_logo%' OR `meta_key` like '%cp_banner_text%') and `post_id`=".intval($post_id)." and `meta_value`=''";
    $wpdb->query($sql);
}

add_action( 'save_post', 'merchants_page_save_meta_box' );

?>