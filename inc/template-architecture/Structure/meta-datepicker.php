<?php
// Use get_post_meta to retrieve an existing value from the database.
	$post_date = get_post_meta( $value['post_id'], $value['id'], true );
?>
 	<script>
        jQuery(document).ready(function(){
        jQuery('.datepicker').datepicker({
        dateFormat : '<?php echo $value["dateFormat_js"]; ?>'
        });
        });
    </script>
    <tr class="form-field">
		<th scope="row"> <label for="<?php echo $value['id']; ?>"><?php echo $value['name']; ?></label> </th>
		<td>
         	<input class="datepicker" type="text" name="<?php echo $value['id']; ?>" id="<?php echo $value['id']; ?>" value="<?php echo  date($value["dateFormat_php"], $post_date); ?>" />

        </td>
    </tr>
    <?php  
       //echo 'event timestamp: '.(strtotime($post_date));  echo "<br>";
       //$date =time(); //curent timestamp
       //echo 'timestamp curent: '. $date."<br>";
       //echo 'data curenta: '. date('Y-m-d', $date) ."<br>"; // curent date
       //if(strtotime($post_date) > time()){
       //    echo "urmeaza";
       //} else {
       //    echo "a fost";
       //}
    ?>

