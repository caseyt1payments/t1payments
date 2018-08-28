<?php
/**
 * Custom functions that act independently of the theme templates.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package The_Governor
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function governor_body_classes( $classes ) {
	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	return $classes;
}
add_filter( 'body_class', 'governor_body_classes' );



/**************** Start Twitter feeds Fetching *************************/
	function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
		$connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
		return $connection;
	}

	function getTweets(){
		$twitteruser = ""; //"SaratogaCasino";
		$notweets = 10;
		$consumerkey = "MDEZcOW4LYt0Mwh7DoVgIvkcv"; //"MKYoeMJBrc1639wfjZeluZLid";
		$consumersecret = "p4zIX3kadHWolbzMJfP89yvGOYChe41bwlvrjk8m5AqAGYWpHr"; //"MqJuYp3QdVPMkVuxH4yCKISdPmpscxUaG92UMHpxefh11de5xt";
		$accesstoken = "841379615037771776-H0hlHTHOHqfnmkSErHGLqV1sGbRzcKF"; //"262315806-DigiYyzTSk6yzn93SMKkOxfZ7NLIOZj5uGZ3tkLN";
		$accesstokensecret = "5XqiDfB23AorqJgrvQ6hsq7y6ahXN1jnE95f5RKUuv3jC"; //"36t04D1sNv34Lt9rH85cUtBCg7oiD9y7kI7yHhtNRilPR";

		$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
		$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);

		return $tweets;
	}
/**************** Stop Twitter feeds Fetching *************************/


/**************** Start Facebook feeds Fetching *************************/
	// require_once(get_template_directory().'/Facebook/autoload.php');

	function make_links($text, $class='', $target='_blank'){
	    return preg_replace('!((http\:\/\/|ftp\:\/\/|https\:\/\/)|www\.)([-a-zA-Zа-яА-Я0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)?!ism', '<a class="'.$class.'" href="//$3" target="'.$target.'">$1$3</a>', $text);
	}

	define("APP_ID", '268443546938253');
	define("APP_SECRET",'4a26c8ea94abbd38398d0b82ffc9b599');
	define("PAGE_ID",'520882008117083');
	define("ACCESS_TOKEN", "268443546938253|CfrYCzQotgRMJRjxwmyiTCJI2vU");

	function getFacebookPosts(){
	  $facebook_return = array();

	  try {
	      $config = array(
	        'app_id' => APP_ID,
	        'app_secret' => APP_SECRET,
	      );

	  		$facebook = new Facebook\Facebook($config);
	  		$posts = $facebook->get('/' . PAGE_ID . '/posts?limit=50&fields=full_picture,message,link,type,name,description,from,created_time', ACCESS_TOKEN);
	      $posts = $posts->getDecodedBody();

	      if(isset($posts["data"]) && count($posts["data"]) > 0){
	        $facebook_return = array_slice($posts["data"], 0, 4);
	      }
	  }
	  catch (Exception $e) {
	    //var_dump($e->getMessage());
	  }

		// var_dump($posts);

	  return $facebook_return;
	}
/**************** Stop Facebook feeds Fetching *************************/


