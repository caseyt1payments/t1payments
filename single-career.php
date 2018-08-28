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
		$subtitle = get_post_meta( $id, 'crs_career_subtitle', true );
		$form_description = get_post_meta( $id, 'crs_form_description', true );

		// $industries_image = get_post_meta($id, 'pia_industry_image', true );
		// $industries_full = get_post_meta($id, 'pia_industry_desktop', true );
		// $button_text = get_post_meta( $id, 'pia_industry_cta_text', true );
		// $button_url = get_post_meta( $id, 'pia_industry_cta_url', true );
		  
		// $image_full = wp_get_attachment_url($industries_full);
		// $image_500x534 = wp_get_attachment_image_src($industries_image, 'industries_500x534')[0];
		// $image_800x534 = wp_get_attachment_image_src($industries_image, 'industries_800x534')[0];
?>
<style>
input[type='file'],#extensions_message {
	display: none; 
}
input[type='submit']{
	font-size: 16px !important;
}
.gfield_label{
    font-weight: normal !important;
    margin-bottom: 26px;
}
</style>
		<div class="main-wrap">
		    <div class="hero no-img">
		        <div class="bottom content-wrapper">
		            <div class="article-content-wrap">
		                <h1 class="left-page-title m-btm-ro"><?php the_title(); ?></h1>
		            </div>
		        </div>
		    </div>
		    <div class="page-section" id="program-overview">
		        <div class="centered-content content-wrapper">
		            <div class="article-content-wrap">
		                <h2 class="left section-heading">Position Overview</h2>
		                <div class="m-btm-30 small-hr"></div>
		                <h2 class="p-title"><?php  echo $subtitle; ?></h2>
		               <?php wpautop(the_content()); ?>
		                </p>
		            </div>
		        </div>
		    </div>
		    <div class="gray page-section" id="sign-up-today">
		        <div class="article-content-wrap">
		            <h2 class="left margin-btm-20 section-heading">Apply for this Position</h2>
		            <div class="m-btm-30 small-hr"></div>
		            <p class="form-intro"><?php echo $form_description; ?></p>
		            <div class="apply-form w-form">
		                <?php gravity_form(4, false); ?>
		                <div class="w-form-done">
		                    <div>Thank you! Your submission has been received!</div>
		                </div>
		                <div class="w-form-fail">
		                    <div>Oops! Something went wrong while submitting the form</div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
	<?php
	endwhile; // End of the loop.
	?>
<script> 
    $('input[type="text"]').addClass('text-field top w-input').removeClass("medium");
    $('textarea').addClass('comments w-input').removeClass("medium");
    $('textarea').css({"height": "100px", "resize": "vertical"});
    $('input[type="submit"]').addClass('button w-button');
</script>
<?php
get_footer();    