<?php
    /*
     Template Name: Contact Page Template
    */
     get_header();
    $contact_hero_imag = get_post_meta( get_the_id(), 'mer_contact_hero_image', true );
    $contact_hero_url = wp_get_attachment_image_src($contact_hero_imag, 'contact_hero')[0];
    ?>
<div class="main-wrap">
<div class="contact hero short" style="background-image: -webkit-linear-gradient(270deg, rgba(51, 51, 102, .88), rgba(51, 51, 102, .88)), url(<?php echo $contact_hero_url;?>);
    background-image: linear-gradient(180deg, rgba(51, 51, 102, .88), rgba(51, 51, 102, .88)), url(<?php echo $contact_hero_url;?>);">
    <div class="content-wrapper short-hero">
        <h1 class="left-page-title"><?php the_title(); ?></h1>
        <div class="s small-hr"></div>
        <div class="home-slogan sub-slogan"><?php echo get_post_meta( get_the_id(), 'mer_contact_hero_slogan', true )?></div>
    </div>
</div>
<div class="gray page-section" id="sign-up-today">
    <div class="content-wrapper">
        <div class="w-row">
            <div class="w-col w-col-6">
                <div class="contact-text-block">
                    <div class="m-btm-30 small-hr"></div>
                    <?php echo wpautop(get_post_meta( get_the_id(), 'mer_contact_copy', true ))?>
                    <div class="address-block"><div class="p-title"><?php echo get_post_meta( get_the_id(), 'mer_contact_company_title', true )?></div><p><?php echo get_post_meta( get_the_id(), 'mer_contact_company_address', true )?></p>
                    </div>
                    <div class="address-block">
                        <div class="contact-label">Sales:</div><!-- 
                     --><p class="email"><a href="mailto:<?php echo get_post_meta( get_the_id(), 'mer_contact_sales_email', true )?>" target="_blank"><?php echo get_post_meta( get_the_id(), 'mer_contact_sales_email', true )?></a></p>
                    </div>
                    <div class="address-block support">
                        <div class="contact-label">Support:</div><!-- 
                     --><p class="email"><a href="mailto:<?php echo get_post_meta( get_the_id(), 'mer_contact_support_emai', true )?>" target="_blank"><?php echo get_post_meta( get_the_id(), 'mer_contact_support_emai', true )?></a></p>
                    </div>
                    <div class="address-block phone">
                        <div class="contact-label">Corporate Office:</div><!-- 
                     --><p class="email"><?php echo get_post_meta( get_the_id(), 'mer_contact_office_phone', true )?></p>
                    </div>
                    <div class="address-block m-btm-25 phone">
                        <div class="contact-label">Fax:</div><!-- 
                     --><p class="email"><?php echo get_post_meta( get_the_id(), 'mer_contact_fax', true )?></p>
                    </div>
                    <div class="address-block">
                        <div class="contact-label">Hours of Operation</div><!-- 
                     --><?php echo wpautop(get_post_meta( get_the_id(), 'mer_contact_hours_operation', true ))?>
                    </div>
                </div>
            </div>
            <div class="w-col w-col-6">
                <div class="w-form">
                    <?php echo gravity_form(3, false); ?>
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
<?php get_footer(); ?>