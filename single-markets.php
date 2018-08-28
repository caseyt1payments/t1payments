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
		$description = get_post_meta( $id, 'mrk_market_copy', true );
		$market_image = get_post_meta($id, 'mrk_market_image', true );
		$market_full = get_post_meta($id, 'mrk_market_desktop', true );
		$button_text = get_post_meta( $id, 'mrk_market_cta_text', true );
		$button_url = get_post_meta( $id, 'mrk_market_cta_url', true );

		$image_full = wp_get_attachment_url($market_full);
		$image_500x534 = wp_get_attachment_image_src($market_image, 'industries_500x534')[0];
		$image_800x534 = wp_get_attachment_image_src($market_image, 'industries_800x534')[0];
		$market_image_obj = wp_prepare_attachment_for_js( $market_image );
?>
		<div class="ecommerce hero short" style="background-image: -webkit-linear-gradient(270deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(<?php echo $image_full; ?>);
			background-image: linear-gradient(180deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(<?php echo $image_full; ?>);
			">
			<div class="content-wrapper short-hero" data-ix="show-fixed-subnav">
				<h1 class="left-page-title"><?php echo the_title() ?></h1>
				<div class="small-hr"></div>
			</div>
		</div>
		<div class="gray page-section" id="system-overview">
			<div class="centered-content content-wrapper">
				<div class="margin-btm-50 row w-row">
					<div class="col p-left-o w-col w-col-6 w-col-stack"><img alt="<?php echo $market_image_obj['alt'] ? $market_image_obj['alt'] : 'This is the image alt'; ?>" title="<?php echo $market_image_obj['title'] ? $market_image_obj['title'] : 'This is the image title'; ?>" sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 88vw, 39vw" src="<?php echo $image_800x534; ?>">
					</div>
					<div class="col w-col w-col-6 w-col-stack">
						<div class="partners text-block marginB25">
							<h2 class="p-title"><?php the_title(); ?></h2>
							<?php echo wpautop($description); ?>
							<div class="marginB30"></div>
							<a class="button w-button" href="<?php echo $button_url; ?>"><?php echo $button_text; ?></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	<?php
	endwhile; // End of the loop.
	?>

<?php
get_footer();
