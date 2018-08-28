<div class="<?php echo $value['id']; ?>"> 

	<?php 
		$txtFieldValue = (isset($meta) && $meta!='') ? $meta : ( get_option( $value['id'] ) != "" ? get_option( $value['id']) : $value['std'] ); 
		
	?>
    
    <label><?php echo $value['name']; ?></label>
    <input class="field" name="<?php echo $value['id']; ?>" id="<?php echo $value['id']; ?>" type="<?php echo $value['type']; ?>" value="<?php echo $txtFieldValue ?>" />
    
    <?php if ( isset($value['desc']) && $value['desc'] != "" )  : ?>
    <span class="desc"><?php echo $value['desc']; ?></span>
    <?php endif; ?>
    
    <br class="clear" />
        
</div>