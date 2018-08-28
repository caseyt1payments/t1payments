<div class="<?php echo $value['id']; ?>">
    <label><?php echo $value['name']; ?></label>

    <textarea name="<?php echo $value['id']; ?>" class="fieldarea" value="" type="<?php echo $value['type']; ?>" cols="50" rows="5"><?php if ( get_option( $value['id'] ) != "") { echo stripslashes( get_option( $value['id'] )); } else { echo stripslashes( $value['std']); } ?></textarea>

    <?php if ( isset($value['desc']) && $value['desc'] != "" )  : ?>
        <span class="desc"><?php echo $value['desc']; ?></span>
    <?php endif; ?>
    
    <br class="clear" />
</div>