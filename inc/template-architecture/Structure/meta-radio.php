<?php
    // Use get_post_meta to retrieve an existing value from the database.
	$checkbox_value = get_post_meta( $value['post_id'], $value['id'], true );

    empty($checkbox_value) ? $checkbox_value==0 : '';
    $checkedY='';
    $checkedN='';
    $checkbox_value==1 ? $checkedY='checked' : $checkedN='checked';
?>
    <tr class="form-field">
	    <th scope="row"> <label for="<?php echo $value['id']; ?>"> <?php echo $value['name']; ?></label> </th>
        <td>
            <input type="radio" name="<?php echo $value['id']; ?>" value="1" <?php echo $checkedY; ?> ><?php echo $value['text_true']; ?><br>
            <input type="radio" name="<?php echo $value['id']; ?>" value="0" <?php echo $checkedN; ?> ><?php echo $value['text_false']; ?>
        </td> 
    </tr>