// Special Offers and Packages Page Template
	function get_packages(){
		$start_val = (int)esc_html($_POST['start_val']);
		$load_per_click = (int)esc_html($_POST['load_per_click']);

		$args = array(
			'post_type' => 'packages',
			'posts_per_page' => $load_per_click,
			'post_status' => 'publish',
			'offset' => $start_val,
			'orderby' => array( 'date'=>'DESC', 'post_title' => 'ASC' )
		);


		$the_query = new WP_Query( $args );

		$count_posts = $the_query->post_count;

		if ( $the_query->have_posts() ) {
		  $i=0;
		  $output = '';
		  while ( $the_query->have_posts() ) {
			$i++;
			$the_query->the_post();

			$post_id = get_the_id();
			$post = get_post($post_id);

			$card_copy = get_post_meta( get_the_id(), 'pk_pack_copy', true );
            $pk_pack_url = get_post_meta( get_the_id(), 'pk_pack_url', true );
            $card_image = get_post_meta( get_the_id(), 'pk_pack_image', true );
            $card_413x250 = wp_get_attachment_image_src($card_image, 'img_413x250')[0];

            $output .='<div class="tile-link">
                        <div class="tile-link-content">
                            <div class="div-tile-link-thumb">';
                                 if($card_413x250){
                                	$output .= '<img class="link-thumb" src="'. $card_413x250.'">';
                                 } else {
                        			$output .= ' <img class="link-thumb" src="'. get_template_directory_uri().'/images/placeholder_413x250.jpg">';
                                 }
                    	$output .= '<div class="slant-element"><img alt="decorative slant image" class="slant-img" src="'. get_template_directory_uri().'/images/bg-element-gray-horizontal3-top2.svg">
                                </div>
                            </div>

                            <div class="tile-link-text">
                                <h3 class="link-title">'. get_the_title().'</h3>
                                '. wpautop($card_copy).'
                                <a class="button w-button with-left-margin with-top-margin" href="'.get_the_permalink().'">learn more</a>';
                                if($pk_pack_url){
                                	$output .= '<a href="'. $pk_pack_url.'"  class="button w-button with-left-margin with-top-margin">book now</a>';
                                 }
                            $output .= '</div>
                        </div>
                    </div>';
		  }
		  /* Restore original Post Data */
		  wp_reset_postdata();
		}

		print  $output;
		exit;
	};
	add_action( 'wp_ajax_get_packages', 'get_packages' );
	add_action( 'wp_ajax_nopriv_get_packages', 'get_packages' );

// Press Detail Page Template
	function get_press_release(){
		$start_val = (int)esc_html($_POST['start_val']);
		$load_per_click = (int)esc_html($_POST['load_per_click']);
		$year = (int)esc_html($_POST['year']);

		$timestart = strtotime('01-01-'.$year);
		$timeend = strtotime('31-12-'.$year);

		$args = array(
			'post_type' => 'press-release',
			'posts_per_page' => $load_per_click,
			'post_status' => 'publish',
			'offset' => $start_val/*,*/
	    	/*'year' => ($year != 0 ? $year : ""),*/
			/*'orderby' => array( 'date'=>'DESC', 'post_title' => 'ASC' )*/
		);

		$all_args = array(
			'post_type' => 'press-release',
			'posts_per_page' => -1,
			'post_status' => 'publish'
	    	/*'year' => ($year != 0 ? $year : ""),*/
		);
		if($year ==0){
			$args['orderby']=array( 'date'=>'DESC', 'post_title' => 'ASC' );
		}
		else{
			$args['meta_query']=array(
                  'relation' => 'AND',
                   array(
                       'key'     => 'prr_press_rel_date',
                       'value'   => $timestart,
                       'compare' =>  '>='
                       ),

                   array(
                       'key'     => 'prr_press_rel_date',
                       'value'   => $timeend,
                       'compare' =>  '<='

                       )
                   );
			$args['orderby'] = 'meta_value';
			$args['meta_key'] = 'prr_press_rel_date';
			$args['order'] = 'ASC';

			$all_args['meta_query']=array(
				'relation' => 'AND',
				array(
					'key'     => 'prr_press_rel_date',
					'value'   => $timestart,
					'compare' =>  '>='
				),
				array(
					'key'     => 'prr_press_rel_date',
					'value'   => $timeend,
					'compare' =>  '<='
				)
            );
		}

		$the_query = new WP_Query( $args );

		$the_query_all = new WP_Query( $all_args );

		$count_posts = $the_query_all->post_count;
		if ( $the_query->have_posts() ) {
		  $i=0;
		  $output = '';
		  while ( $the_query->have_posts() ) {
			$i++;
			$the_query->the_post();

			//$post_id = get_the_id();
			//$post = get_post($post_id);

            $prr_press_copy = get_post_meta( get_the_id(), 'prr_press_copy', true );
            $prr_press_url = get_post_meta( get_the_id(), 'prr_press_url', true );
            $prr_press_rel_date = get_post_meta( get_the_id(), 'prr_press_rel_date', true );

			$output .='<div class="press-release-link w-inline-block">
			                <div class="div-press-release-content">
			                    <div class="press-release-date">'. date('m/d/Y', $prr_press_rel_date).'</div>
			                    <h2 class="press-news-title">'. get_the_title().'</h2>
			                    '. wpautop($prr_press_copy).'
			                    <a href="'. $prr_press_url.'"><div class="text-link">view source</div></a>
			                </div>
		                </div>';
		  }
		  /* Restore original Post Data */
		  wp_reset_postdata();
		}
		  $out= array('posts'=>$output,'num_posts'=>$count_posts);
		echo  json_encode($out);
		exit;
	};
	add_action( 'wp_ajax_get_press_release', 'get_press_release' );
	add_action( 'wp_ajax_nopriv_get_press_release', 'get_press_release' );

