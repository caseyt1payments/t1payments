<?php
/*
 * about Page Template Architecture
 * Meta Boxes, Fields, etc.
 */


require_once( dirname( __FILE__ ) . '/Structure/meta-structure.php' );


/*********************Add meta boxes**********************/
function about_page_meta_boxes() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
	
	if( get_post_meta( $post_id, '_wp_page_template', true) == 'page-about-us.php') {
		add_meta_box( 
	    	'hero_section', 
	    	__( 'Hero Section', 't1p' ), 
	    	'about_hero_section_callback', 
	    	'page',
			'normal',
			'high'
	    );
       add_meta_box( 
            'about_company_overview', 
            __( 'Company Overview Section', 't1p' ), 
            'about_company_overview_callback', 
            'page',
            'normal',
            'default'
        );
      add_meta_box( 
            'about_history', 
            __( 'History Section', 't1p' ), 
            'about_history_callback', 
            'page',
            'normal',
            'default'
        );
       
        
	}
}
add_action( 'add_meta_boxes', 'about_page_meta_boxes' );

function about_hero_section_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'about_inner_custom_box', 'about_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            
            <?php
            $shortname = "abt_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Slogan",
                "id" => $shortname."about_hero_slogan",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Hero Image",
                "id" => $shortname."about_hero_image",
                "type" => "media_upload",
                "size" =>"1600 x 600"
            );

            return_callback($return);

           ?>
        </tbody>
    </table>
    <?php
}

function about_company_overview_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'about_inner_custom_box', 'about_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "abt_";

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Program Overview Image",
                "id" => $shortname."about_overview_image",
                "type" => "media_upload",
                "size" =>"1000 x 667"
            );
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Program Overview Slogan",
                "id" => $shortname."about_overview_slogan",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Program Overview Copy",
                "id" => $shortname."about_overview_copy",
                "type" => "editor"
            );
            
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}


function about_history_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'about_inner_custom_box', 'about_inner_custom_box_nonce' );

    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "abt_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "History Section Slogan",
                "id" => $shortname."about_history_slogan",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => " History Section Copy",
                "id" => $shortname."about_history_copy",
                "type" => "editor"
            );
             $return[] = array(
                "post_id"=>$post->ID,
                "name" => "History Section Image",
                "id" => $shortname."about_history_image",
                "type" => "media_upload",
                "size" =>"800 x 500"
            );
                        
            return_callback($return);
             ?>
        </tbody>
    </table>
    <?php
}






function about_page_save_meta_box( $post_id ) {
    //echo "<pre>"; var_dump($_POST); echo "</pre>";die;

    if ( ! isset( $_POST['about_inner_custom_box_nonce'] ) ) {
        return $post_id;
    }
    $nonce = $_POST['about_inner_custom_box_nonce'];

    if ( ! wp_verify_nonce( $nonce, 'about_inner_custom_box' ) ) {
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
		$pos = strpos(strval($key), "abt_");
		
		if($pos === false){
			continue;
		}
		
        update_post_meta($post_id, $key, $value);
	}
}

add_action( 'save_post', 'about_page_save_meta_box' );

?>