<?php
/*
 * payment_gateway Page Template Architecture
 * Meta Boxes, Fields, etc.
 */


require_once( dirname( __FILE__ ) . '/Structure/meta-structure.php' );


/*********************Add meta boxes**********************/
function payment_gateway_page_meta_boxes() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
	
	if( get_post_meta( $post_id, '_wp_page_template', true) == 'page-payment-gateway.php') {
		add_meta_box( 
	    	'hero_section', 
	    	__( 'Hero Section', 't1p' ), 
	    	'payment_gateway_hero_section_callback', 
	    	'page',
			'normal',
			'high'
	    );
       add_meta_box( 
            'payment_main_section', 
            __( 'Main Section', 't1p' ), 
            'payment_main_section_callback', 
            'page',
            'normal',
            'default'
        );
       add_meta_box( 
            'payment_main_section_1', 
            __( 'Main Section Item 1', 't1p' ), 
            'payment_main_section_1_callback', 
            'page',
            'normal',
            'default'
        );
       add_meta_box( 
            'payment_main_section_2', 
            __( 'Main Section Item 2', 't1p' ), 
            'payment_main_section_2_callback', 
            'page',
            'normal',
            'default'
        );
       add_meta_box( 
            'payment_main_section_3', 
            __( 'Main Section Item 3', 't1p' ), 
            'payment_main_section_3_callback', 
            'page',
            'normal',
            'default'
        );
       add_meta_box( 
            'payment_trusted_section_1', 
            __( 'Trusted Section Item 1', 't1p' ), 
            'payment_trusted_section_1_callback', 
            'page',
            'normal',
            'default'
        );
       add_meta_box( 
            'payment_trusted_section_2', 
            __( 'Trusted Section Item 2', 't1p' ), 
            'payment_trusted_section_2_callback', 
            'page',
            'normal',
            'default'
        );
       add_meta_box( 
            'payment_trusted_section_3', 
            __( 'Trusted Section Item 3', 't1p' ), 
            'payment_trusted_section_3_callback', 
            'page',
            'normal',
            'default'
        );
       add_meta_box( 
            'payment_management_section', 
            __( 'Management Tools Section', 't1p' ), 
            'payment_management_section_callback', 
            'page',
            'normal',
            'default'
        );
               
	}
}
add_action( 'add_meta_boxes', 'payment_gateway_page_meta_boxes' );

function payment_gateway_hero_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'payment_gateway_inner_custom_box', 'payment_gateway_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            
            <?php
            $shortname = "pg_";

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Slogan",
                "id" => $shortname."payment_hero_slogan",
                "type" => "textarea",
                "characters_limit" => ""
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Image",
                "id" => $shortname."payment_gateway_hero_image",
                "type" => "media_upload",
                "size" =>"1600 x 600"
            );
            return_callback($return);

           ?>
        </tbody>
    </table>
    <?php
}

function payment_main_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'payment_gateway_inner_custom_box', 'payment_gateway_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "pg_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Main Section Copy",
                "id" => $shortname."payment_main_copy",
                "type" => "editor"
            );
            
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}


