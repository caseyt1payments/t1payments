<?php
/*
 * ‘post Template Architecture
 * Meta Boxes, Fields, etc.
 */
 
require_once( dirname( __FILE__ ) . '/Structure/meta-structure.php' );
/*********************Add meta boxes**********************/
function post_meta_boxes() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
		add_meta_box( 
	    	'post_featured', 
	    	__( 'Featured Image', 'textdomain' ), 
	    	'post_description_callback', 
	    	'post',
			  'normal',
			  'high'
	    	);
}
add_action( 'add_meta_boxes', 'post_meta_boxes' );

function post_description_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'home_inner_custom_box', 'home_inner_custom_box_nonce' );
    //echo "<pre>"; var_dump($post); echo "</pre>";
    ?>
    <table class="form-table">
        <tbody>
            <?php
            $shortname = "post_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Featured Image",
                "id" => $shortname."featured_image",
                "type" => "media_upload",
                // "size" =>"1000 x 667"
                "size" =>"800 x 533"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Image Description",
                "id" => $shortname."home_image_description",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Short Description",
                "id" => $shortname."home_short_description",
                "type" => "textarea",
                "characters_limit" => ""
            );

             $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Blockquote Text",
                "id" => $shortname."home_blockquote_text",
                "type" => "textarea",
                "characters_limit" => ""
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "CTA Title",
                "id" => $shortname."home_cta_title",
                "type" => "text"
            );

             $return[] = array(
                "post_id"=>$post->ID,
                "name" => "CTA Description",
                "id" => $shortname."home_cta_description",
                "type" => "textarea"
            );

            return_callback($return);
            ?>
        </tbody>
    </table>
    <?php
}

 /***************************Save Meta Box***************************/
function post_save_meta_box( $post_id ) {
    //echo "<pre>"; var_dump($post_id); echo "</pre>";die();
  
   /*global $wpdb;
    $test = $wpdb->update( 
        'wp_posts', 
        array( 
            'post_title' => $_POST['partener_post_title'],  
        ),  
        array( 'ID' => $post_id ) 
    );*/

    /*$title = esc_sql($_POST['partener_post_title']);
    $wpdb->query("UPDATE `$wpdb->posts` set post_title='{$title}' WHERE ID={$post_id}");*/
    //var_dump($test); die;

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

    foreach ( $_POST as $key => $value) {
        if( $post->post_type == 'revision' ) return;

        $pos = strpos($key, "post_");
        if($pos === false || $pos != 0)
            continue;

        //$mydata[$pos] = (isset($_POST[$pos])) ? sanitize_text_field( $_POST[$pos] ) : '';

        update_post_meta($post_id, $key, $value);
    }

}

add_action( 'save_post', 'post_save_meta_box' ,99);

function post_set_title($data){

    if(isset($_POST['partener_post_title'])){
        $data[ 'post_title' ] = sanitize_text_field( $_POST['partener_post_title'] );
    }

    return $data;
}
add_filter( 'wp_insert_post_data' , 'post_set_title' , '99', 2 );

?>