<?php
// Use get_post_meta to retrieve an existing value from the database.
	$post_textarea = get_post_meta( $value['post_id'], $value['id'], true );
?>
    <tr class="form-field">
		<th scope="row"> <label for="<?php echo $value['id']; ?>"><?php echo $value['name'] ?></label> </th>
		<td>
	     	<textarea  maxlength="<?php echo $value['characters_limit']; ?>" name="<?php echo $value['id']; ?>" 
	     	id="<?php echo $value['id']; ?>" class="widefat" cols="50" rows="5" /><?php echo $post_textarea; ?></textarea>
	    </td>
	</tr>