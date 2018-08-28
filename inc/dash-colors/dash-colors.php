<?php
/**
 * Admin Dashboard Color Schemes
 *
 * Please note that the core of this module is stolen straight from
 * WP's plugin here => http://wordpress.org/plugins/admin-color-schemes/
 * That said, some of these are originals
 */

class Governor_Color_Schemes {

	/**
	 * List of colors registered in this plugin.
	 *
	 * @since 1.0
	 * @access private
	 * @var array $colors List of colors registered in this plugin.
	 * Needed for registering colors-fresh dependency.
	 */
	private $colors = array(
		'adlava',
		'adlava-throwback',
		'alien',
		'80s-kid',
		'flat'
	);

	function __construct() {
		add_action( 'admin_init' , array( $this, 'add_colors' ) );
	}

	/**
	 * Register color schemes.
	 */
	function add_colors() {
		$suffix = is_rtl() ? '-rtl' : '';
		$color_schemes_path = get_template_directory_uri() . '/inc/dash-colors/';

		wp_admin_css_color(
			'adlava-throwback', __( 'Adlava Throwback by adlava', 'admin_schemes' ),
			$color_schemes_path . "adlava-throwback/colors$suffix.css",
			array( '#5b5b5b', '#3f3f3f', '#AD3B06', '#f16625' ),
			array( 'base' => '#f1f2f3', 'focus' => '#fff', 'current' => '#fff' )
		);

		wp_admin_css_color(
			'adlava', __( 'Adlava by adlava', 'admin_schemes' ),
			$color_schemes_path . "adlava/colors$suffix.css",
			// array( '#5b5b5b', '#3f3f3f', '#AD3B06', '#f16625' ),
			array( '#929497', '#5b5b5b', '#f17134', '#f69668' ),
			array( 'base' => '#f1f2f3', 'focus' => '#fff', 'current' => '#fff' )
		);

		wp_admin_css_color(
			'alien', __( 'Alien by adlava', 'admin_schemes' ),
			$color_schemes_path . "alien/colors$suffix.css",
			array( '#5b5b5b', '#3f3f3f', '#0cc033', '#0ee03b' ),
			array( 'base' => '#f1f2f3', 'focus' => '#fff', 'current' => '#fff' )
		);

		wp_admin_css_color(
			'80s-kid', __( '80\'s Kid', 'admin_schemes' ),
			$color_schemes_path . "80s-kid/colors$suffix.css",
			array( '#0A3D80', '#0c4da1', '#ed5793', '#eb853b' ),
			array( 'base' => '#e4e5e7', 'focus' => '#fff', 'current' => '#fff' )
		);

		wp_admin_css_color(
			'flat', __( 'Flat', 'admin_schemes' ),
			$color_schemes_path . "flat/colors$suffix.css",
			array( '#1F2C39', '#2c3e50', '#1abc9c', '#f39c12' ),
			array( 'base' => '#f1f2f3', 'focus' => '#fff', 'current' => '#fff' )
		);

		wp_admin_css_color(
			'flat-reboot', __( 'Flat Reboot by Adlava', 'admin_schemes' ),
			$color_schemes_path . "flat-reboot/colors$suffix.css",
			array( '#1F2C39', '#2c3e50', '#1abc9c', '#f39c12' ),
			array( 'base' => '#f1f2f3', 'focus' => '#fff', 'current' => '#fff' )
		);

	}

}
global $acs_colors;
$acs_colors = new Governor_Color_Schemes;


?>
