<?php
/*
 * Home Page Template Architecture
 * Meta Boxes, Fields, etc.
 */


require_once( dirname( __FILE__ ) . '/Structure/meta-structure.php' );


/*********************Add meta boxes**********************/
function home_page_meta_boxes() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
	
	if( get_post_meta( $post_id, '_wp_page_template', true) == 'page-home.php') {
		add_meta_box( 
	    	'hero_section', 
	    	__( 'Hero Section', 't1p' ), 
	    	'home_hero_section_callback', 
	    	'page',
			'normal',
			'high'
	    );
       add_meta_box( 
            'innovation_district_section', 
            __( 'Main Section', 't1p' ), 
            'home_main_section_callback', 
            'page',
            'normal',
            'default'
        );
         add_meta_box( 
            'home_main_items', 
            __( 'Main Section Items', 't1p' ), 
            'home_main_items_section_callback', 
            'page',
            'normal',
            'default'
        );
        add_meta_box( 
            'home_merchants', 
            __( 'Merchants', 't1p' ), 
            'home_merchants_callback', 
            'page',
            'normal',
            'default'
        );
         add_meta_box( 
            'home_partners', 
            __( 'Partners', 't1p' ), 
            'home_partners_callback', 
            'page',
            'normal',
            'default'
        );
       add_meta_box( 
            'home_industries', 
            __( 'Industries Served Section', 't1p' ), 
            'home_industries_callback', 
            'page',
            'normal',
            'default'
        );
        add_meta_box( 
            'home_testimonials', 
            __( 'Testimonials Section', 't1p' ), 
            'home_testimonials_callback', 
            'page',
            'normal',
            'default'
        );
        
	}
}
add_action( 'add_meta_boxes', 'home_page_meta_boxes' );

function home_hero_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'home_inner_custom_box', 'home_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            
            <?php
            $shortname = "he_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Slogan",
                "id" => $shortname."home_hero_slogan",
                "type" => "textarea",
                "characters_limit" => ""
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Subslogan",
                "id" => $shortname."home_hero_subslogan",
                "type" => "textarea",
                "characters_limit" => ""
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "CTA Button Text",
                "id" => $shortname."home_hero_cta_text",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "CTA Button URL",
                "id" => $shortname."home_hero_cta_url",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Image",
                "id" => $shortname."home_hero_image",
                "type" => "media_upload",
                "size" =>"1600 x 1100"
            );
            return_callback($return);

           ?>
        </tbody>
    </table>
    <?php
}

function home_main_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'home_inner_custom_box', 'home_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "he_";
            
             $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Section Text",
                "id" => $shortname."home_main_text",
                "type" => "textarea"
            );
            
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}

function home_main_items_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'home_inner_custom_box', 'home_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "he_";
            for ($i=1; $i <=4 ; $i++) { 
                $return[] = array(
                    "name" => "Main Section Item ".$i,
                    "type" => "heading"
                );

                $return[] = array(
                    "post_id"=>$post->ID,
                    "name" => "Item Name",
                    "id" => $shortname."home_main_name_".$i,
                    "type" => "text"
                );
                $return[] = array(
                    "post_id"=>$post->ID,
                    "name" => "Item Image",
                    "id" => $shortname."home_main_image_".$i,
                    "type" => "media_upload",
                    "size" =>"150 x 150"
                );
                $return[] = array(
                    "post_id"=>$post->ID,
                    "name" => "Item Copy",
                    "id" => $shortname."home_main_copy_".$i,
                    "type" => "textarea"
                );
               
                if($i<4){
                    $return[] = array(
                        "post_id"=>$post->ID,
                        "name" => "Project Link URL",
                        "type" => "horizontal_line"
                    );
                }
            }
            $return[] = array(
                        "post_id"=>$post->ID,
                        "name" => "Project Link URL",
                        "type" => "horizontal_line"
                    );

            $return[] = array(
                    "name" => "Main Section Button",
                    "type" => "heading"
                );
            $return[] = array(
                    "post_id"=>$post->ID,
                    "name" => "Button Text",
                    "id" => $shortname."home_main_button",
                    "type" => "text"
                );
            $return[] = array(
                    "post_id"=>$post->ID,
                    "name" => "Button URL",
                    "id" => $shortname."home_main_url",
                    "type" => "text"
                );

            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}

function home_merchants_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'home_inner_custom_box', 'home_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "he_";
           
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Merchants Title",
                "id" => $shortname."home_merchants_title",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Merchants Copy",
                "id" => $shortname."home_merchants_copy",
                "type" => "text"
            );
          
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Merchants URL",
                "id" => $shortname."home_merchants_url",
                "type" => "text"
            );
           
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}

function home_partners_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'home_inner_custom_box', 'home_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "he_";
           
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Partners Title",
                "id" => $shortname."home_partners_title",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Partners Copy",
                "id" => $shortname."home_partnerss_copy",
                "type" => "text"
            );
          
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Partners URL",
                "id" => $shortname."home_partners_url",
                "type" => "text"
            );
           
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}

function home_industries_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'home_inner_custom_box', 'home_inner_custom_box_nonce' );

    ?>
    <strong>This section will show the Industries</strong>
    <?php
}

function home_testimonials_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'home_inner_custom_box', 'home_inner_custom_box_nonce' );

    ?>
    <strong>This section will show the testimonials</strong>
    <?php
}



function home_page_save_meta_box( $post_id ) {
    //echo "<pre>"; var_dump($_POST); echo "</pre>";die;

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
		$pos = strpos(strval($key), "he_");
		
		if($pos === false){
			continue;
		}
		
        update_post_meta($post_id, $key, $value);
	}
}

add_action( 'save_post', 'home_page_save_meta_box' );

?>