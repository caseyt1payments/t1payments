  1. datepicker
  2. Text
  3. Textarea
  4. Image (upload)
  5. file_upload
  6. repetable (text)
  7. Custom Rotating Slogans / Banners
  8 Custom repeter
  9 WYSIWYG
  10 checkbox
  11 radio
  12 horizontal line
  13 repetable_textarea
  14 repeater image
  ------------------------------------------------------
  1 datepicker
    $return[] = array(
        "post_id"=>$post->ID,
        "name" => "Event Dat",
        "id" => $shortname."events_scheduling_date",
        "type" => "datepicker",
        "dateFormat_js" => "MM dd, yy",
        "dateFormat_php" => "F d, Y"
    );
  ------------------------------------------------------
 2 Text
    $return[] = array(
        "post_id"=>$post->ID,
        "name" => "Section Heading",
        "id" => $shortname."musician_heading",
        "type" => "text"
    );

  ------------------------------------------------------
 3 Textarea
    $return[] = array(
        "post_id"=>$post->ID,
        "name" => "Description",
        "id" => $shortname."partner_description",
        "type" => "textarea",
        "characters_limit" => ""
    );
  ------------------------------------------------------
 
  4Image
    $return[] = array(
        "post_id"=>$post->ID,
        "name" => "Section Image",
        "id" => $shortname."musician_image",
        "type" => "media_upload",
        "size" =>"350 x 320"
    );

  ------------------------------------------------------
  5 file_upload
    $return[] = array(
        "post_id"=>$post->ID,
        "name" => "Document upload meta field ",
        "id" => $shortname."upload_field",
        "type" => "file_upload"
    );
  ------------------------------------------------------
  6 Repetable Text
    $return[] = array(
        "post_id"=>$post->ID,
        "name" => "Benefits",
        "text_paragraph"=>"",
        "text" => "Item",
        "id" => $shortname."benefits",
        "type" => "repetable",
        "button_text"=>"Add Benefits"
    );
  ------------------------------------------------------
  7 Custom Rotating Slogans / Banners
    $return[] = array(
        "post_id"=>$post->ID,
        "name" => "Rotating Slogans / Banners",
        "id" => $shortname."banner",
        "type" => "slogan_or_banner",
        "text_paragraph" => "Please note that you can choose either a text string or an image, but not both.",
        "text_radio" => "Choose Image or Text",
        "text_image" => "Upload Your Image",
        "size" =>"350 x 320",
        "text" => "Enter Your Text",
        "button_text" =>"Add Slogans / Banners"
    );
  ------------------------------------------------------
 8 Custom repeter
 // add in calback function before table: 
     <style type="text/css">
        [id^=remove]:hover{background: rgba(245, 241, 241, 0.5);}
        [id^=remove], #add-new-item {padding: 15px;}
        hr{margin: 0;}
    </style>

    $return[] = array(
        "post_id"       =>$post->ID,
        "id"            => $shortname."hero_slides",
        "type"          => "society_hero_repetable",
        "description"   => "Hero Section Slides",
        "text_paragraph"=>"",
        "heading"       => "Slide Heading",
        "subtitle"       => "Slide Subtitle",
        "cta_text"       => "CTA Button Text",
        "cta_url"       => "CTA Button URL",
        "image_text"       => "Slide Image",
        "order"       => "Slider Order",
        "add_text"=>"Add Slide" 
    );

    // replace update_post_meta in foreach:
        if(is_array($value) ) {
            $repeter = $value;
            
            if ( empty($repeter[0]) && empty($repeter[1]) && empty($repeter[2]) && empty($repeter[3]) && empty($repeter[4]) && empty($repeter[5])) {
               delete_post_meta($post_id, $key); 
            } else {
                update_post_meta($post_id, $key, $value);
            }
        } else {
            update_post_meta($post_id, $key, $value);
        }
  ------------------------------------------------------
  9 WYSIWYG
    $return[] = array(
        "post_id"=>$post->ID,
        "name" => "Event Description",
        "id" => $shortname."event_details_description",
        "type" => "editor"
    );S
  ------------------------------------------------------
  10 checkbox
    $return[] = array(
        "post_id"=>$post->ID,
        "name" => "Show on 4Cause Events Page?",
        "id" => $shortname."site_show_ce",
        "type" => "checkbox"
    );
  //add in save_post

    $fields = array('cp_site_show_home', 'cp_site_show_acs', 'cp_site_show_ce');
    foreach ( $fields as $pos) {
        if( $post->post_type == 'revision' ) return;

        //$mydata[$pos] = (isset($_POST[$pos])) ? sanitize_text_field( ) : '';
        $mydata[$pos] = (isset($_POST[$pos])) ? $_POST[$pos]  : '';

        update_post_meta($post_id, $pos, $_POST[$pos]);
    }

  ------------------------------------------------------
  11 radio
    $return[] = array(
        "post_id"=>$post->ID,
        "name" => "Radio",
        "id" => $shortname."radio",
        "type" => "radio",
        "text_true" => "yes",
        "text_false" => "no"
    );
  ------------------------------------------------------
  12 horizontal line
    $return[] = array(
        "type" => "horizontal_line"
    );
  ------------------------------------------------------
  13 repetable_textarea
  $return[] = array(
        "post_id"=>$post->ID,
        "name" => "Goals",
        "text_paragraph"=>"",
        "text" => "Goal ",
        "id" => $shortname."benefits",
        "type" => "repetable_textarea",
        "button_text"=>"Add Goal",
        "characters_limit" => ""
    );
  ------------------------------------------------------
  
14 repeater image

 $return[] = array(
    "post_id"=>$post->ID,
    "name" => "Client Logo",
    "text_paragraph"=>"",
    "text" => "Logo ",
    "size" =>"350 x 320",
    "id" => $shortname."client_logo",
    "image_text"       => "Slide Image",
    "type" => "repetable_img",
    "button_text"=>"Add Img"
);


// add after update_post_meta
    global $wpdb;
    $sql = "delete from " . $wpdb->prefix . "postmeta where (`meta_key` like '%mer_client_logo%' OR `meta_key` like '%cp_banner_text%') and `post_id`=".intval($post_id)." and `meta_value`=''";
    $wpdb->query($sql);
  ------------------------------------------------------
