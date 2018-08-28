<table class="form-table table2">
	<tr class="form-field">
		<th scope="row"> <label for=""><?php echo $value['name'];  ?></label></th>
		<td><p><?php echo $value['text_paragraph'];  ?></p></td>
		
	</tr>
</table>

<?php 
    
	global $wpdb;
	$results = $wpdb->get_results( "SELECT * FROM `wp_postmeta` WHERE `meta_key` LIKE '%".$value['id']."%' and `meta_value` <> '' order by `meta_id` asc", OBJECT );
	$total_results = count($results);
	$index = 0;

	if ($total_results >= 1 ) {
		for ($i=0; $i < $total_results ; $i++) { 
			$post_meta = $results[$i]->meta_key;

				$post_meta_array = explode("_", $post_meta);
				$index = $post_meta_array[count($post_meta_array) - 1];
				$meta_value = $results[$i]->meta_value;

				$post_textarea = get_post_meta( $value['post_id'], $value['id'], true );
			?>
			
    

 <div id="remove_<?php echo $index; ?>">
 	<hr width="100%">
    <div class="remove_this_item button-primary" data-index="<?php echo $index; ?>" data-id="remove_<?php echo $index; ?>">Remove This</div>
	<table class="form-table table2 table_service_<?php echo $index; ?>" >

		<tr class="form-field" id="item_<?php echo $index;?>_textarea">
			<th scope="row"> 
				<label for="<?php echo $value['id']; ?>_textarea_<?php echo $index;?>"><?php echo $value['text'] ?></label> </th>
			<td>
		     	<textarea  maxlength="<?php echo $value['characters_limit']; ?>" name="<?php echo $value['id']; ?>_textarea_<?php echo $index; ?>" id="<?php echo $value['id']; ?>_textarea_<?php echo $index;?>" class="widefat" cols="50" rows="5" /><?php echo $meta_value; ?></textarea>
		    </td>
		</tr>
	</table>
</div>
			<?php
            
        }
    }
	
	$new_index = $index + 1;
?>



<script>
	jQuery(function($){
		//var new_service;
		
		$("#new_item").click(function(e){
			var index = document.getElementById("new_index_<?php echo $value['id']; ?>").value;
			
			new_service = '<div id="remove_'+index+'"><hr width="100%">'+
				'<div class="remove_this_item button-primary" data-index="'+index+'" data-id="remove_'+index+'">Remove This</div>'+
				 '<table class="form-table table2 table_service_'+index+'" >'+

					/*'<tr class="form-field text"  id="item_'+index+'_text" > '+
						'<th scope="row"> '+
							'<label for="<?php echo $value['id']; ?>_'+index+'"><?php echo $value['text']; ?></label> '+
						'</th> '+
						'<td> <input class="code" name="<?php echo $value['id']; ?>_text_'+index+'" id="<?php echo $value['id']; ?>_'+index+'" type="text" value="" />  '+
						'</td> '+
					'</tr>  '+*/

					'<tr class="form-field" id="item_'+index+'_textarea">'+
						'<th scope="row"> '+
							'<label for="<?php echo $value['id']; ?>_'+index+'"><?php echo $value['text'] ?></label>' +
						'</th>'+
						'<td>'+
					     	'<textarea  maxlength="<?php echo $value['characters_limit']; ?>" name="<?php echo $value['id']; ?>_textarea_'+index+'" id="<?php echo $value['id']; ?>_'+index+'" class="widefat" cols="50" rows="5" /></textarea>'+
					    '</td>'+
					'</tr>'+
				'</table>'+
			'</div>';               
	
			$(new_service).insertBefore("#add-new-item");
			
			document.getElementById("new_index_<?php echo $value['id']; ?>").value = parseInt(document.getElementById("new_index_<?php echo $value['id']; ?>").value) + 1;
			
			$('.<?php echo $value['id']; ?>_display_'+index).click(function() {
				 
			});
		});

		$(document).on("click", ".remove_this_item",function(e){
			var Id = $(this).attr('data-id');
			var indexValue = $(this).attr('data-index');
			
			$("#<?php echo $value['id']; ?>_textarea_"+indexValue).val("");
			
			$("#"+Id).hide();
		});

		
	});
</script>

<input type="hidden" id="new_index_<?php echo $value['id']; ?>" value="<?php echo intval($new_index); ?>" />
<div id="add-new-item">
    <div class="add-row-end button-primary" id="new_item"><?php echo $value['button_text']; ?></div>
</div>