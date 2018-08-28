<div class="<?php echo $value['id']; ?>">
    <label><?php echo $value['name']; ?></label>
    
    <?php foreach ($value['options'] as $key=>$option) {
        
        $radio_setting = get_option($value['id']);

        if($radio_setting != ''){
            if ($key == get_option($value['id']) ) {
                $checked = "checked='checked'";
               } else {
                    $checked = "";
                }
        }else{
            if($key == $value['std']){
                $checked = "checked='checked'";
            }else{
                $checked = "";
            }
        }?>
    <label class="radio <?php echo $value['id'].'_'. $key; ?>">
        <input type="radio" name="<?php echo $value['id']; ?>" value="<?php echo $key; ?>" <?php echo $checked; ?> /> <?php echo $option; ?>
    </label>

    <?php } ?>

	<?php if ( isset($value['desc']) && $value['desc'] != "" )  : ?>
        <span class="desc"><?php echo $value['desc']; ?></span>
    <?php endif; ?>
    
    <br class="clear" />
</div>