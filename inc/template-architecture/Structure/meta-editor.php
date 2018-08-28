<?php
	// Use get_post_meta to retrieve an existing value from the database.
	$post_text = get_post_meta($value['post_id'], $value['id'], true);
?>

<tr class="form-field">
    <th scope="row"> <label for="<?php echo $value['id']; ?>"><?php echo $value['name']; ?></label> </th>
    <td>
        <?php wp_editor($post_text, $value['id'], array('textarea_rows'=>7)); ?>
    </td>
</tr>