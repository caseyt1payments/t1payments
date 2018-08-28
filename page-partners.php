<?php
    /*
     Template Name: Partners Page Template
    */
    get_header();
    $partners_hero_imag = get_post_meta( get_the_id(), 'mer_partners_hero_image', true );
    $partners_hero_url = wp_get_attachment_image_src($partners_hero_imag, 'partners_hero')[0];
?>
<div class="fixed-subnav-wrap">
    <div class="content-wrapper w-clearfix"><a class="subnav-item" href="#partners-program">Partners Program</a><a class="subnav-item" href="#partner-benefits">Benefits</a><a class="subnav-item" href="#partner-testimonials">Partner Testimonials</a><a class="button subnav w-button" href="#become-a-partner">Become A Partner</a>
    </div>
</div>
<div class="hero partners short" style="background-image: -webkit-linear-gradient(270deg, hsla(0, 0%, 9%, .5), hsla(0, 0%, 9%, .5)), url(<?php echo $partners_hero_url;?>);
    background-image: linear-gradient(180deg, hsla(0, 0%, 9%, .5), hsla(0, 0%, 9%, .5)), url(<?php echo $partners_hero_url;?>);">
    <div class="content-wrapper short-hero" data-ix="show-fixed-subnav">
        <h1 class="left-page-title"><?php the_title(); ?></h1>
        <div class="small-hr"></div>
        <div class="home-slogan sub-slogan"><?php echo get_post_meta( get_the_id(), 'mer_partners_hero_slogan', true ); ?></div>
        <div class="hidden-nav" ></div>
    </div>
</div>
<div class="subnav-wrap" data-ix="show-solid-header">
    <div class="content-wrapper w-clearfix"><a class="subnav-item" href="#partners-program">Partners Program</a><a class="subnav-item" href="#partner-benefits">Benefits</a><a class="subnav-item" href="#partner-testimonials">Partner Testimonials</a><a class="button subnav w-button" href="<?php echo get_post_meta( get_the_id(), 'mer_partners_hero_sub_url', true )?>"><?php echo get_post_meta( get_the_id(), 'mer_partners_hero_sub_text', true )?></a>
    </div>
</div>
<div class="page-section" id="partners-program">
    <div class="centered-content content-wrapper">
        <h2 class="left section-heading">Partners Program</h2>
        <div class="m-btm-30 small-hr"></div>
        <div class="margin-btm-50 row w-row">
            <?php
            $partners_prg_image = get_post_meta( get_the_id(), 'mer_partners_prg_image', true );
            $partners_image1000x667 = wp_get_attachment_image_src($partners_prg_image, 'payment1000x667')[0];
            $partners_image500x334 = wp_get_attachment_image_src($partners_prg_image, 'payment500x334')[0];
            $partners_image800x534 = wp_get_attachment_image_src($partners_prg_image, 'payment800x534')[0];
            $partners_prg_image_obj = wp_prepare_attachment_for_js( $partners_prg_image );
            ?>

            <div class="col p-left-o w-col w-col-6 w-col-stack"><img alt="<?php echo $partners_prg_image_obj['alt'] ? $partners_prg_image_obj['alt'] : 'This is the image alt'; ?>" title="<?php echo $partners_prg_image_obj['title'] ? $partners_prg_image_obj['title'] : 'This is the image title'; ?>"
            src="<?php echo $partners_image1000x667; ?>" srcset="<?php echo $partners_image500x334; ?> 500w, <?php echo $partners_image800x534; ?> 800w, <?php echo $partners_image1000x667; ?> 1000w">
            </div>
            <div class="col w-col w-col-6 w-col-stack">
                <div class="partners text-block">
                    <h2 class="p-title"><?php echo get_post_meta( get_the_id(), 'mer_partners_prg_slogan', true );?></h2>
                    <p><?php echo wpautop(get_post_meta( get_the_id(), 'mer_partners_prg_copy', true ))?></p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="gray page-section" id="partner-benefits">
    <div class="centered-content content-wrapper">
        <h2 class="left section-heading">Benefits</h2>
        <div class="m-btm-30 small-hr"></div>
        <?php
            $args = array(
                'post_type' => 'benefits',
                'posts_per_page' => -1,
                'post_status' => 'publish',
                'meta_key'   => 'cp_site_show_par',
                'meta_value' => '1',
                'orderby'  => array( 'date'=>'DESC', 'post_title' => 'ASC' )
            );
            $the_query = new WP_Query( $args );

            if ( $the_query->have_posts() ) {
                $i = 0;
                while ( $the_query->have_posts() ) {
                    $the_query->the_post();
                    $i++;

                    if ($i%4==1) {
                        echo '<div class="anim-cont marg-btn-20 row w-row">';
                    }
        ?>
                    <div class="anim-item col w-col w-col-3 w-col-medium-6 w-col-small-6">
                        <div class="benefit-title-block">
                            <div><?php the_title(); ?></div>
                        </div>
                    </div>
        <?php
                     if ($i%4==0) {
                        echo '</div>';
                    }
                }
            }
            wp_reset_query();
        ?>
    </div>
