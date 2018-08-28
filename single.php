<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package The_Governor
 */

get_header(); ?>

<?php
	while ( have_posts() ) : the_post();
		$id = get_the_id();
		$description = get_post_meta( $id, 'pia_industry_copy', true );
		$industries_image = get_post_meta($id, 'pia_industry_image', true );
		$industries_full = get_post_meta($id, 'pia_industry_desktop', true );
		$button_text = get_post_meta( $id, 'pia_industry_cta_text', true );
		$button_url = get_post_meta( $id, 'pia_industry_cta_url', true );
		  
		$post_image = get_post_meta($id, 'post_featured_image', true );
        $post_image_1000x667 = wp_get_attachment_image_src($post_image, 'industries_1000x667')[0];
        $post_image_500x534 = wp_get_attachment_image_src($post_image, 'industries_500x534')[0];
		$post_image_800x534 = wp_get_attachment_image_src($post_image, 'industries_800x534')[0];

        $image_description = get_post_meta($id, 'post_home_image_description', true );
        $quote = get_post_meta($id, 'post_home_blockquote_text', true );
        $cta_title = get_post_meta($id, 'post_home_cta_title', true );
        $cta_description = get_post_meta($id, 'post_home_cta_description', true );
?>
<div class="main-wrap">
<div class="article-detailed hero">
    <div class="bottom content-wrapper">
        <div class="news-post-title-detailed">
            <h1 class="post-title-detailed"><?php echo the_title(); ?></h1>
            <div class="detailed post-date"><?php echo get_the_date(); ?></div>
            	<div class="social-sharing-block">
		            <a class="share social-link w-inline-block" href="<?php echo get_option('hb_header_facebook'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/facebook.svg">
		            </a><!-- 
		         --><a class="share social-link w-inline-block" href="<?php echo get_option('hb_header_twitter'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/twitter.svg">
		            </a><!-- 
		         --><a class="share social-link w-inline-block" href="<?php echo get_option('hb_header_google_plus'); ?>""><img src="<?php echo get_template_directory_uri(); ?>/images/googleplus.svg">
		            </a><!-- 
		         --><a class="share social-link w-inline-block" href="<?php echo get_option('hb_header_linkedIn'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/linkedin.svg">
		            </a>
         	 	</div>
            </div>
        </div>
    </div>
</div>
<div class="page-section" id="program-overview">
    <div class="centered-content content-wrapper">
        <div class="article-content-wrap">
            <div class="inline-img-block">
                <img class="news-featured-img" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 84vw, 80vw" src="<?php echo $post_image_1000x667; ?>" srcset="<?php echo $post_image_500x534; ?> 500w, <?php echo $post_image_800x534; ?> 800w, <?php echo $post_image_1000x667; ?> 1000w">
                <div class="img-description"><?php echo $image_description; ?></div>
            </div>
            <div id="single_content">
                <?php wpautop(the_content()); ?>
            </div>
            <?php 
                if($quote) {
                    ?>
                        <blockquote class="block-quote"><?php echo $quote; ?></blockquote>
                    <?php
                }
            ?>
            <div class="blog-cta">
                <div class="rw w-row">
                    <div class="col w-col w-col-8">
                        <div class="blog-cta-heading section-heading"><?php echo $cta_title; ?></div>
                        <p class="no-bottom-margin p-white"><?php echo $cta_description; ?>&nbsp;</p>
                    </div>
                    <div class="col w-clearfix w-col w-col-4"><a class="blog-cta-btn button right-just w-button" data-ix="show-popup" href="<?php echo home_url('contact'); ?>">Contact Us</a>
                    </div>
                </div>
            </div><a class="back text-link" href="<?php echo home_url('news'); ?>">Back to all articles</a>
        </div>
    </div>
</div>
<?php
endwhile; // End of the loop.
get_footer();    