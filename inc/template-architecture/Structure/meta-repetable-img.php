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

				$post_img = get_post_meta( $value['post_id'], $post_meta, true );
			?>
			
    

 <div id="remove_<?php echo $index; ?>">
 	<hr width="100%">
    <div class="remove_this_item button-primary" data-index="<?php echo $index; ?>" data-id="remove_<?php echo $index; ?>">Remove This</div>
	<table class="form-table table2 table_service_<?php echo $index; ?>" >

		<?php 
	    ${"image_url_".$index} = wp_get_attachment_image_src($post_img, 'medium')[0];
	    ?>
	    <tr class="form-field">
	        <th scope="row"> 
		        <label for="<?php echo $value['id'].'_image_'.$index; ?>"><?php echo $value['image_text']; ?></label><br>
		        <em>(Recommended Image Size is <?php echo $value['size']; ?> px) </em>
	        </th>
	        <td id="<?php echo $value['id'].'_'.$index; ?>">
	            <p>
	                <input class="code" id="<?php echo $value['id'].'_redonl_'.$index; ?>" type="text" value="<?php echo ${"image_url_".$index} ;?>" readonly/>
	                <?php if($value['id']!='' ){?>
	                    <input class="upload_image_button button-secondary" id="<?php echo $value['id'].'_image_'.$index; ?>" type="button" value="Change Image" />
	                    <input class="code" name="<?php echo $value['id'].'_'.$index.''; ?>" id="<?php echo $value['id'].'_id_'.$index; ?>" type="hidden" value="<?php echo $post_img; ?>" />
	                    <a href="javascript:void(0);" class="hero_heading_remove_image left_removebtn">Remove Image </a>
	                <?php }else{?>
	                    <input class="upload_image_button button-secondary" id="<?php echo $value['id'].'_image_'.$index; ?>" type="button" value="Upload Image" />
	                    <input class="code" name="<?php echo $value['id'].'_'.$index.''; ?>" id="<?php echo $value['id'].'_id_'.$index; ?>" type="hidden" value="<?php echo $post_img; ?>" />
	                <?php }?>
	            </p>
	            <div class="show_upload_image" style="margin-left: 0;">
	                <?php if($value['id']!= ''){?><img class="<?php echo $value['id'].'_'.$index; ?>" src="<?php echo ${"image_url_".$index}; ?>" style="width:300px; background-color: #a0a0a0;" /><?php } ?>
	            </div>
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

					'<tr class="form-field">'+
				        '<th scope="row"> '+
					        '<label for="<?php echo $value['id']; ?>_'+index+'"><?php echo $value['image_text']; ?></label>'+
					        '<br><em>(Recommended Image Size is <?php echo $value['size']; ?> px) </em>'+
				        '</th>'+
				       ' <td id="<?php echo $value['id'].'_image_';?>'+index+'">'+
				            '<p>'+
				                '<input class="code" id="<?php echo $value['id']; ?>_red_'+index+'" type="text" value="" readonly/>'+
				                
				                 
				                    '<input class="upload_image_button button-secondary" id="<?php echo $value['id']; ?>_'+index+'" type="button" value="Upload Image" />'+
				                    '<input class="code" name="<?php echo $value['id'].'_'; ?>'+index+'" id="<?php echo $value['id'].'_id_'; ?>'+index+'" type="hidden" value="" />'+
				               
				           ' </p>'+
				            '<div class="show_upload_image" style="margin-left: 0px; display: none;">'+
				                '<img class="<?php echo $value['id']; ?>_'+index+'" src="" style="width:300px; background-color: #a0a0a0;" />'+
				           ' </div>'+
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
			
			$("#<?php echo $value['id']; ?>_id_"+indexValue).val("");
			$("#<?php echo $value['id']; ?>_redonl_"+indexValue).val("");
			
			$("#"+Id).hide();
		});

		
	});
</script>


<div id="add-new-item">
    <div class="add-row-end button-primary" id="new_item"><?php echo $value['button_text']; ?></div>
</div>
<input type="hidden" id="new_index_<?php echo $value['id']; ?>" value="<?php echo intval($new_index); ?>" />