// Promotions Page Template
	function get_promotion(){
		$start_val = (int)esc_html($_POST['start_val']);
		$load_per_click = (int)esc_html($_POST['load_per_click']);
		$filter_category = (int)esc_html($_POST['filter_category']);

		$args = array(
			'post_type' => 'promotion',
			'posts_per_page' => $load_per_click,
			'post_status' => 'publish',
			'offset' => $start_val,
			'orderby' => array( 'date'=>'DESC', 'post_title' => 'ASC' )
		);
		if($filter_category != 0){
			$args['tax_query'] = array(
				array(
					'taxonomy' => 'promotion',
					'field'    => 'term_id',
					'terms'    => $filter_category,
				)
			);
		}

		$the_query = new WP_Query( $args );
		//echo "<pre>"; var_dump($the_query); echo "</pre>";

		//$count_posts = $the_query->post_count;

		if ( $the_query->have_posts() ) {
		  $i=0;
		  $output = '';
		  while ( $the_query->have_posts() ) {
			$i++;
			$the_query->the_post();

			$post_id = get_the_id();
			$post = get_post($post_id);

			$card_copy = get_post_meta( get_the_id(), 'pr_card_copy', true );
            $card_image = get_post_meta( get_the_id(), 'pr_card_image', true );
            $card_413x250 = wp_get_attachment_image_src($card_image, 'img_413x250')[0];
            $output .='<a class="tile-link w-inline-block" href="'. get_the_permalink().'">
                        <div class="tile-link-content">
                            <div class="div-tile-link-thumb">
                                <img alt="fame-game-promotion" class="link-thumb" src="'. $card_413x250.'">
                                <div class="slant-element"><img alt="decorative slant image" class="slant-img" src="'. get_template_directory_uri().'/images/bg-element-gray-horizontal3-top2.svg">
                                </div>
                            </div>
                            <div class="tile-link-text">
                                <h3 class="link-title">'. get_the_title().'</h3>
                                '.  wpautop($card_copy).'
                                <div class="button with-top-margin">learn more</div>
                            </div>
                        </div>
                    </a>';
		  }
		  /* Restore original Post Data */
		  wp_reset_postdata();
		}

		$args_all = array(
			'post_type' => 'promotion',
			'posts_per_page' => -1,
			'post_status' => 'publish',
			'offset' => $start_val,
			'orderby' => array( 'date'=>'DESC', 'post_title' => 'ASC' )
		);
		if($filter_category != 0){
			$args_all['tax_query'] = array(
				array(
					'taxonomy' => 'promotion',
					'field'    => 'term_id',
					'terms'    => $filter_category,
				)
			);
		}

		$count_query = new WP_Query( $args_all );
		//echo "<pre>"; var_dump($the_query); echo "</pre>";

		$count_posts = $count_query->post_count;

		$out= array('posts'=>$output,'num_posts'=>$count_posts);
		echo  json_encode($out);
		/*print  $output;*/
		exit;
	};
	add_action( 'wp_ajax_get_promotion', 'get_promotion' );
	add_action( 'wp_ajax_nopriv_get_promotion', 'get_promotion' );


