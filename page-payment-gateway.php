<?php
    /*
     Template Name: Payment Gateway Page Template
    */
    get_header();
    $payment_gateway_hero_imag = get_post_meta( get_the_id(), 'pg_payment_gateway_hero_image', true );
    $payment_gateway_hero_url = wp_get_attachment_image_src($payment_gateway_hero_imag, 'payment_gateway_hero')[0];

    $item1 = get_post_meta( get_the_id(), 'pg_payment_trusted_1_image', true );
    $item1_871x690 = wp_get_attachment_image_src($item1, 'payment871x690')[0];
    $item1_500x397 = wp_get_attachment_image_src($item1, 'payment500x397')[0];
    $item1_800x634 = wp_get_attachment_image_src($item1, 'payment800x634')[0];
    $item1_obj = wp_prepare_attachment_for_js( $item1 );

    $item2 = get_post_meta( get_the_id(), 'pg_payment_trusted_2_image', true );
    //$item2_772x446 = wp_get_attachment_image_src($item2, '')[0];//wp_get_attachment_image_src($item2, 'payment772x446')[0];
    $item2_800x465 = wp_get_attachment_image_src($item2, 'payment800x465')[0];
    $item2_500x302 = wp_get_attachment_image_src($item2, 'payment500x302')[0];
    $item2_obj = wp_prepare_attachment_for_js( $item2 );

    $item3 = get_post_meta( get_the_id(), 'pg_payment_trusted_3_image', true );
    $item3_772x446 = wp_get_attachment_image_src($item3, 'payment668x858')[0];
    

    $item3_500x302 = wp_get_attachment_image_src($item3, 'payment500x643')[0];
    $item3_obj = wp_prepare_attachment_for_js( $item3 );
    //$item3_500x302 = wp_get_attachment_image_src($item3, 'payment500x302')[0];