function payment_main_section_1_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'payment_gateway_inner_custom_box', 'payment_gateway_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "pg_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Title",
                "id" => $shortname."payment_main_1_title",
                "type" => "text"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Copy",
                "id" => $shortname."payment_main_1_copy",
                "type" => "textarea",
                "characters_limit" => ""
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Image",
                "id" => $shortname."payment_main_1_image",
                "type" => "media_upload",
                "size" =>"150 x 150"
            );
            
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}
function payment_main_section_2_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'payment_gateway_inner_custom_box', 'payment_gateway_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "pg_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Title",
                "id" => $shortname."payment_main_2_title",
                "type" => "text"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Copy",
                "id" => $shortname."payment_main_2_copy",
                "type" => "textarea",
                "characters_limit" => ""
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Image",
                "id" => $shortname."payment_main_2_image",
                "type" => "media_upload",
                "size" =>"150 x 150"
            );
            
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}
function payment_main_section_3_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'payment_gateway_inner_custom_box', 'payment_gateway_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "pg_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Title",
                "id" => $shortname."payment_main_3_title",
                "type" => "text"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Copy",
                "id" => $shortname."payment_main_3_copy",
                "type" => "textarea",
                "characters_limit" => ""
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Image",
                "id" => $shortname."payment_main_3_image",
                "type" => "media_upload",
                "size" =>"150 x 150"
            );
            
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}
function payment_trusted_section_1_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'payment_gateway_inner_custom_box', 'payment_gateway_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "pg_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Title",
                "id" => $shortname."payment_trusted_1_title",
                "type" => "text"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Copy",
                "id" => $shortname."payment_trusted_1_copy",
                "type" => "textarea",
                "characters_limit" => ""
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Image",
                "id" => $shortname."payment_trusted_1_image",
                "type" => "media_upload",
                "size" =>"871 x 690"
            );
            
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}
function payment_trusted_section_2_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'payment_gateway_inner_custom_box', 'payment_gateway_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "pg_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Title",
                "id" => $shortname."payment_trusted_2_title",
                "type" => "text"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Copy",
                "id" => $shortname."payment_trusted_2_copy",
                "type" => "textarea",
                "characters_limit" => ""
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Image",
                "id" => $shortname."payment_trusted_2_image",
                "type" => "media_upload",
                "size" =>"772 x 446"
            );
            
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}
function payment_trusted_section_3_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'payment_gateway_inner_custom_box', 'payment_gateway_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "pg_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Title",
                "id" => $shortname."payment_trusted_3_title",
                "type" => "text"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Copy",
                "id" => $shortname."payment_trusted_3_copy",
                "type" => "textarea",
                "characters_limit" => ""
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Item Image",
                "id" => $shortname."payment_trusted_3_image",
                "type" => "media_upload",
                "size" =>"668 x 858"
            );
            
            
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}
function payment_management_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'payment_gateway_inner_custom_box', 'payment_gateway_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "pg_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Management Tools Slogan :",
                "id" => $shortname."payment_management_title",
                "type" => "text"
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Management Tools Copy ",
                "id" => $shortname."payment_management_copy",
                "type" => "textarea",
                "characters_limit" => ""
            );
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Management Tools Image",
                "id" => $shortname."payment_management_image",
                "type" => "media_upload",
                "size" =>"1000 x 667"
            );
            
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}
/*function payment_gateway_benefits_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'payment_gateway_inner_custom_box', 'payment_gateway_inner_custom_box_nonce' );

    ?>
    <strong>This section will show the relevant benefits</strong>
    <?php
}

function payment_gateway_markets_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'payment_gateway_inner_custom_box', 'payment_gateway_inner_custom_box_nonce' );

    ?>
    <strong>This section will show the markets</strong>
    <?php
}

function payment_gateway_logo_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'payment_gateway_inner_custom_box', 'payment_gateway_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "pg_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Repeating Client Logo",
                "id" => $shortname."___",
                "type" => "media_upload",
                "size" =>"aaa x aaa"
            );
            
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}
*/

function payment_gateway_page_save_meta_box( $post_id ) {
    //echo "<pre>"; var_dump($_POST); echo "</pre>";die;

    if ( ! isset( $_POST['payment_gateway_inner_custom_box_nonce'] ) ) {
        return $post_id;
    }
    $nonce = $_POST['payment_gateway_inner_custom_box_nonce'];

    if ( ! wp_verify_nonce( $nonce, 'payment_gateway_inner_custom_box' ) ) {
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
		$pos = strpos(strval($key), "pg_");
		
		if($pos === false){
			continue;
		}
		
        update_post_meta($post_id, $key, $value);
	}
}

add_action( 'save_post', 'payment_gateway_page_save_meta_box' );

?>