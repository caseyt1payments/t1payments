<?php
function return_callback($return){

	//echo "<pre>"; var_dump($return); echo "</pre>";
	$i=0;
	foreach ($return  as $value) {
		switch ( $value['type'] ) {
			case 'text':		require('meta-textbox.php' ); 	break;
			case 'textarea':	require('meta-textarea.php' );	break;
			case "media_upload":require('meta-upload.php' );	 break;
			case "file_upload":require('meta-file.php' );	 break;
			case "slogan_or_banner":require('meta-slogan-or-banner.php' );	 break;
			case "repetable":require('meta-repetable.php' );	 break;
			case "repetable_textarea":require('meta-repetable-textarea.php' );	 break;
			case "repetable_img":require('meta-repetable-img.php' );	 break;
			case "editor":require('meta-editor.php' );	 break;
			case "society_hero_repetable":require('meta-custom-ssd-repetable.php' );	 break;
			case "checkbox":require('meta-checkbox.php' );	 break;
			case "radio":require('meta-radio.php' );	 break;
			case "datepicker":require('meta-datepicker.php' );	 break;
			case "horizontal_line": 	echo '</tbody></table><hr><table class="form-table"><tbody>';	 break;
			case "heading":require('meta-heading.php' );	 break;
			//case "select": 		require('admin-select.php' );	 break;		
			//case "accordion": 	require('admin-accordion.php' );	 break;
		$i++;
		}
	}
}