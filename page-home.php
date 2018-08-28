<?php
    /*
     Template Name: Home Page Template
    */
     get_header();

    $he_home_hero_slogan = get_post_meta( get_the_id(), 'he_home_hero_slogan', true );
    $he_home_hero_subslogan = get_post_meta( get_the_id(), 'he_home_hero_subslogan', true );
    $he_home_hero_cta_text = get_post_meta( get_the_id(), 'he_home_hero_cta_text', true );
    $he_home_hero_cta_url = get_post_meta( get_the_id(), 'he_home_hero_cta_url', true );

    $he_home_hero_image = get_post_meta( get_the_id(), 'he_home_hero_image', true );
    $he_home_hero_image_url = wp_get_attachment_image_src($he_home_hero_image, 'home_home')[0];
    $he_home_main_text = get_post_meta( get_the_id(), 'he_home_main_text', true );
    ?>
<div class="hero home" style="
    /*background-image: -webkit-linear-gradient(270deg, rgba(51, 51, 102, .88), rgba(51, 51, 102, .88)), url(<?php echo $he_home_hero_image_url; ?>);*/
    background-image: linear-gradient(180deg, rgba(51, 51, 102, .88), rgba(51, 51, 102, .88)), url(<?php echo $he_home_hero_image_url; ?>);">
    <div class="content-wrapper home-hero" data-ix="show-solid-header">
        <!-- <h1 class="left-page-title"><?php echo $he_home_hero_slogan; ?></h1> -->
        <h1 class="left-page-title"><?php echo $he_home_hero_slogan; ?></h1>
        <div class="text-divider"></div>
        <!--  <div class="home-slogan sub-slogan"><?php //echo $he_home_hero_subslogan; ?></div> -->
        <div class="home-slogan sub-slogan line-height22"><?php echo wpautop($he_home_hero_subslogan); ?></div>
        <a class="button w-button" href="<?php echo $he_home_hero_cta_url; ?>"><?php echo $he_home_hero_cta_text; ?></a>
    </div>
    <a class="down-arrow w-inline-block" href="#benefits"></a>
</div>
<div class="client-logos page-section">
    <div class="content-wrapper">
        <div class="logos row w-row">
            <div class="col no-pad w-col w-col-4">
                <div class="logos row w-row">
                    <div class="col w-col w-col-6">
                        <div class="client-logo-block">
                            <div class="client-logo">
                                <div>client
                                    <br>logo
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col w-col w-col-6">
                        <div class="client-logo-block">
                            <div class="client-logo">
                                <div>client
                                    <br>logo
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col no-pad w-col w-col-4">
                <div class="logos row w-row">
                    <div class="col w-col w-col-6">
                        <div class="client-logo-block">
                            <div class="client-logo">
                                <div>client
                                    <br>logo
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col w-col w-col-6">
                        <div class="client-logo-block">
                            <div class="client-logo">
                                <div>client
                                    <br>logo
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col no-pad w-col w-col-4">
                <div class="logos row w-row">
                    <div class="col w-col w-col-6">
                        <div class="client-logo-block">
                            <div class="client-logo">
                                <div>client
                                    <br>logo
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col w-col w-col-6">
                        <div class="client-logo-block">
                            <div class="client-logo">
                                <div>client
                                    <br>logo
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="page-section" id="benefits">
    <div class="centered-content content-wrapper">
        <div class="section-heading-block">
            <h2 class="margin-btm-20 section-heading"><?php echo $he_home_main_text; ?></h2>
            <div class="text-divider"></div>
        </div>
        <div class="anim-cont margin-btm-50 row w-row">
            <?php
                for ($i=1; $i <=4 ; $i++) {
                  $home_main_image = get_post_meta( get_the_id(), 'he_home_main_image_'.$i, true );
                  $home_main_image_url = wp_get_attachment_image_src($home_main_image, 'home_main')[0];
                  $home_main_image_obj = wp_prepare_attachment_for_js( $home_main_image );
                  ?>
            <div class="col w-col w-col-3 w-col-medium-6">
                <div class="anim-item benefit-block">
                    <img alt="<?php echo $home_main_image_obj['alt'] ? $home_main_image_obj['alt'] : 'This is the image alt'; ?>" title="<?php echo $home_main_image_obj['title'] ? $home_main_image_obj['title'] : 'This is the image title'; ?>" class="benefit-icon" src="<?php echo $home_main_image_url; ?>">
                    <div class="benefit-title"><?php echo get_post_meta( get_the_id(), 'he_home_main_name_'.$i, true )?></div>
                    <div><?php echo get_post_meta( get_the_id(), 'he_home_main_copy_'.$i, true )?></div>
                </div>
            </div>
            <?php } ?>
        </div>
        <a class="button w-button" href="<?php echo get_post_meta( get_the_id(), 'he_home_main_url', true )?>"><?php echo get_post_meta( get_the_id(), 'he_home_main_button', true )?></a>
    </div>
