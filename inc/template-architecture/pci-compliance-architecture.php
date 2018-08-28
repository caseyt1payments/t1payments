<?php
/*
 * pci_compliance Page Template Architecture
 * Meta Boxes, Fields, etc.
 */


require_once( dirname( __FILE__ ) . '/Structure/meta-structure.php' );


/*********************Add meta boxes**********************/
function pci_compliance_page_meta_boxes() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
	
	if( get_post_meta( $post_id, '_wp_page_template', true) == 'page-pci-compliance.php') {
		add_meta_box( 
	    	'pci_compliance', 
	    	__( 'Custom Meta Boxes', 't1p' ), 
	    	'pci_compliance_callback', 
	    	'page',
			'normal',
			'high'
	    );
	}
}
add_action( 'add_meta_boxes', 'pci_compliance_page_meta_boxes' );

function pci_compliance_callback( $post ) {
    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'pci_compliance_inner_custom_box', 'pci_compliance_inner_custom_box_nonce' );
    
    ?>
    <table class="form-table">
        <tbody>
            
            <?php
            $shortname = "pci_";
            
            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Page Slogan",
                "id" => $shortname."compliance_slogans",
                "type" => "editor"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "name" => "Button Text",
                "id" => $shortname."compliance_text",
                "type" => "text"
            );

            $return[] = array(
                "post_id"=>$post->ID,
                "type" => "text",
                "name" => "Button URL",
                "id" => $shortname."compliance_url",
                "type" => "text"
            );

            
            return_callback($return);

           ?>
        </tbody>
    </table>
    <?php
}

function pci_compliance_page_save_meta_box( $post_id ) {
    //echo "<pre>"; var_dump($_POST); echo "</pre>";die;

    if ( ! isset( $_POST['pci_compliance_inner_custom_box_nonce'] ) ) {
        return $post_id;
    }
    $nonce = $_POST['pci_compliance_inner_custom_box_nonce'];

    if ( ! wp_verify_nonce( $nonce, 'pci_compliance_inner_custom_box' ) ) {
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
		$pos = strpos(strval($key), "pci_");
		
		if($pos === false){
			continue;
		}
		
        update_post_meta($post_id, $key, $value);
	}
}

add_action( 'save_post', 'pci_compliance_page_save_meta_box' );

?>