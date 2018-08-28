
    <?php 
	//$post_img = (isset($meta) && $meta!='') ? $meta : ( get_option( $value['id'] ) != "" ? get_option( $value['id']) : $value['std'] );
    $post_img = get_post_meta( $value['post_id'], $value['id'], true );
    //echo "<pre>"; var_dump($post_img); echo "</pre>";

    $file = wp_get_attachment_url($post_img);
    ?>
    <tr class="form-field">
        <th scope="row"> <label for="<?php echo $value['id'] ;?>"><?php echo $value['name']; ?></label></th>
        <td>
            <p>
                 <input class="code" id="<?php echo $value['id'] ;?>" type="text" value="<?php echo $file ;?>" readonly/>
                <?php if($post_img!='' ){?>
                    <input class="upload_file_button button-secondary" type="button" value="Change File" />
                    <input class="code" name="<?php echo $value['id']; ?>" id="<?php echo $value['id'] ;?>" type="hidden" value="<?php echo $post_img; ?>" />
                    <a href="javascript:void(0);" class="hero_heading_remove_file left_removebtn">Remove File </a>
                <?php }else{?>
                    <input class="upload_file_button button-secondary" type="button" value="Upload File" />
                    <input class="code" name="<?php echo $value['id']; ?>" id="<?php echo $value['id'] ;?>" type="hidden" value="<?php echo $post_img; ?>" />
                <?php }?>
            </p>
            <!-- <div class="show_upload_file" style="margin-left: 0;">
                <?php if($post_img!= ''){?><img class="<?php echo $value['id'] ;?>" src="<?php echo $file; ?>" style="width:300px; background-color: #a0a0a0;" /><?php } ?>
            </div> -->
        </td>
    </tr>


