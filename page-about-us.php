<?php
  /*
   Template Name: About Us Page Template
  */
   get_header();
   $about_hero_image = get_post_meta( get_the_id(), 'abt_about_hero_image', true );
   $about_hero_url = wp_get_attachment_image_src($about_hero_image, 'merchants_hero')[0];
?>
      <div class="fixed-subnav-wrap" data-ix="show-solid-header">
      <div class="content-wrapper"><a class="subnav-item" href="#company-overview">Company Overview</a><a class="subnav-item" href="#experience">Experience</a>
      </div>
    </div>
    <div class="about-us hero short" style="background-image: -webkit-linear-gradient(270deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(<?php echo $about_hero_url;?>);
    background-image: linear-gradient(180deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(<?php echo $about_hero_url;?>);">
      <div class="content-wrapper short-hero" data-ix="show-fixed-subnav">
        <h1 class="left-page-title"><?php the_title(); ?></h1>
        <div class="small-hr"></div>
        <div class="home-slogan sub-slogan"><?php echo get_post_meta( get_the_id(), 'abt_about_hero_slogan', true )?></div>
        <div class="hidden-nav" ></div>
      </div>
    </div>
    <div class="subnav-wrap" data-ix="show-solid-header">
      <div class="content-wrapper"><a class="subnav-item" href="#company-overview">Company Overview</a><a class="subnav-item" href="#experience">Experience</a>
      </div>
    </div>
    <div class="page-section" id="company-overview">
      <div class="centered-content content-wrapper">
        <h2 class="left section-heading">company Overview</h2>
        <div class="m-btm-30 small-hr"></div>
        <div class="margin-btm-50 row w-row">
        <?php
            $about_overview = get_post_meta( get_the_id(), 'abt_about_overview_image', true );
            $about_overview_1000x667 = wp_get_attachment_image_src($about_overview, 'payment1000x667')[0];
            $about_overview_500x334 = wp_get_attachment_image_src($about_overview, 'payment500x334')[0];
            $about_overview_800x534 = wp_get_attachment_image_src($about_overview, 'payment800x534')[0];
            $about_overview_1080x721 = wp_get_attachment_image_src($about_overview, 'partner1080x721')[0];
            $about_overview_obj = wp_prepare_attachment_for_js( $about_overview );
            ?>

          <div class="col p-left-o w-col w-col-6 w-col-stack"><img alt="<?php echo $about_overview_obj['alt'] ? $about_overview_obj['alt'] : 'This is the image alt'; ?>" title="<?php echo $about_overview_obj['title'] ? $about_overview_obj['title'] : 'This is the image title'; ?>" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 88vw, 39vw" src="<?php echo $about_overview_1000x667; ?>" srcset="<?php echo $about_overview_500x334; ?> 500w, <?php echo $about_overview_800x534; ?> 800w, <?php echo $about_overview_1000x667; ?> 1000w">
          </div>
          <div class="col w-col w-col-6 w-col-stack">
            <div class="partners text-block">
              <h2 class="p-title"><?php echo get_post_meta( get_the_id(), 'abt_about_overview_slogan', true )?></h2>
              <?php echo wpautop( get_post_meta( get_the_id(), 'abt_about_overview_copy', true ) ); ?>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gray page-section" id="experience">
      <div class="centered-content content-wrapper">
        <h2 class="left section-heading">experience</h2>
        <div class="m-btm-30 small-hr"></div>
        <div class="margin-btm-50 row w-row">
          <div class="col p-left-o w-col w-col-6 w-col-stack">
            <div class="no-pad-left text-block">
              <h2 class="p-title"><?php echo get_post_meta( get_the_id(), 'abt_about_history_slogan', true )?></h2>
              <?php echo wpautop( get_post_meta( get_the_id(), 'abt_about_history_copy', true ) ); ?>
            </div>
          </div>
          <?php
            // add_image_size( 'about800x500', 800,500, true);
            // add_image_size( 'about500x313', 500,313, true);
          $about_history_image = get_post_meta( get_the_id(), 'abt_about_history_image', true );
          $about_history_800x500 = wp_get_attachment_image_src($about_history_image, 'about800x500')[0];
          $about_history_500x313 = wp_get_attachment_image_src($about_history_image, 'about500x313')[0];
          $about_history_image_obj = wp_prepare_attachment_for_js( $about_history_image );
            ?>
          <div class="col p-right-0 w-col w-col-6 w-col-stack"><img alt="<?php echo $about_history_image_obj['alt'] ? $about_history_image_obj['alt'] : 'This is the image alt'; ?>" title="<?php echo $about_history_image_obj['title'] ? $about_history_image_obj['title'] : 'This is the image title'; ?>" sizes="(max-width: 479px) 92vw, (max-width: 767px) 88vw, (max-width: 952px) 84vw, (max-width: 991px) 800px, 39vw" src="<?php echo $about_history_800x500; ?>" srcset="<?php echo $about_history_500x313; ?> 500w, <?php echo $about_history_800x500; ?> 800w">
          </div>
        </div>
      </div>
    </div>
 <?php get_footer(); ?>
