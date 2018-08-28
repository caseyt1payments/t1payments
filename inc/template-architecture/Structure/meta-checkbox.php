<?php
// Use get_post_meta to retrieve an existing value from the database.
	$checkbox_value = get_post_meta( $value['post_id'], $value['id'], true );
?>
    <tr class="form-field">
		<th scope="row"> <label for="<?php echo $value['id']; ?>"> <?php echo $value['name']; ?></label> </th>
	
        <td>
        	<input type="checkbox" id="<?php echo $value['id']; ?>" name="<?php echo $value['id']; ?>" <?php if ($checkbox_value == '1'){?> checked="checked" <?php } ?> value="1">
        </td>
        <?php 
       /* echo "<pre>"; var_dump($checkbox_value); echo "</pre>";
        empty($checkbox_value) ? $checkbox_value==0 : '';
	    $checkedY='';
	    $checkedN='';
	    $checkbox_value==1 ? $checkedY='checked' : $checkedN='checked';
*/
	    ?>
       <!--<td>
            <input type="radio" name="<?php echo $value['id']; ?>" value="1" <?php echo $checkedY; ?> >Yes<br>
            <input type="radio" name="<?php echo $value['id']; ?>" value="0" <?php echo $checkedN; ?> >No
        </td> -->
    </tr>