// News Page Template
	function get_news(){
		$start_val = (int)esc_html($_POST['start_val']);
		$load_per_click = (int)esc_html($_POST['load_per_click']);
		$year = (int)esc_html($_POST['year']);
		$category = (int)esc_html($_POST['category']);

		$timestart = strtotime('01-01-'.$year);
		$timeend = strtotime('31-12-'.$year);

		$args = array(
			'post_type' => 'post',
			'posts_per_page' => $load_per_click,
			'post_status' => 'publish',
			'offset' => $start_val,
	    	'year' => ($year != 0 ? $year : ""),
	    	'category__in' => ($category != 0 ? $category : ""),
			'orderby' => array( 'date'=>'DESC', 'post_title' => 'ASC' )
		);

		$all_args = array(
			'post_type' => 'post',
			'posts_per_page' => -1,
			'post_status' => 'publish',
			'orderby' =>	array( 'date'=>'DESC', 'post_title' => 'ASC' ),
	    	'year' => ($year != 0 ? $year : ""),
	    	'category__in' => ($category != 0 ? $category : ""),
		);

		$the_query = new WP_Query( $args );

		$the_query_all = new WP_Query( $all_args );

		$count_posts = $the_query_all->post_count;
		if ( $the_query->have_posts() ) {
		  $i=0;
		  $output = '';
		  while ( $the_query->have_posts() ) {
			$i++;
			$the_query->the_post();


            $post_card_image = get_post_meta( get_the_id(), 'post_card_image', true );
            $post_card_image_url = wp_get_attachment_image_src($post_card_image, 'img_413x250')[0];
            $post_card_copy = get_post_meta( get_the_id(), 'post_card_copy', true );

			$output .='<a class="press-release-link w-inline-block" href="'. get_the_permalink().'">
                <div class="div-press-release-content news-link">
                    <div class="div-tile-link-thumb">';
                    if($post_card_image_url){
                        $output .='<img class="link-thumb" src="'. $post_card_image_url.'">';
                     } else {
                        $output .='<img class="link-thumb" src="'. get_template_directory_uri().'/images/placeholder_413x250.jpg">';
                     }
                        $output .='<div class="slant-element"><img alt="decorative slant image" class="slant-img" src="'. get_template_directory_uri().'/images/bg-element-gray-horizontal3-top2.svg">
                        </div>
                    </div>
                    <div class="news-link-content">
                        <div class="press-release-date">'. get_the_date('m/d/y') .'</div>
                        <h2 class="press-news-title">'. get_the_title().'</h2>
                        '.  wpautop($post_card_copy).'
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                        <div class="text-link">read more</div>
                    </div>
                </div>
            </a>';

		  }
		  /* Restore original Post Data */
		  wp_reset_postdata();
		}
			//$output = $start_val.' - '.$load_per_click.' - '.$year.' - '.$category;
		  $out= array('posts'=>$output,'num_posts'=>$count_posts);
		echo  json_encode($out);
		exit;
	};
	add_action( 'wp_ajax_get_news', 'get_news' );
	add_action( 'wp_ajax_nopriv_get_news', 'get_news' );

