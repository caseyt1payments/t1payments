<?php 
get_header(); 
$categories = get_categories();
$cat = get_queried_object();
?>

<div class="main-wrap">
	<div class="hero no-img">
	    <div class="bottom content-wrapper">
	        <h1 class="page-title-no-hero"><?php echo $cat->cat_name; ?></h1>
	        <div class="centered m-btm-30 small-hr"></div>
	        <div class="cat-filter-wrap"><a class="cat-filter-item" href="<?php echo home_url('news');?>">All</a>  
	        <?php
           		$categories = get_categories(array('orderby' =>'date','order'=>'ASC'));


        		if(isset($categories) && count($categories) > 0){
            		foreach($categories as $key_categ=>$category){
            			$active = ($category->term_id == $cat->term_id ? 'w--current' : "");
        	?>
						<a class="cat-filter-item <?php echo $active; ?>" href="<?php echo get_category_link($category->term_id); ?>"><?php echo $category->cat_name; ?></a>
        	<?php
                	}
            	}
        	?>
	        </div>
	    </div>
	</div>
	<div class="gray page-section" id="program-overview">
	    <div class="centered-content content-wrapper">
		<?php 
			$posts_per_page = 12;
			$cat = get_queried_object();
			
			$args = array(
				'post_type' => 'post',
				'posts_per_page' => $posts_per_page,
				'post_status' => 'publish',
				'cat' => $cat->term_id,
				'orderby'  => array( 'date'=>'DESC', 'post_title' => 'ASC' )
			);
		   
			$wp_query = new WP_Query($args);
			
			$count_posts = $wp_query->post_count;


		  	if ( $wp_query->have_posts() ) {
		  	 	$i=0;
				while($wp_query->have_posts()){
					$wp_query->the_post(); 
 					$post_image = get_post_meta( get_the_id(), 'post_featured_image', true );
 					$category = get_the_category();
                    $post_image_1000x667 = wp_get_attachment_image_src($post_image, 'industries_1000x667')[0];
                    $post_image_500x534 = wp_get_attachment_image_src($post_image, 'industries_500x534')[0];
                    $post_image_800x534 = wp_get_attachment_image_src($post_image, 'industries_800x534')[0];
                    $post_image_obj = wp_prepare_attachment_for_js( $post_image );
                    $cat_link = get_category_link($category[0]->term_id);
                    $post_description = get_post_meta( get_the_id(), 'post_home_short_description', true );
                    $len = 121;
                    $tail = max(0, $len-10);
                    $trunk = substr($post_description, 0, $tail);
                    $trunk .= strrev(preg_replace('~^..+?[\s,:]\b|^...~', '...', strrev(substr($post_description, $tail, $len-$tail))));

					if ($i==0) {
						echo '<div class="news-thumb-row w-row">';
					} 
		?> 	
	            <div class="col no-pad w-col w-col-4">
	                <div class="thumb-wrap">
	                	<?php if($post_image_1000x667){ ?>
	                    <a class="news-thumb-link-block w-inline-block" data-ix="scale-thumb" href="<?php echo get_permalink($post->ID); ?>"><img alt="<?php echo $post_image_obj['alt'] ? $post_image_obj['alt'] : 'This is the image alt'; ?>" title="<?php echo $post_image_obj['title'] ? $post_image_obj['title'] : 'This is the image title'; ?>" class="thumbnail" sizes="(max-width: 767px) 87vw, (max-width: 991px) 27vw, 25vw" src="<?php echo $post_image_1000x667; ?>">
	                    </a>
	                    <?php } else{ ?>
	                    	<a class="news-thumb-link-block w-inline-block" data-ix="scale-thumb" href="<?php echo get_permalink($post->ID); ?>"><img alt="placeholder" title="placeholder" class="thumbnail" sizes="(max-width: 767px) 87vw, (max-width: 991px) 27vw, 25vw" src="<?php echo get_template_directory_uri(); ?>/images/placeholder_1000x667.png" >
                        	</a>
	                    <?php } ?>
	                    <a class="news-post-cat-tag w-inline-block" href="<?php echo $cat_link; ?>">
	                        <div><?php echo $category[0]->cat_name; ?></div>
	                    </a>
	                    <div class="news text-block">
	                        <a class="thumb-post-title" href="<?php echo get_permalink($post->ID); ?>"><?php echo the_title(); ?></a>
	                        <div class="post-date"><?php echo get_the_date(); ?></div>
	                        <div><?php echo $trunk; ?></div>
	                    </div>
	                </div>
	            </div>
	        <?php 		
	        			$i++;
		        		if ($i==3){
					        echo '</div>'; 
					        $i=0;
					    }
					 
					} 
				} 
			?>
	        <div class="pag-block">
	        	<?php
                	if (function_exists(custom_pagination)) {
                    	custom_pagination($the_query->max_num_pages,"",$paged);
                	}
            	?>
	        </div>
	    </div>
	</div>
</div>
<?php
get_footer(); ?>