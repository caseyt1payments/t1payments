<?php 
	$post_img = get_post_meta( $value['post_id'], $value['id'], true );
	$image = wp_get_attachment_image_src($post_img, 'medium')[0];
?>

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

            $findme = 'text';
            $pos = strpos($post_meta, $findme);

			if ($pos === false) { // Meta Type is IMAGE

				$post_meta_array = explode("_", $post_meta);
				$index = $post_meta_array[count($post_meta_array) - 1];
				$post_banner = $results[$i]->meta_value;
				$meta_value = $results[$i]->meta_value;

				$image = wp_get_attachment_image_src($post_banner, 'medium')[0];

?>
				<div id="item_<?php echo $index; ?>">
                	<hr width="100%">
					<div class="remove_this button-primary" data-index="<?php echo $index; ?>" data-id="item_<?php echo $index; ?>">Remove This</div>
                    
                    <table class="form-table table2 table_service_<?php echo $index; ?>" >
						<tr class="form-field">
							<th scope="row">
								<label for="video_display"><?php echo $value['text_radio']; ?></label> 
							</th>
							<td>
                                <input type="radio" data-index="<?php echo $index; ?>" data-name="item_<?php echo $index;?>" name="choose_display_<?php echo $index; ?>" checked="checked" value="1"> Image <br />
                                <input type="radio" data-index="<?php echo $index; ?>" data-name="item_<?php echo $index;?>" name="choose_display_<?php echo $index; ?>" value="0"> Text String <br />
                        	</td>
                        </tr>

						<tr class="form-field banner" id="item_<?php echo $index; ?>_banner"> 
							<th scope="row"> 
                                <label for="<?php echo $value['id'] ;?>_logo_<?php echo $index; ?>"><?php echo $value['text_image']; ?></label> <br />
                                <em>(Recommended Image Size is <?php echo $value['size']; ?> px)</em>
							</th>
							<td>
                                <p>
                                    <input class="code" id="<?php echo $value['id']; ?>_logo_<?php echo $index; ?>_url" type="text" value="<?php echo $image; ?>" readonly />
                                    <?php
                                    	if($meta_value != ''){
									?>
											<input class="upload_image_button button-secondary" type="button" value="Change Image" />
											<input class="code" name="<?php echo $value['id']; ?>_logo_<?php echo $index; ?>" id="<?php echo $value['id']; ?>_logo_<?php echo $index; ?>_id" type="hidden" value="<?php echo $meta_value; ?>" />
                                            <a href="javascript:void(0);" class="hero_heading_remove_image left_removebtn">Remove Image</a>
									<?php
                                    	}
										else{
									?>
                                    		<input class="upload_image_button button-secondary" type="button" value="Upload Image" />
                                        	<input class="code" name="<?php echo $value['id']; ?>_logo_<?php echo $index; ?>" id="<?php echo $value['id']; ?>_logo_<?php echo $index; ?>_id" type="hidden" value="" />
									<?php
                                    	}
									?>
                                </p>
                                  
                                <div class="show_upload_image" style="margin-left: 0;"> 
									<?php
                                    	if($post_banner != ''){
									?>
                                        	<img class="<?php echo $value['id']; ?>_logo_<?php echo $index; ?>" src="<?php echo $image; ?>" style="width:300px; background-color: #a0a0a0;" />
                                    <?php
                                    	}
									?>
                                </div>
                            </td>
                        </tr>
                        <tr class="form-field text" style="display:none;" id="item_<?php echo $index; ?>_text">
                            <th scope="row"> 
                                <label for="<?php echo $value['id']; ?>_text_<?php echo $index; ?>"><?php echo $value['text']; ?></label> 
                            </th>
                            <td> 
								<input class="code" name="<?php echo $value['id']; ?>_text_<?php echo $index; ?>" id="<?php echo $value['id']; ?>_text_<?php echo $index; ?>" type="text" value="" /> 
                            </td>
                        </tr> 
                    </table>
                </div>
				<?php
            }
			else{ // Meta Type is TEXT
				$post_meta_array = explode("_", $post_meta);
				$index = $post_meta_array[count($post_meta_array) - 1];
				$meta_value = $results[$i]->meta_value;
			?>
                 <div id="item_<?php echo $index; ?>">
                 	<hr width="100%">
                    
                    <div class="remove_this button-primary" data-index="<?php echo $index; ?>" data-id="item_<?php echo $index; ?>">Remove This</div>
                    
					<table class="form-table table2 table_service_<?php echo $index; ?>" >
						<tr class="form-field">
							<th scope="row">
								<label for="video_display"><?php echo $value['text_radio']; ?></label> 
							</th>
							<td>
                                <input type="radio" data-index="<?php echo $index; ?>" data-name="item_<?php echo $index; ?>" name="choose_display_<?php echo $index; ?>" value="1"> Image <br />
                                <input type="radio" data-index="<?php echo $index; ?>" data-name="item_<?php echo $index; ?>" name="choose_display_<?php echo $index; ?>" checked="checked" value="0"> Text String <br />
                        	</td>
                        </tr>

                        <tr class="form-field banner" style="display:none;" id="item_<?php echo $index; ?>_banner" > 
                            <th scope="row"> 
                                <label for="<?php echo $value['id']; ?>_logo_<?php echo $index; ?>"><?php echo $value['text_image']; ?></label><br>
                                <em>(Recommended Image Size is <?php echo $value['size']; ?> px) </em>
                            </th>
                            <td>
                                <p>
                                    <input class="code" id="<?php echo $value['id'] ;?>_logo_<?php echo $index;?>_url" type="text" value="" readonly />
                                    <input class="upload_image_button button-secondary" type="button" value="Upload Image" />
                                    <input class="code" name="<?php echo $value['id']; ?>_logo_<?php echo $index; ?>" id="<?php echo $value['id']; ?>_logo_<?php echo $index; ?>_id" type="hidden" value="" />
								</p>  
                                
                                <div class="show_upload_image" style="margin-left: 0;">
                                </div>
                            </td>
                        </tr>
                        
                        <tr class="form-field text" id="item_<?php echo $index;?>_text" > 
                            <th scope="row"> 
                                <label for="<?php echo $value['id']; ?>_text_<?php echo $index;?>"><?php echo $value['text']; ?></label> 
                            </th>
                            <td> 
                                <input class="code" name="<?php echo $value['id']; ?>_text_<?php echo $index; ?>" id="<?php echo $value['id'].'_text_'.$index; ?>" type="text" value="<?php echo $meta_value; ?>" /> 
                            </td> 
						</tr>
					</table>
				</div>
			<?php
            }
        }
    }
	
	$new_index = $index + 1;
