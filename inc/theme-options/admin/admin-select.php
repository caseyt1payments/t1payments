<div class="<?php echo $value['id']; ?>">
    <label><?php echo $value['name']; ?></label>
    
    <select name="<?php echo $value['id']; ?>" id="<?php echo $value['id']; ?>">
        <?php 

			$select = $value['default'] == "yes" ? '<option value="">Select</option>' : ''; 
			echo $select;
		?>
   
       <?php foreach ($value['options'] as $key=>$option) { 
       
		$select_setting = isset($meta)!='' ? $meta : (get_option( $value['id'] ) != "" ? get_option( $value['id']) : $value['std']);
    
            if($select_setting != ''){
                if ($key == $select_setting ) {
                    $selected = "selected='selected'";
                   } else {
                        $selected = "";
                    }
            }else{
                if($key == $value['std']){
                    $selected = "selected='selected'";
                }else{
                    $selected = "";
                }
            }
       
       ?>
       <option value="<?php echo $key; ?>" <?php echo $selected; ?>><?php echo ucwords($option); ?></option>
       <?php } ?>
    </select>
    
    <?php if ( isset($value['desc']) && $value['desc'] != "" )  : ?>
        <span class="desc"><?php echo $value['desc']; ?></span>
    <?php endif; ?>
    
    <br class="clear" />
</div>