</div>
<div class="merchants-partners page-section">
    <div class="content-wrapper v-center w-clearfix">
        <div class="content-block-65 flex-wrap right">
            <a class="hover-scale link-block partners thumb-link w-inline-block" href="<?php echo get_post_meta( get_the_id(), 'he_home_merchants_url', true )?>">
                <h2 class="card-heading"><?php echo get_post_meta( get_the_id(), 'he_home_merchants_title', true )?></h2>
                <div class="small-hr"></div>
                <div><?php echo get_post_meta( get_the_id(), 'he_home_merchants_copy', true )?></div>
                <div class="faux-text-btn">Learn More</div>
            </a>
            <a class="hover-scale link-block merchants thumb-link w-inline-block" href="<?php echo get_post_meta( get_the_id(), 'he_home_partners_url', true )?>">
                <h2 class="card-heading"><?php echo get_post_meta( get_the_id(), 'he_home_partners_title', true )?></h2>
                <div class="small-hr"></div>
                <div><?php echo get_post_meta( get_the_id(), 'he_home_partnerss_copy', true )?></div>
                <div class="faux-text-btn">Learn More</div>
            </a>
        </div>
    </div>
</div>
<div class="gray page-section" id="markets">
    <div class="centered-content content-wrapper served">
        <div class="section-heading-block">
            <h2 class="section-heading">industries served</h2>
            <div class="text-divider"></div>
        </div>
            <?php
                $args = array(
                    'post_type' => 'industries',
                    'posts_per_page' => 12,
                    'post_status' => 'publish',
                    'orderby'  => array( 'date'=>'DESC', 'post_title' => 'ASC' )
                );
                $the_query = new WP_Query( $args );

                if ( $the_query->have_posts() ) {
                    $i = 0;
                    while ( $the_query->have_posts() ) {
                        $the_query->the_post();
                        $i++;

                        $industries_image = get_post_meta( get_the_id(), 'pia_industry_page', true );

                        $industries_1000x667 = wp_get_attachment_image_src($industries_image, 'industries_1000x667')[0];
                        $industries_500x534 = wp_get_attachment_image_src($industries_image, 'industries_500x534')[0];
                        $industries_800x534 = wp_get_attachment_image_src($industries_image, 'industries_800x534')[0];
                        $industries_image_obj = wp_prepare_attachment_for_js( $industries_image );

                        if ($i%4==1) {
                             echo '<div class="ind-anim-cont marg-btn-20 row w-row">';
                        }
            ?>
                        <div class="ind-anim-item col w-col w-col-3 w-col-medium-6 w-col-small-6">
                            <a class="thumb-link-block w-inline-block" href="<?php the_permalink(); ?>">
                                <div class="market-thumb-wrap">
                                    <img alt="<?php echo $industries_image_obj['alt'] ? $industries_image_obj['alt'] : 'This is the image alt'; ?>" title="<?php echo $industries_image_obj['title'] ? $industries_image_obj['title'] : 'This is the image title'; ?>" class="market-thumb" src="<?php echo $industries_1000x667; ?>">
                                    <div class="thumb-title"><?php the_title(); ?></div>
                                </div>
                            </a>
                        </div>
            <?php
                        if ($i%4==0){
                            echo '</div>';
                        }
                    }
                }
            ?>
        </div>
    </div>
</div>
<div class="page-section testimonails">
    <div class="content-wrapper">
        <div class="test-slider w-slider" data-animation="slide" data-duration="500" data-infinite="1">
            <div class="testimonial-slider-mask w-slider-mask">
                <?php
                    $args = array(
                        'post_type' => 'testimonials',
                        'posts_per_page' => 3,
                        'post_status' => 'publish',
                        'orderby'  => array( 'date'=>'DESC', 'post_title' => 'ASC' ),
                        'meta_query' => array(
                            array(
                                'key' => 'tst_show_hp',
                                'value' => '1',
                                'compare' => '==',
                            ),
                        ),
                    );
                    $the_query = new WP_Query( $args );

                    if ( $the_query->have_posts() ) {
                        $i = 0;
                        while ( $the_query->have_posts() ) {
                            $the_query->the_post();
                            $description = get_post_meta( $post->ID, 'tst_event_details_description', true );
                ?>
                    <div class="test-slide w-slide">
                        <div class="slide-content">
                            <div class="test-text-block">
                                <p class="testimonial-text"><?php echo $description ?></p>
                                <div class="centered small-hr"></div>
                                <div class="centered test-author"><?php the_title(); ?></div>
                            </div>
                        </div>
                    </div>
                <?php
                        }
                    }
                ?>
            </div>
            <div class="slide-arrow w-slider-arrow-left">
                <div class="w-icon-slider-left"></div>
            </div>
            <div class="slide-arrow w-slider-arrow-right">
                <div class="w-icon-slider-right"></div>
            </div>
            <div class="slide-nav w-round w-slider-nav"></div>
        </div>
    </div>
</div>
<script>
    $('.centered-content div.row:last').addClass('margin-btm-50').removeClass("marg-btn-20");
</script>
<?php get_footer(); ?>
