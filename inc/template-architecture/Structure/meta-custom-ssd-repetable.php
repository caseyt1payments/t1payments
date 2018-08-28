<?php 
	$pag_id = $value['post_id'];

?>

<table class="form-table table2">
	<tr class="form-field">
		<th scope="row"> <label for=""><?php echo $value['description'];  ?></label></th>
		<td><p><?php echo $value['text_paragraph'];  ?></p></td>
	</tr>
</table>

<?php 
    

	global $wpdb;
	$results = $wpdb->get_results( "SELECT * FROM `wp_postmeta` WHERE `meta_key` LIKE '%".$value['id']."%' and `meta_value` <> '' order by `meta_id` asc", OBJECT );
	//echo "<pre>"; var_dump($results); echo "</pre>";
	//echo "<pre>"; var_dump($results); echo "</pre>";die;
	$total_results = count($results);
	$index = 0;
	//foreach ($results as $slides) {
	//  echo $slides->meta_key; echo "<br>";
	//  //echo "<pre>"; var_dump($slides->meta_value); echo "</pre>";
	//  //echo "<pre>"; var_dump(maybe_unserialize($slides->meta_value)); echo "</pre>";
	//  $repeter = maybe_unserialize($slides->meta_value);
	// // echo "<pre>"; var_dump($repeter); echo "</pre>";
	//  /*if ( empty($repeter[0]) && empty($repeter[1]) && empty($repeter[2]) && empty($repeter[3]) && empty($repeter[4]) && //empty($repeter[5])) {
	//  	 echo $slides->meta_key." trebuie sters";echo "<br>";
	//  } else {
	//  	echo $slides->meta_key. " NU trebuie sters";echo "<br>";
	//  }*/
	//}

	if ($total_results >= 1 ) {
		for ($i=0; $i < $total_results ; $i++) { 
			$post_meta = $results[$i]->meta_key;

				$post_meta_array = explode("_", $post_meta);
				$index = $post_meta_array[count($post_meta_array) - 1];
				$meta_value = $results[$i]->meta_value;
				$meta_value = maybe_unserialize($meta_value);
				//echo "<pre>"; var_dump($meta_value); echo "</pre>";die;
			?>
                 <div id="remove_<?php echo $index; ?>">
                 	<!-- <hr width="100%"> -->
                    <div class="remove_this_item button-primary" data-index="<?php echo $index; ?>" data-id="remove_<?php echo $index; ?>">Remove This</div>
					<table class="form-table table2 table_service_<?php echo $index; ?>" >
                        
                        <tr class="form-field text"> 
                            <th scope="row"> 
                                <label for="<?php echo $value['id'].'_heading_'.$index;?>"><?php echo $value['heading'] ; ?></label> 
                            </th>
                            <td> 
                                <input class="code" name="<?php echo $value['id'].'_'.$index.'[0]'; ?>" id="<?php echo $value['id'].'_heading_'.$index; ?>" type="text" value="<?php echo $meta_value[0]; ?>" /> 
                            </td> 
						</tr>

						<tr class="form-field">
							<th scope="row"> 
								<label for="<?php echo $value['id'].'_subtitle_'.$index;?>"><?php echo $value['subtitle'] ; ?></label> 
							</th>
							<td>
						     	<textarea  name="<?php echo $value['id'].'_'.$index.'[1]'; ?>" id="<?php echo $value['id'].'_subtitle_'.$index;?>" class="widefat" cols="50" rows="5" /><?php echo $meta_value[1]; ?></textarea>
						    </td>
						</tr>


						<tr class="form-field text" > 
                            <th scope="row"> 
                                <label for="<?php echo $value['id'].'_button_text_'.$index;?>"><?php echo $value['cta_text'] ; ?></label> 
                            </th>
                            <td> 
                                <input class="code" name="<?php echo $value['id'].'_'.$index.'[2]'; ?>" id="<?php echo $value['id'].'_button_text_'.$index; ?>" type="text" value="<?php echo $meta_value[2]; ?>" /> 
                            </td> 
						</tr>

						<tr class="form-field text"> 
                            <th scope="row"> 
                                <label for="<?php echo $value['id'].'_button_url_'.$index;?>"><?php echo $value['cta_url'] ; ?></label> 
                            </th>
                            <td> 
                                <input class="code" name="<?php echo $value['id'].'_'.$index.'[3]'; ?>" id="<?php echo $value['id'].'_button_url_'.$index; ?>" type="text" value="<?php echo $meta_value[3]; ?>" /> 
                            </td> 
						</tr>

					<?php 
				    //$post_img = get_post_meta( $pag_id, $value['id'].'_'.$index.'[4]', true );
				    //$post_img = $value['id'].'_'.$index.'[4]';
				    ${"image_url_".$index} = wp_get_attachment_image_src($meta_value[4], 'medium')[0];
				    //echo "<pre>"; var_dump(${"image_url_".$index}); echo "</pre>";
				    //echo "<pre>"; var_dump(/*$post_img,*/ $image, $meta_value[4]); echo "</pre>";
				    ?>
				    <tr class="form-field">
				        <th scope="row"> 
					        <label for="<?php echo $value['id'].'_image_'.$index;?>"><?php echo $value['image_text']; ?></label><br>
					        <em>(Recommended Image Size is 2000 x 757 px) </em>
				        </th>
				        <td id="<?php echo $value['id'].'_image_'.$index;?>">
				            <p>
				                <input class="code" id="<?php echo $value['id'].'_image_'.$index;?>" type="text" value="<?php echo ${"image_url_".$index} ;?>" readonly/>
				                <?php if($meta_value[4]!='' ){?>
				                    <input class="upload_image_button button-secondary" type="button" value="Change Image" />
				                    <input class="code" name="<?php echo $value['id'].'_'.$index.'[4]'; ?>" id="<?php echo $value['id'].'_image_'.$index;?>" type="hidden" value="<?php echo $meta_value[4]; ?>" />
				                    <a href="javascript:void(0);" class="hero_heading_remove_image left_removebtn">Remove Image </a>
				                <?php }else{?>
				                    <input class="upload_image_button button-secondary" type="button" value="Upload Image" />
				                    <input class="code" name="<?php echo $value['id'].'_'.$index.'[4]'; ?>" id="<?php echo $value['id'].'_image_'.$index;?>" type="hidden" value="<?php echo $meta_value[4]; ?>" />
				                <?php }?>
				            </p>
				            <?php //echo "<pre>"; var_dump($meta_value[4]); echo "</pre>"; ?>
				            <div class="show_upload_image" style="margin-left: 0;">
				                <?php if($meta_value[4]!= ''){?><img class="<?php echo $value['id'].'_image_'.$index;?>" src="<?php echo ${"image_url_".$index}; ?>" style="width:300px; background-color: #a0a0a0;" /><?php } ?>
				            </div>
				        </td>
				    </tr>

				    <tr class="form-field text"> 
                        <th scope="row"> 
                            <label for="<?php echo $value['id'].'_order_'.$index;?>"><?php echo $value['order'] ; ?></label> 
                        </th>
                        <td> 
                            <input class="code" name="<?php echo $value['id'].'_'.$index.'[5]'; ?>" id="<?php echo $value['id'].'_order_'.$index; ?>" type="number" min="1" step="1"  value="<?php echo $meta_value[5]; ?>" required /> 
                        </td> 
					</tr>

					</table>
				</div>
				<hr width="100%">
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
			
			new_service = '<div id="remove_'+index+'">'+/*<hr width="100%">*/
				'<div class="remove_this_item button-primary" data-index="'+index+'" data-id="remove_'+index+'">Remove This</div>'+
				 '<table class="form-table table2 table_service_'+index+'" >'+

					'<tr class="form-field text"  id="item_'+index+'_heading" > '+
						'<th scope="row"> '+
							'<label for="<?php echo $value['id'].'_'.$pag_id; ?>_heading_'+index+'"><?php echo $value['heading']; ?></label> '+
						'</th> '+
						'<td> <input class="code" name="<?php echo $value['id']; ?>_'+index+'<?php echo "[0]" ?>" id="<?php echo $value['id'].'_'.$pag_id; ?>_heading_'+index+'" type="text" value="" />  '+
						'</td> '+
					'</tr>  '+

					'<tr class="form-field">'+
						'<th scope="row">'+
							'<label for="<?php echo $value['id'].'_'.$pag_id; ?>_subtitle_'+index+'">   <?php echo $value['subtitle'] ; ?></label>' +
						'</th>'+
					     '<td>'+
						     	'<textarea  name="<?php echo $value['id']; ?>_'+index+'[1]" id="<?php echo $value['id'].'_'.$pag_id; ?>_subtitle_'+index+'" class="widefat" cols="50" rows="5" /></textarea>'+
						    '</td>'+
					'</tr>'+

					'<tr class="form-field text"  id="item_'+index+'_cta_text" > '+
						'<th scope="row"> '+
							'<label for="<?php echo $value['id'].'_'.$pag_id; ?>_button_text_'+index+'"><?php echo $value['cta_text']; ?></label> '+
						'</th> '+
						'<td> <input class="code" name="<?php echo $value['id']; ?>_'+index+'<?php echo "[2]" ?>" id="<?php echo $value['id'].'_'.$pag_id; ?>_button_text_'+index+'" type="text" value="" />  '+
						'</td> '+
					'</tr>  '+

					'<tr class="form-field text"  id="item_'+index+'_cta_url" > '+
						'<th scope="row"> '+
							'<label for="<?php echo $value['id'].'_'.$pag_id; ?>_cta_url_'+index+'"><?php echo $value['cta_url']; ?></label> '+
						'</th> '+
						'<td> <input class="code" name="<?php echo $value['id']; ?>_'+index+'<?php echo "[3]" ?>" id="<?php echo $value['id'].'_'.$pag_id; ?>_button_url_'+index+'" type="text" value="" />  '+
						'</td> '+
					'</tr>  '+

					'<tr class="form-field">'+
				        '<th scope="row"> '+
					        '<label for="<?php echo $value['id'].'_image_'.$index;?>"><?php echo $value['image_text']; ?></label>'+
					        '<br><em>(Recommended Image Size is 2000 x 757 px) </em>'+
				        '</th>'+
				       ' <td id="<?php echo $value['id'].'_image_';?>'+index+'">'+
				            '<p>'+
				                '<input class="code" id="<?php echo $value['id'].'_image_'.$index;?>" type="text" value="" readonly/>'+
				                
				                 
				                    '<input class="upload_image_button button-secondary" type="button" value="Upload Image" />'+
				                    '<input class="code" name="<?php echo $value['id'].'_'; ?>'+index+'[4]" id="<?php echo $value['id'].'_image_'.$index;?>" type="hidden" value="" />'+
				               
				           ' </p>'+
				            '<div class="show_upload_image" style="margin-left: 0px; display: none;">'+
				                '<img class="<?php echo $value['id'].'_image_'.$index;?>" src="" style="width:300px; background-color: #a0a0a0;" />'+
				           ' </div>'+
				        '</td>'+
				    '</tr>'+

				    '<tr class="form-field text" id="item_'+index+'_order"> '+
                       ' <th scope="row">' +
                            '<label for="<?php echo $value['id'].'_'.$pag_id; ?>_order_'+index+'""><?php echo $value['order'] ; ?></label>' +
                       ' </th>'+
                        '<td> '+
                           ' <input class="code" name="<?php echo $value['id']; ?>_'+index+'<?php echo "[5]" ?>" id="<?php echo $value['id'].'_'.$pag_id; ?>_order_'+index+'" type="number" min="1" step="1"  value="" required /> '+
                        '</td>' +
					'</tr>'+

					
				'</table>'+
			'</div>'+
			'<hr width="100%">';               
	
			$(new_service).insertBefore("#add-new-item");
			
			document.getElementById("new_index_<?php echo $value['id']; ?>").value = parseInt(document.getElementById("new_index_<?php echo $value['id']; ?>").value) + 1;
			
			$('.<?php echo $value['id']; ?>_display_'+index).click(function() {
				 
			});
		});

		$(document).on("click", ".remove_this_item",function(e){
			var Id = $(this).attr('data-id');
			var indexValue = $(this).attr('data-index');
			
			$("#<?php echo $value['id']; ?>_heading_"+indexValue).val("");
			$("#<?php echo $value['id']; ?>_subtitle_"+indexValue).val("");
			$("#<?php echo $value['id']; ?>_button_text_"+indexValue).val("");
			$("#<?php echo $value['id']; ?>_button_url_"+indexValue).val("");
			$("#<?php echo $value['id']; ?>_image_"+indexValue+" input[type=hidden]").val("");
			$("#<?php echo $value['id']; ?>_image_"+indexValue+" input[type='text'][readonly]").val("");
			$("#<?php echo $value['id']; ?>_image_"+indexValue+" .show_upload_image").find('img').attr('src', '');
			$("#<?php echo $value['id']; ?>_image_"+indexValue+" .show_upload_image").hide();
			$("#<?php echo $value['id']; ?>_order_"+indexValue).val("");
			$("#<?php echo $value['id']; ?>_order_"+indexValue).removeAttr('required');

			$("#<?php echo $value['id'].'_'.$pag_id; ?>_heading_"+indexValue).val("");
			$("#<?php echo $value['id'].'_'.$pag_id; ?>_subtitle_"+indexValue).val("");
			$("#<?php echo $value['id'].'_'.$pag_id; ?>_button_text_"+indexValue).val("");
			$("#<?php echo $value['id'].'_'.$pag_id; ?>_button_url_"+indexValue).val("");
			$("#<?php echo $value['id'].'_'.$pag_id; ?>_order_"+indexValue).val("");
			$("#<?php echo $value['id'].'_'.$pag_id; ?>_order_"+indexValue).removeAttr('required');
			
			$("#"+Id).hide();
		});
	});
</script>


<div id="add-new-item">
    <div class="add-row-end button-primary" id="new_item"><?php echo $value['add_text']; ?></div>
</div>
<input type="hidden" id="new_index_<?php echo $value['id']; ?>" value="<?php echo intval($new_index); ?>" />