// Music and Live Events Calendar Page Template
	function get_event(){
		$start_val = (int)esc_html($_POST['start_val']);
		$load_per_click = (int)esc_html($_POST['load_per_click']);
		$filter_category = (int)esc_html($_POST['filter_category']);

		$args = array(
			'post_type' => 'events',
			'posts_per_page' => $load_per_click,
			'post_status' => 'publish',
			'offset' => $start_val,
			'orderby' => array( 'date'=>'DESC', 'post_title' => 'ASC' )
		);

		if($filter_category != 0){
			$args['tax_query'] = array(
				array(
					'taxonomy' => 'events',
					'field'    => 'term_id',
					'terms'    => $filter_category,
				)
			);
		}


		$the_query = new WP_Query( $args );
		//echo "<pre>"; var_dump($the_query); echo "</pre>";

		//$count_posts = $the_query->post_count;

		if ( $the_query->have_posts() ) {
		  $i=0;
		  $output = '';
		  while ( $the_query->have_posts() ) {
			$i++;
			$the_query->the_post();

			// Get current page URL
                    $share_URL = urlencode(get_permalink());
                    // Get current page title
                    $share_Title = str_replace( ' ', '%20', get_the_title());
                    // Get Post Thumbnail for pinterest
                    $share_Thumbnail = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full' );

                    // Construct sharing URL without using any script
                    $twitterURL = 'https://twitter.com/intent/tweet?text='.$share_Title.'&amp;url='.$share_URL.'&amp;via=share_';
                    $facebookURL = 'https://www.facebook.com/sharer/sharer.php?u='.$share_URL;
                    $card_image = get_post_meta( get_the_id(), 'ev_card_img', true );
                    $card_413x250 = wp_get_attachment_image_src($card_image, 'img_413x250')[0];


                       $output .='  <div class="tile-link w-inline-block">
                            <div class="tile-link-content">
                                <a href="'. get_the_permalink().'">
                                    <div class="div-tile-link-thumb">';
                                        if($card_413x250){
                                            $output .='<img class="link-thumb" src="'.  $card_413x250.'">';
                                        } else {
                                            $output .='<img class="link-thumb" src="'.  get_template_directory_uri().'/images/placeholder_413x250.jpg">';
                                        }
                                        $output .='<div class="slant-element"><img alt="decorative slant image" class="slant-img" src="'.  get_template_directory_uri().'/images/bg-element-gray-horizontal3-top2.svg">
                                        </div>
                                    </div>
                                </a>
                                <div class="tile-link-text">
                                    <div class="event-date">';

                                    $date_start = get_post_meta( get_the_id(), 'ev_date_start', true );
                                        //$post_date = get_the_date( "m.d.y", get_the_ID() );
                                    $output .= 	date("m.d.y",$date_start);
                                    $output .='</div>
                                    <a href="'.  get_the_permalink().'" class="nodecoration" ><h3 class=" less-top-margin link-title">'. get_the_title().'</h3></a>';

                                    $card_copy = get_post_meta( get_the_id(), 'ev_card_copy', true );
                                    $output .= wpautop($card_copy);

                                    $output .='<div class="div-artist-social">
                                        <a href="'. $facebookURL.'" target="_blank"><!--
                                        --><div class="artist-social social-link"><img class="small social-icon" src="'.  get_template_directory_uri().'/images/white-fb.png">
                                        </div><!--
                                        --></a>
                                        <a href="'.  $twitterURL.'" target="_blank"><!--
                                         --><div class="artist-social social-link"><img class="small social-icon" src="'.  get_template_directory_uri().'>/images/white-twitter.png">
                                        </div><!--
                                          --></a>
                                    </div>
                                    <a class="nodecoration" href="'. get_the_permalink().'"><!--
                                         --><div class="button with-left-margin with-top-margin">learn more</div><!--
                                     --></a>';
                                     $det_url = get_post_meta( get_the_id(), 'ev_det_url', true );

                                    if($det_url){
                                    $output .='<a class="nodecoration" href="'. $det_url.'" target="_blank"><!--
                                         --><div class="button with-left-margin with-top-margin">buy tickets</div><!--
                                     --></a>';
                                     }

                                $output .='</div>
                            </div>
                        </div>';


			//$card_copy = get_post_meta( get_the_id(), 'pr_card_copy', true );
            //$card_image = get_post_meta( get_the_id(), 'pr_card_image', true );
            //$card_413x250 = wp_get_attachment_image_src($card_image, 'img_413x250')[0];
            /*$output .='<a class="tile-link w-inline-block" href="'. get_the_permalink().'">
                        <div class="tile-link-content">
                            <div class="div-tile-link-thumb">
                                <img alt="fame-game-event" class="link-thumb" src="'. $card_413x250.'">
                                <div class="slant-element"><img alt="decorative slant image" class="slant-img" src="'. get_template_directory_uri().'/images/bg-element-gray-horizontal3-top2.svg">
                                </div>
                            </div>
                            <div class="tile-link-text">
                                <h3 class="link-title">'. get_the_title().'</h3>
                                '.  wpautop($card_copy).'
                                <div class="button with-top-margin">learn more</div>
                            </div>
                        </div>
                    </a>';*/
		  }
		  /* Restore original Post Data */
		  wp_reset_postdata();
		}

		$args_all = array(
			'post_type' => 'events',
			'posts_per_page' => -1,
			'post_status' => 'publish',
		);
		if($filter_category != 0){
			$args_all['tax_query'] = array(
				array(
					'taxonomy' => 'events',
					'field'    => 'term_id',
					'terms'    => $filter_category,
				)
			);
		}

		$count_query = new WP_Query( $args_all );
		//echo "<pre>"; var_dump($the_query); echo "</pre>";

		$count_posts = $count_query->post_count;
		//$output = '$filter_category = '.$filter_category;
		$out= array('posts'=>$share_URL,'num_posts'=>$count_posts);
		echo  json_encode($out);
		/*print  $output;*/
		exit;
	};
	add_action( 'wp_ajax_get_event', 'get_event' );
	add_action( 'wp_ajax_nopriv_get_event', 'get_event' );
