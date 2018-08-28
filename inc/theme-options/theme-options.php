<?php
/*
 * Governor Theme Options
 */

global $themename;
global $shortname;
global $options;
global $value;

$themename = get_bloginfo("name");
$shortname = "hb";

//require_once( dirname( __FILE__ ) . '/admin/admin-page-cat.php' );


$options = array();

$options[] = array(
			"name" => "Theme Panel",
			"type" => "title",
			"id"	 => $shortname."_theme_panel"
		);
/*Header*/

$options[] = array(
			"type" => "blockopen",
			"id"	 => $shortname."_block_open"
		);

$options[] = array(
			"name" => "Header",
			"type" => "section",
			"id"	 => $shortname."gen_settings"
		);
$options[] = array(
			"name" => "Site Logo",
			"id" => $shortname."_site_logo",
			"type" => "media_upload",
			"std" => "",
			"size"=>"300 x 50"
		);

$options[] = array(
			"name" => "Phone Number",
			"id" => $shortname."_header_phone",
			"type" => "text",
			"std" => ""
		);
$options[] = array(
			"name" => "Facebook URL",
			"id" => $shortname."_header_facebook",
			"type" => "text",
			"std" => ""
		);
$options[] = array(
			"name" => "Twitter URL",
			"id" => $shortname."_header_twitter",
			"type" => "text",
			"std" => ""
		);
$options[] = array(
			"name" => "Google Plus URL",
			"id" => $shortname."_header_google_plus",
			"type" => "text",
			"std" => ""
		);
$options[] = array(
			"name" => "LinkedIn URL",
			"id" => $shortname."_header_linkedIn",
			"type" => "text",
			"std" => ""
		);
$options[] = array(
			"name" => "Youtube URL",
			"id" => $shortname."_header_youtube",
			"type" => "text",
			"std" => ""
		);

$options[] = array(
			"type" => "blockclose",
			"id"	 => $shortname."_block_close"
		);

/*General Settings*/
$options[] = array(
			"type" => "blockopen",
			"id"	 => $shortname."_block_open"
		);
$options[] = array(
			"name" => "General Settings",
			"type" => "section",
			"id"	 => $shortname."gen_settings"
		);

$options[] = array(
			"name" => "Site Logo Upload",
			"id" => $shortname."_logo",
			"type" => "media_upload",
			"std" => ""
		);

$options[] = array(
			"name" => "Contact Number",
			"id" => $shortname."_contact",
			"type" => "text",
			"std" => ""
		);
$options[] = array(
			"name" => "WYSIWYG Example",
			"id" => $shortname."_profile",
			"type" => "wp_editor",
			"std" => ""
		);

$options[] = array(
	"name" => "Radio Button Example",
	"id" => $shortname."_caption",
	"type" => "radio",
	"options" => array("true" => "Yes", "false" => "No"),
	"std" => "true"
);

$options[] = array(
			"name" => "Select Box Example",
			"id" => $shortname."_spostSidebar",
			"type" => "select",
			"options" => array( 'no-sidebar'=>'No Sidebar', 'left-sidebar' =>'Left Sidebar', 'right-sidebar'=>'Right Sidebar'),
			"std" => "right-sidebar"
		);
$options[] = array(
			"type" => "blockclose",
			"id"	 => $shortname."_block_close"
		);

/*HELP Settings*/

$options[] = array(
			"type" => "blockopen",
			"id"	 => $shortname."_block_open"
		);
$options[] = array(
			"name" => "Help Tab",
			"type" => "section",
			"id"	 => $shortname."_help_section"
		);
$options[] = array(
			"name" => "",
			"id" => $shortname."_analytics",
			"type" => "accordion",
			"std" => ""
		);



$options[] = array(
			"type" => "blockclose",
			"id"	 => $shortname."_block_close"
		);
	function myactivationfunction($oldname, $oldtheme=false) {
 		global $options;
		foreach ($options as $value) {
			if(isset($value['id']) && isset($value['std'])){
				update_option( $value['id'], $value['std'] );
			}
		}
	}
	add_action("after_switch_theme", "myactivationfunction", 10 ,  2);

	require_once( dirname( __FILE__ ) . '/admin/admin-save.php' );
	require_once( dirname( __FILE__ ) . '/admin/admin-structure.php' );


?>