?>

<input type="hidden" id="new_index" value="<?php echo intval($new_index); ?>" />

<script>
	jQuery(function($){
		var new_service;
		
		$("#add_item").click(function(e){
			var index = document.getElementById("new_index").value;
			
			new_service = '<div id="item_'+index+'"><hr width="100%">'+
				'<div class="remove_this button-primary" data-index="'+index+'" data-id="item_'+index+'">Remove This</div>'+
				 '<table class="form-table table2 table_service_'+index+'" >'+
					'<tr class="form-field">'+
						'<th scope="row">'+
							'<label for="video_display"><?php echo $value['text_radio']; ?></label> '+
						'</th>'+
						'<td>'+
							'<input type="radio" data-index="'+index+'" data-name="item_'+index+'" name="choose_display_'+index+'" value="1"> Image <br />'+
							'<input type="radio" data-index="'+index+'" data-name="item_'+index+'" name="choose_display_'+index+'" value="0"> Text String <br/>'+
						'</td>'+
					'</tr>'+
					'<tr class="form-field banner" style="display:none;" id="item_'+index+'_banner" > '+
						'<th scope="row"> '+
							' <label for="<?php echo $value['id'] ;?>_logo_'+index+'"><?php echo $value['text_image']; ?></label><br>'+
								'<em>(Recommended Image Size is <?php echo $value['size']; ?> px) </em>'+
						'</th> '+
						'<td><p>'+
								'<input class="code" id="<?php echo $value['id'] ;?>_logo_'+index+'_url" type="text" value="" readonly />'+
								'<input class="upload_image_button button-secondary" type="button" value="Upload Image" />'+
								'<input class="code" name="<?php echo $value['id']; ?>_logo_'+index+'" id="<?php echo $value['id'] ;?>_logo_'+index+'_id" type="hidden" value="" />'+
							'</p>  '+
								'<div class="show_upload_image" style="margin-left: 0;"> '+
								'</div>'+
						'</td>'+
					'<tr class="form-field text"  style="display:none;" id="item_'+index+'_text" > '+
						'<th scope="row"> '+
							'<label for="<?php echo $value['id']; ?>_'+index+'"><?php echo $value['text']; ?></label> '+
						'</th> '+
						'<td> <input class="code" name="<?php echo $value['id']; ?>_text_'+index+'" id="<?php echo $value['id']; ?>_'+index+'" type="text" value="" />  '+
						'</td> '+
					'</tr>  '+
				'</table>'+
			'</div>';               
	
			$(new_service).insertBefore("#add-new-service");
			
			document.getElementById("new_index").value = parseInt(document.getElementById("new_index").value) + 1;
			
			$('.<?php echo $value['id']; ?>_display_'+index).click(function() {
				 if($(this).val() == '1') {
					  $('#video_details_section').show();           
				 }
				 else {
					  $('#video_details_section').hide();   
				 }
			});
		});

		$(document).on("click", ".remove_this",function(e){
			var Id = $(this).attr('data-id');
			var indexValue = $(this).attr('data-index');
			
			$("#cp_banner_text_"+indexValue).val("");
			$("#cp_banner_logo_"+indexValue+"_url").val("");
			$("#cp_banner_logo_"+indexValue+"_id").val("");
			$(".cp_banner_logo_"+indexValue).html("");
			
			$("#"+Id).hide();
		});

		$(document).on("change", "input[type=radio]",function(e){
			var radioID = $(this).attr('data-name');
			var radioValue = $(this).attr('value');
			var indexValue = $(this).attr('data-index');

			if(radioValue == 1){ // add image
				$("#cp_banner_text_"+indexValue).val("");
				$("#"+radioID+"_banner").css("display","table-row");
				$("#"+radioID+"_text").css("display","none");
			}
			else{ // add text
				$("#cp_banner_logo_"+indexValue+"_url").val("");
				$("#cp_banner_logo_"+indexValue+"_id").val("");
				$(".cp_banner_logo_"+indexValue).html("");
			
				$("#"+radioID+"_banner").css("display","none");
				$("#"+radioID+"_text").css("display","table-row");
			}
		});
	});
</script>

<div id="add-new-service">
    <div class="add-row-end button-primary" id="add_item"><?php echo $value['button_text']; ?></div>
</div>