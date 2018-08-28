<?php
function mytheme_add_admin() {

		global $themename, $shortname, $options;

			if (isset($_GET['page']) && $_GET['page'] == 'theme-options' ) {
				if ( isset($_REQUEST['action']) && 'save' == $_REQUEST['action'] ) {
					foreach ($options as $value) {
						if( isset( $_REQUEST[ $value['id']]) ) {
							update_option( $value['id'], $_REQUEST[ $value['id'] ] );
						}
					}
					foreach ($options as $value) {
						if( isset( $_REQUEST[ $value['id']]) ) {
							update_option( $value['id'], $_REQUEST[ $value['id'] ]  );
						} else {
							delete_option( $value['id'] );
						}
					}
					header("Location: admin.php?page=theme-options&saved=true");
				die;
			}
		 	else if( isset($_REQUEST['action']) && 'reset' == $_REQUEST['action'] ) {
				foreach ($options as $value) {
					//delete_option( $value['id'] );
					update_option( $value['id'], $value['std'] ); }
				header("Location: admin.php?page=theme-options&reset=true");
				die;
			}
	}
		$icon_url = get_template_directory_uri().'/inc/theme-options/images/logo_icon.svg';
		add_menu_page($themename." Options", "Theme Panel", 'edit_themes', 'theme-options','mytheme_admin',$icon_url);

	}