</div>
<div class="page-section testimonails" id="partner-testimonials">
    <div class="content-wrapper">
        <h2 class="centered light m-btm-0 section-heading">partner testmonials</h2>
        <div class="test-slider w-slider" data-animation="slide" data-duration="500" data-infinite="1">
            <div class="w-slider-mask">
                <?php
                $argst = array(
                    'post_type' => 'testimonials',
                    'posts_per_page' => '3',
                    'post_status' => 'publish',
                    'orderby'  => array( 'date'=>'DESC', 'post_title' => 'ASC' ),
                    'meta_query' => array(
                         array(
                            'key' => 'tst_show_prt',
                            'value' => '1',
                            'compare' => '==',
                        ), 
                    ),
                );

                    $the_query = new WP_Query( $argst );

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
                    wp_reset_query();
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
<div class="form gray page-section" id="become-a-partner">
    <div class="content-wrapper">
        <h2 class="left margin-btm-20 section-heading">Become a Partner</h2>
        <div class="m-btm-30 small-hr"></div>
        <div class="w-row">
            <?php
            $partners_become_image = get_post_meta( get_the_id(), 'mer_partners_become_image', true );
            $become_image1000x667 = wp_get_attachment_image_src($partners_become_image, 'payment1000x667')[0];
            $become_image500x334 = wp_get_attachment_image_src($partners_become_image, 'payment500x334')[0];
            $become_image800x534 = wp_get_attachment_image_src($partners_become_image, 'payment800x534')[0];
            $become_image1080x721 = wp_get_attachment_image_src($partners_become_image, 'partner1080x721')[0];
            $partners_become_image_obj = wp_prepare_attachment_for_js( $partners_become_image );
            ?>

            <div class="col p-left-o w-col w-col-6 w-col-stack"><img alt="<?php echo $partners_become_image_obj['alt'] ? $partners_become_image_obj['alt'] : 'This is the image alt'; ?>" title="<?php echo $partners_become_image_obj['title'] ? $partners_become_image_obj['title'] : 'This is the image title'; ?>" class="img-full" sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 88vw, 41vw" src="<?php echo $become_image1000x667; ?>" srcset="<?php echo $become_image500x334; ?> 500w, <?php echo $become_image800x534; ?> 800w, <?php echo $become_image1080x721; ?> 1080w, <?php echo $become_image1000x667; ?> 1313w">
            </div>
            <div class="w-col w-col-6 w-col-stack">
                <div class="become-partner-form w-form">
                    <h2 class="p-title">
                        <?php echo get_post_meta( get_the_ID(), 'mer_partners_become_slogan', true );?>
                    </h2>
                    <?php
                        echo wpautop(get_post_meta( get_the_ID(), 'mer_partners_become_copy', true ));
                        gravity_form(1, false);
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
</div>
<script>
    $('input[type="text"]').addClass('text-field top w-input').removeClass("medium");
    $('textarea').addClass('comments w-input').removeClass("medium")
    //$('textarea').css("height","100px");
    $('textarea').css({"height": "100px", "resize": "vertical"});
    $('input[type="submit"]').addClass('button w-button');
</script>
<?php get_footer(); ?>
