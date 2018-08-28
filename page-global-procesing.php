<?php
    /*
     Template Name: Global Procesing Page Template
    */
     get_header();
     $global_procesing_hero_image = get_post_meta( get_the_id(), 'glb_global_procesing_hero_image', true );
     $global_procesing_url = wp_get_attachment_image_src($global_procesing_hero_image, 'merchants_hero')[0];
?>
<div class="fixed-subnav-wrap">
    <div class="content-wrapper w-clearfix"><a class="subnav-item" href="#program-overview">Program Overview</a><a class="subnav-item" href="#benefits">Benefits</a><!-- <a class="button subnav w-button" href="#sign-up-today">Sign-up Today!</a> -->
    </div>
</div>
<div class="global-processing hero short" style="background-image: url(<?php echo $global_procesing_url;?>)">
    <div class="content-wrapper short-hero" data-ix="show-fixed-subnav">
        <h1 class="left-page-title"><?php the_title(); ?></h1>
        <div class="small-hr"></div>
        <div class="home-slogan sub-slogan"><?php echo get_post_meta( get_the_id(), 'glb_global_procesing_hero_slogan', true )?></div>
        <div class="hidden-nav" ></div>
    </div>
</div>
<div class="subnav-wrap" data-ix="show-solid-header">
    <div class="content-wrapper"><a class="subnav-item" href="#program-overview">Program Overview</a><a class="subnav-item" href="#benefits">Benefits</a><!-- <a class="button subnav w-button" href="<?php echo get_post_meta( get_the_id(), 'glb_global_procesing_hero_sub_url', true )?>"><?php echo get_post_meta( get_the_id(), 'glb_global_procesing_hero_sub_text', true )?></a> -->
    </div>
</div>
<div class="page-section" id="program-overview">
    <div class="centered-content content-wrapper">
        <h2 class="left section-heading">Program Overview</h2>
        <div class="m-btm-30 small-hr"></div>
        <div class="row w-row">
            <?php
            $global_overview = get_post_meta( get_the_id(), 'glb_global_overview_image', true );
            $global_overview1000x667 = wp_get_attachment_image_src($global_overview, 'payment1000x667')[0];
            $global_overview500x334 = wp_get_attachment_image_src($global_overview, 'payment500x334')[0];
            $global_overview800x534 = wp_get_attachment_image_src($global_overview, 'payment800x534')[0];
            $global_overview_obj = wp_prepare_attachment_for_js( $global_overview );
            ?>
            <div class="col p-left-o w-col w-col-6 w-col-stack"><img alt="<?php echo $global_overview_obj['alt'] ? $global_overview_obj['alt'] : 'This is the image alt'; ?>" title="<?php echo $global_overview_obj['title'] ? $global_overview_obj['title'] : 'This is the image title'; ?>" src="<?php echo $global_overview1000x667; ?>" srcset="<?php echo $global_overview500x334; ?> 500w, <?php echo $global_overview800x534; ?> 800w, <?php echo $global_overview1000x667; ?> 1000w">
            </div>
            <div class="col w-col w-col-6 w-col-stack">
                <div class="partners text-block">
                    <h2 class="p-title"><?php echo get_post_meta( get_the_id(), 'glb_global_overview_slogan', true )?></h2>
                    <?php echo wpautop(get_post_meta( get_the_id(), 'glb_global_overview_copy', true ));?>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="gray page-section" id="benefits">
    <div class="centered-content content-wrapper">
        <h2 class="left section-heading">Benefits</h2>
        <div class="m-btm-30 small-hr"></div>
        <div class="marg-btn-20 row w-row">
            <?php
                $args = array(
                    'post_type' => 'benefits',
                    'posts_per_page' => -1,
                    'post_status' => 'publish',
                    'meta_key'   => 'cp_site_show_pro',
                    'meta_value' => '1',
                    'orderby'  => array( 'date'=>'DESC', 'post_title' => 'ASC' )
                );
                $the_query = new WP_Query( $args );

                if ( $the_query->have_posts() ) {
                    $i = 0;
                    while ( $the_query->have_posts() ) {
                        $the_query->the_post();

                        if ($i%4==0) {
                            echo '</div><div class="anim-cont marg-btn-20 row w-row">';
                        }
            ?>
                        <div class="anim-item col w-col w-col-3 w-col-medium-6 w-col-small-6">
                            <div class="benefit-title-block">
                                <div><?php the_title(); ?></div>
                            </div>
                        </div>
            <?php
                    $i++;
                    }
                }
                wp_reset_query();
            ?>
        </div>
    </div>
</div>
<?php
$global_sign_up = get_post_meta( get_the_id(), 'glb_global_sign_up_image', true );
$global_sign_up1000x667 = wp_get_attachment_image_src($global_sign_up, 'industries_1000x667')[0];
$global_sign_up500x334 = wp_get_attachment_image_src($global_sign_up, 'industries_500x334')[0];
$global_sign_up800x534 = wp_get_attachment_image_src($global_sign_up, 'industries_800x534')[0];
?>

<!-- <div class="page-section" id="sign-up-today">
    <div class="content-wrapper">
        <h2 class="left margin-btm-20 section-heading">Sign-up Today!</h2>
        <div class="m-btm-30 small-hr"></div>
        <div class="w-row"> -->


             <!-- Leave Commented out -->
            <!-- <div class="col p-left-o w-col w-col-6 w-col-stack"><img class="img-full" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 88vw, 39vw" src="<?php echo get_template_directory_uri(); ?>/images/AdobeStock_94851182_WM.jpeg" srcset="<?php echo get_template_directory_uri(); ?>/images/AdobeStock_94851182_WM-p-500x332.jpeg 500w, <?php echo get_template_directory_uri(); ?>/images/AdobeStock_94851182_WM-p-800x532.jpeg 800w, <?php echo get_template_directory_uri(); ?>/images/AdobeStock_94851182_WM.jpeg 1000w">
            </div> -->


<!--              <div class="col p-left-o w-col w-col-6 w-col-stack"><img class="img-full" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 88vw, 39vw" src="<?php echo $global_sign_up1000x667; ?>" srcset="<?php echo $global_sign_up500x334; ?> 500w, <?php echo $global_sign_up800x534; ?> 800w, <?php echo $global_sign_up1000x667; ?> 1000w">
            </div>
            <div class="w-col w-col-6 w-col-stack">
                <div class="become-partner-form w-form">
                    <form data-name="Email Form" id="email-form" name="email-form">
                        <h2 class="p-title"><?php echo get_post_meta( get_the_id(), 'glb_global_sign_up_slogan', true );?></h2> -->

                        <!-- Leave Commented out -->
                        <!--   <p class="form-intro">Consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p> -->

<!--                     </form>
                    <?php
                        echo wpautop(get_post_meta( get_the_id(), 'glb_global_sign_up_copy', true ));
                        echo gravity_form(2, false);
                    ?>
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
</div> -->
<script>
    $('input[type="text"]').addClass('text-field top w-input').removeClass("medium");
    $('textarea').addClass('comments w-input').removeClass("medium");
    $('input[type="submit"]').css("width","auto");
    $('textarea').css({"height": "100px", "resize": "vertical"});
    $('input[type="submit"]').addClass('button w-button');
</script>
<?php get_footer(); ?>
