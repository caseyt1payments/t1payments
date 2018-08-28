<div class="<?php echo $value['id']; ?>">
    <label><?php echo $value['name']; ?></label>

    <?php //$post_img = get_option( $value['id'] ); 
	$post_img = (isset($meta) && $meta!='') ? $meta : ( get_option( $value['id'] ) != "" ? get_option( $value['id']) : $value['std'] );?>
    <p>
    <input class="field" name="<?php echo $value['id']; ?>" id="<?php echo $value['id']; ?>" type="text" value="<?php echo $post_img; ?>" />
        
    <input class="upload_image_button_new button-secondary" type="button" value="<?php echo (empty($post_img)?'Upload Image':'Change Image') ?>" />
    </p>
    <div class="show_upload_image">
		<img src="<?php echo $post_img; ?>" class="test"/>
    </div>

    <?php if ( isset($value['desc']) && $value['desc'] != "" )  : ?>
        <span class="desc"><?php echo $value['desc']; ?></span>
    <?php endif; ?>
    
    <br class="clear" />
</div>