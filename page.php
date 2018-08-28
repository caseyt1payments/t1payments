<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package The_Governor
 */

get_header(); 
$cp_default_hero_image = get_post_meta( get_the_id(), 'cp_default_hero_image', true );
$cp_default_hero_image_url = wp_get_attachment_image_src($cp_default_hero_image, 'hero_image')[0]; 

if($cp_default_hero_image) { 
  ?> 
    <div class="hero pos-systems short" style="background-image: -webkit-linear-gradient(270deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(<?php echo $cp_default_hero_image_url; ?>);
    background-image: linear-gradient(180deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(<?php echo $cp_default_hero_image_url; ?>);">
      <div class="content-wrapper short-hero" data-ix="show-fixed-subnav">
        <h1 class="left-page-title"><?php the_title(); ?></h1>
        <div class="small-hr"></div>
      </div>
    </div>
  <?php } else { ?>
    <div class="hero no-img">
      <div class="bottom content-wrapper">
        <h1 class="centered-page-title m-btm-60"><?php the_title(); ?></h1>
      </div>
    </div> 
  <?php }  ?>

    <div class="no-hero page-section" id="program-overview">
      <div class="centered-content content-wrapper">
        <div class="article-content-wrap">
          <?php
          //content
          if(have_posts()) : 
              while(have_posts()) : the_post(); 
                  the_content(); 
                endwhile; 
          endif; 
          ?>
        </div>
      </div>
    </div>
<?php
get_footer();