?>
<div class="hero pos-systems short" style="background-image: -webkit-linear-gradient(270deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(<?php echo $payment_gateway_hero_url;?>);
    background-image: linear-gradient(180deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(<?php echo $payment_gateway_hero_url;?>);">
    <div class="content-wrapper short-hero" data-ix="show-fixed-subnav">
        <h1 class="left-page-title"><?php the_title(); ?></h1>
        <div class="small-hr"></div>
        <div class="home-slogan sub-slogan"><?php echo get_post_meta( get_the_id(), 'pg_payment_hero_slogan', true )?></div>
    </div>
</div>
<div class="gray page-section" id="system-overview">
    <div class="centered-content content-wrapper">
        <div class="centered m-btm-30 small-hr"></div>
        <div class="centered section-title-subtext"><?php echo wpautop(get_post_meta( get_the_id(), 'pg_payment_main_copy', true )) ?></div>
        <div class="anim-cont margin-btm-50 row w-row">
            <?php for ($i=1; $i <=3 ; $i++) {
                $payment_main_image = get_post_meta( get_the_id(), 'pg_payment_main_'.$i.'_image', true );
                $payment_image_url = wp_get_attachment_image_src($payment_main_image, 'home_main')[0];
                $payment_main_image_obj = wp_prepare_attachment_for_js( $payment_main_image );
            ?>
            <div class="col no-pad w-col w-col-4">
                <div class="anim-item benefit-block">
                    <img alt="<?php echo $payment_main_image_obj['alt'] ? $payment_main_image_obj['alt'] : 'This is the image alt'; ?>" title="<?php echo $payment_main_image_obj['title'] ? $payment_main_image_obj['title'] : 'This is the image title'; ?>" class="benefit-icon" src="<?php echo  $payment_image_url; ?>">
                    <div class="benefit-title"><?php echo get_post_meta( get_the_id(), 'pg_payment_main_'.$i.'_title', true ) ?></div>
                    <div><?php echo wpautop(get_post_meta( get_the_id(), 'pg_payment_main_'.$i.'_copy', true )) ?></div>
                </div>
            </div>
            <?php } ?>
        </div>

    </div>
</div>
<div class="p-btm-0 page-section" id="product-gallery">
    <div class="content-wrapper">
        <h2 class="left section-heading">trusted solutions</h2>
        <div class="m-btm-30 small-hr"></div>
        <div class="m-btm-80 m-top-80 row w-row">
            <!-- <div class="col p-left-o w-col w-col-6"><img sizes="(max-width: 479px) 92vw, (max-width: 767px) 83vw, (max-width: 991px) 44vw, 39vw" src="<?php echo $item1_871x690; ?>" srcset="<?php echo $item1_500x397; ?> 500w, <?php echo $item1_800x634; ?> 800w, <?php echo $item1_871x690; ?> 871w" width="500">
            </div> -->
            <div class="col p-left-o w-col w-col-6"><img alt="<?php echo $item1['alt'] ? $item1['alt'] : 'This is the image alt'; ?>" title="<?php echo $item1['title'] ? $item1['title'] : 'This is the image title'; ?>" sizes="(max-width: 479px) 92vw, (max-width: 767px) 83vw, (max-width: 991px) 44vw, 39vw" src="<?php echo $item1_871x690; ?>" width="500">

            </div>

            <div class="col w-col w-col-6">
                <div class="partners text-block">
                    <h2 class="p-title"><?php echo get_post_meta( get_the_id(), 'pg_payment_trusted_1_title', true ) ?></h2>
                    <?php echo wpautop(get_post_meta( get_the_id(), 'pg_payment_trusted_1_copy', true )) ?>
                </div>
            </div>
        </div>
        <div class="m-btm-80 row w-hidden-main w-hidden-medium w-row">
            <div class="col p-left-o w-col w-col-6"><img alt="<?php echo $item2['alt'] ? $item2['alt'] : 'This is the image alt'; ?>" title="<?php echo $item2['title'] ? $item2['title'] : 'This is the image title'; ?>" sizes="(max-width: 479px) 100vw, (max-width: 767px) 303.6000061035156px, 100vw" src="<?php echo $item2_800x465; ?>" srcset="<?php echo $item2_500x302; ?> 500w, <?php echo $item2_800x465; ?> 772w">

            </div>
            <div class="col w-col w-col-6">
                <div class="no-pad-left text-block">
                   <h2 class="p-title"><?php echo get_post_meta( get_the_id(), 'pg_payment_trusted_2_title', true ) ?></h2>
                    <?php echo wpautop(get_post_meta( get_the_id(), 'pg_payment_trusted_2_copy', true )) ?>
                </div>
            </div>
        </div>
        <div class="m-btm-80 row w-hidden-small w-hidden-tiny w-row">
            <div class="col p-left-o w-col w-col-6">
                <div class="no-pad-left text-block">
                    <h2 class="p-title"><?php echo get_post_meta( get_the_id(), 'pg_payment_trusted_2_title', true ) ?></h2>
                    <?php echo wpautop(get_post_meta( get_the_id(), 'pg_payment_trusted_2_copy', true )) ?>
                </div>
            </div>
            <div class="col w-col w-col-6"><img alt="<?php echo $item2['alt'] ? $item2['alt'] : 'This is the image alt'; ?>" title="<?php echo $item2['title'] ? $item2['title'] : 'This is the image title'; ?>" sizes="(max-width: 767px) 100vw, (max-width: 991px) 40vw, 38vw" src="<?php echo $item2_800x465; ?>" srcset="<?php echo $item2_500x302; ?> 500w, <?php echo $item2_800x465; ?> 772w">

            </div>
        </div>
        <div class="row w-row">
            <div class="col p-left-o w-col w-col-6"><img alt="<?php echo $item3['alt'] ? $item3['alt'] : 'This is the image alt'; ?>" title="<?php echo $item3['title'] ? $item3['title'] : 'This is the image title'; ?>" class="image" height="450" sizes="(max-width: 479px) 83vw, (max-width: 767px) 679px, (max-width: 771px) 73vw, (max-width: 991px) 42vw, 39vw" src="<?php echo $item3_772x446; ?>" srcset="<?php echo $item3_500x302; ?> 500w, <?php echo $item3_772x446; ?> 679w">

            </div>
            <div class="col w-col w-col-6">
                <div class="partners text-block">
                    <h2 class="p-title"><?php echo get_post_meta( get_the_id(), 'pg_payment_trusted_3_title', true ) ?></h2>
                    <?php echo wpautop(get_post_meta( get_the_id(), 'pg_payment_trusted_3_copy', true )) ?>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="gray page-section">
    <div class="centered-content content-wrapper">
        <h2 class="left section-heading">management tools</h2>
        <div class="m-btm-30 small-hr"></div>
        <div class="margin-btm-50 row w-row">
            <?php
                $payment_management_image = get_post_meta( get_the_id(), 'pg_payment_management_image', true );
                $payment_managemen1000x667 = wp_get_attachment_image_src($payment_management_image, 'payment1000x667')[0];
                $payment_managemen500x334 = wp_get_attachment_image_src($payment_management_image, 'payment500x334')[0];
                $payment_managemen800x534 = wp_get_attachment_image_src($payment_management_image, 'payment800x534')[0];
                $payment_management_image_obj = wp_prepare_attachment_for_js( $payment_management_image );
                ?>
            <div class="col p-left-o w-col w-col-6 w-col-stack">
              <img alt="<?php echo $payment_management_image_obj['alt'] ? $payment_management_image_obj['alt'] : 'This is the image alt'; ?>" title="<?php echo $payment_management_image_obj['title'] ? $payment_management_image_obj['title'] : 'This is the image title'; ?>" src="<?php echo $payment_managemen1000x667; ?>"
                srcset="<?php echo $payment_managemen500x334; ?> 500w,
                <?php echo $payment_managemen800x534; ?> 800w,
                <?php echo $payment_managemen1000x667; ?> 1000w">
            </div>
            <div class="col w-col w-col-6 w-col-stack">
                <div class="partners text-block">
                    <h2 class="p-title"><?php echo get_post_meta( get_the_id(), 'pg_payment_management_title', true ) ?></h2>
                    <?php echo wpautop(get_post_meta( get_the_id(), 'pg_payment_management_copy', true )) ?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php get_footer(); ?>
