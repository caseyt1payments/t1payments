<div class="<?php echo $value['id']; ?>">
    <label><?php echo $value['name']; ?></label>
    
<div class="wp-editor">
	<?php
        wp_editor( stripslashes( get_option( $value['id'] )), $value['id'], array( 'textarea_name' => $value['id'], 'media_buttons' => true, 'tinymce' => array( 'theme_advanced_buttons1' => 'formatselect,forecolor,|,bold,italic,underline,|,bullist,numlist,blockquote,|,justifyleft,justifycenter,justifyright,justifyfull,|,link,unlink,|,spellchecker,wp_fullscreen,wp_adv' ) ) ); 
    ?>
</div>
<?php if ( isset($value['desc']) && $value['desc'] != "" )  : ?>
    <span class="desc"><?php echo $value['desc']; ?></span>
    <?php endif; ?>
    
    <br class="clear" />
        
</div>