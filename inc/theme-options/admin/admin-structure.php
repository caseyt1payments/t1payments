<?php
add_action('admin_menu', 'mytheme_add_admin');
function mytheme_admin() {
		global $themename, $shortname, $options;
wp_enqueue_media();
?>

    <h2 class="head"><span><img class="themeiconlog" src="<?php echo get_template_directory_uri(); ?>/inc/theme-options/images/logo_icon.svg" width="100"></a></span><?php echo $themename; ?> Theme Options</h2>
    <?php
    if ( isset($_REQUEST['saved']))
		echo '<div id="message" class="save"><p><strong>'.$themename.' settings has been saved.</strong></p></div>';

    if ( isset($_REQUEST['reset']))
		echo '<div id="message" class="reset"><p><strong>'.$themename.' settings has been reset.</strong></p></div>';
    ?>
	<div class="opt_wrapper" id="v-nav">

		<form method="post">

        <ul>
		<?php
		$i=0;
		foreach ($options as $value) {
			switch ( $value['type'] ) {
			case "section":
		$i++;
			?>
                 <li tab="tab<?php echo $i; ?>" class="tab<?php echo $i; ?>"><?php echo $value['name']; ?></li>
			<?php break;
			}
		}
		?>
        </ul>

		<?php
		$i=0;
		foreach ($options as $value) {
			switch ( $value['type'] ) {

			case "blockopen":
			?>
            <div class="tab-content section">

			<?php break;

			case "open":
			?>
				<div id="<?php echo $value['id']; ?>" class="section <?php echo $value['id']; ?>">

			<?php break;

			case "close":
			?>
            	</div>

            <?php break;

			case "blockclose":
			?>

			</div>
			<?php break;

			case "title":
			?>
			<?php break;

			case 'text':		require('admin-textbox.php' ); 	break;
			case 'textarea':	require('admin-textarea.php' );	break;
			case "media_upload":require('admin-upload.php' );	 break;
			case "wp_editor": 	require('admin-editor.php' );	 break;
			case "select": 	require('admin-select.php' );	 break;
			case "radio": 	require('admin-radio.php' );	 break;
			case "accordion": 	require('admin-accordion.php' );	 break;
			case "section":

			$i++;

			?>
                        <h3><?php echo $value['name']; ?></h3>

			<?php break;
			}
			}
			?>

			<div class="submit">
				<input name="save" type="submit" class="button-primary" value="Save Changes" style="float:right;" />
				<input type="hidden" name="action" value="save" />
			</form>
            <form method="post">
            	<!-- <input name="reset" type="submit" class="button-primary" value="Restore Default" style="margin-right:10px;" /> -->
            	<input name="reset" type="submit" class="button-primary" value="Restore Default" style="display:none;" />
            	<input type="hidden" name="action" value="reset" />
            </form>
            </div>
</div>

<?php
}
