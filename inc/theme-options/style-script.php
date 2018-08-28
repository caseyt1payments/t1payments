<?php
/*
 * Governor Theme Options Panel Style Scripts
 */

add_editor_style();

function GovernorAdmin() {
     wp_enqueue_style('thickbox');
	 wp_enqueue_style('theme-options-css', get_template_directory_uri() . '/css/theme-options.css', false, '1.0', 'all');
	 wp_enqueue_style('farbtastic');

	 //wp_enqueue_media();
	 wp_enqueue_script('thickbox');
	 wp_enqueue_script('farbtastic');
	 wp_enqueue_script('theme-options-hashchange', get_template_directory_uri() . '/js/jquery.hashchange.js', false, '1.0');
	 wp_enqueue_script('theme-options-common-js', get_template_directory_uri() . '/js/adminCommon.js', false, '1.0');
	 wp_enqueue_script('theme-options-color', get_template_directory_uri() .'/js/field_color.js', false, '1.0');
}

add_action('admin_init', 'GovernorAdmin');

?>