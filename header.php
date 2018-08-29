<?php
    /**
     * The header for our theme.
     *
     * This is the template that displays all of the <head> section and everything up until <div id="content">
     *
     * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
     *
     * @package The_Governor
     */

switch(get_page_uri()){
    case "merchants" :
        $merchants_active = "w--current";
        break;
    case "partners" :
        $partners_active = "w--current";
        break;
    case "payment-gateway" :
        $payment_active = "w--current";
        break;
    case "global-processing" :
        $global_active = "w--current";
        break;
    case "about-us" :
        $about_active = "w--current";
        break;
    case "news" :
        $news_active = "w--current";
        break;
    case "contact" :
        $contact_active = "w--current";
        break;
}

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> data-wf-page="5875673a7ab3550a10f93f8f" data-wf-site="5875673a7ab3550a10f93fa5">
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
        <link rel="profile" href="http://gmpg.org/xfn/11">
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta content="Webflow" name="generator">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- <meta http-equiv="X-UA-Compatible" content="IE=11">
        <meta http-equiv="X-UA-Compatible" content="IE=8"> -->

        <link href="<?php echo get_template_directory_uri(); ?>/images/fav.png" rel="shortcut icon" type="image/x-icon">
        <link href="https://daks2k3a4ib2z.cloudfront.net/img/webclip.png" rel="apple-touch-icon">
        <style>
            html {
            font-size: 100%;
            }
        </style>
        <?php wp_head(); ?>

<!-- Google Tag Manager -->
<script>
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-T6635GZ');
</script>
<!-- End Google Tag Manager -->
		
<!-- Google Tag Manager (noscript) -->
<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T6635GZ" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->		
    
<script type="text/javascript">
    _linkedin_data_partner_id = "351106";
</script>
<script type="text/javascript">
    (function(){var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);})();
</script>
<noscript>
    <img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=351106&fmt=gif" />
</noscript>
		
		
    <div class="main-wrap">
<!--        <div class="alert-wrapper">-->
<!--            <div class="alert-block">-->
<!--                <h1 class="greeting">Hello!</h1>-->
<!--                <div class="welcome-text">Welcome to your website&nbsp;<span class="orange-text">wireframe</span>.</div>-->
<!--                <div class="hr"></div>-->
<!--                <p>This&nbsp;wireframe&nbsp;is a blueprint of your website designed to demonstrate the layout and general functionality. After final approval, our team will move on to incorporating the aesthetics that will bring your design to life!</p>-->
<!--                <a class="ok-btn w-button" data-ix="close-alert-wrap" href="#">ok, got it.</a>-->
<!--            </div>-->
<!--        </div>-->
        <div class="solid-header w-nav" data-animation="over-right" data-collapse="medium" data-duration="400">
            <div class="header-inner w-clearfix">
                <a class="logo solid w-nav-brand" href="<?php echo esc_url( home_url( ) ); ?>">
                    <img alt="logo" title="logo" width="150" height="25" src="<?php echo get_template_directory_uri(); ?>/images/Horizontal-logo-color.svg">
                </a>
                <nav class="nav-menu w-nav-menu white"><!--
                 --><a class="gray nav-link w-nav-link <?php echo $merchants_active; ?>" href="/merchants">Merchants</a><!--
                 --><a class="gray nav-link w-nav-link <?php echo $partners_active; ?>" href="/partners">Partners</a><!--
                 --><a class="gray nav-link w-nav-link <?php echo $payment_active; ?>" href="/payment-gateway">Payment Gateway</a><!--
                 --><a class="gray nav-link w-nav-link <?php echo $global_active; ?>" href="/global-processing">Global Processing</a><!--
                 --><a class="gray nav-link w-nav-link <?php echo $about_active; ?>" href="/>about-us">About Us</a><!--
                 --><a class="gray nav-link w-nav-link <?php echo $news_active; ?>" href="/news">News</a><!--
                 --><a class="gray nav-link w-nav-link <?php echo $contact_active; ?>" href="/contact">Contact</a><!--
                 --><a class="apply nav-link solid w-nav-link" href="/apply-now">Apply Now</a>
                </nav>
                <div class="menu-btn on-solid-header w-clearfix w-nav-button">
                    <div class="menu-icon w-icon-nav-menu"></div>
                    <div class="menu-text">menu</div>
                </div>
            </div>
        </div>
        <div class="header w-nav" data-animation="over-right" data-collapse="medium" data-duration="400" data-ix="show-solid-header">
            <div class="header-top-inner w-clearfix">
                <?php
                    $phone = get_option('hb_header_phone');
                    $phone_url = str_replace('-', '', $phone);
                ?>
                <a class="header-phone" href="tel:<?php echo $phone_url; ?>"><?php echo $phone; ?></a><!--
             --><div class="header-social-icons">
                    <?php if (get_option('hb_header_facebook')) { ?>
                    <a class="social-link w-inline-block" href="<?php echo get_option('hb_header_facebook'); ?>" target="_blank"><img alt="facebook" title="facebook" width="14" height="14" src="<?php echo get_template_directory_uri(); ?>/images/facebook.svg"><!--
                 --></a><!--
                 --><?php } if (get_option('hb_header_twitter')) {
                 ?><a class="social-link w-inline-block" href="<?php echo get_option('hb_header_twitter'); ?>" target="_blank"><img alt="twitter" title="twitter" width="14" height="14" src="<?php echo get_template_directory_uri(); ?>/images/twitter.svg"><!--
                 --></a><!--
                 --><?php } if (get_option('hb_header_google_plus')) {
                 ?><a class="social-link w-inline-block" href="<?php echo get_option('hb_header_google_plus'); ?>" target="_blank"><img alt="google-plus" title="google-plus" width="14" height="14" src="<?php echo get_template_directory_uri(); ?>/images/googleplus.svg"><!--
                 --></a><!--
                 --><?php } if (get_option('hb_header_linkedIn')) {
                 ?><a class="social-link w-inline-block" href="<?php echo get_option('hb_header_linkedIn'); ?>" target="_blank"><img alt="linkedin" title="linkedin" width="14" height="14" src="<?php echo get_template_directory_uri(); ?>/images/linkedin.svg"><!--
                 --></a><!--
                 --><?php } if (get_option('hb_header_youtube')) {
                 ?><a class="social-link w-inline-block" href="<?php echo get_option('hb_header_youtube'); ?>" target="_blank"><img alt="youtube" title="youtube" width="14" height="14" src="<?php echo get_template_directory_uri(); ?>/images/youtube.svg"><!--
                 --></a><?php } ?>
                </div>
            </div>
            <div class="header-inner w-clearfix">
                <?php
                    $site_logo = get_option('hb_site_logo');
                    $site_logo_url = wp_get_attachment_image_src($site_logo, 'main_logo')[0];

                    ?>
                <a class="logo w-nav-brand" href="<?php echo esc_url( home_url( ) ); ?>"><img alt="logo" title="logo" width="200" height="34" src="<?php echo $site_logo_url; ?>">
                </a><!--
             --><nav class="nav-menu w-nav-menu"><!--
                 --><a class="nav-link w-nav-link <?php echo $merchants_active; ?>" href="/merchants">Merchants</a><!--
                 --><a class="nav-link w-nav-link <?php echo $partners_active; ?>" href="/partners">Partners</a><!--
                 --><a class="nav-link w-nav-link <?php echo $payment_active; ?>" href="/payment-gateway">Payment Gateway</a><!--
                 --><a class="nav-link w-nav-link <?php echo $global_active; ?>" href="/global-processing">Global Processing</a><!--
                 --><a class="nav-link w-nav-link <?php echo $about_active; ?>" href="/about-us">About Us</a><!--
                 --><a class="nav-link w-nav-link <?php echo $news_active; ?>" href="/news">News</a><!--
                 --><a class="nav-link w-nav-link <?php echo $contact_active; ?>" href="/contact">Contact</a><!--
                 --><a class="apply nav-link w-nav-link" href="/apply-now">Apply Now</a>
                </nav>
                <div class="menu-btn w-clearfix w-nav-button">
                    <div class="menu-icon w-icon-nav-menu"></div>
                    <div class="menu-text w-hidden-main">menu</div>
                </div>
            </div>
        </div>
    </div>
		
		<!-- Begin Constant Contact Active Forms -->
<script> var _ctct_m = "adbc4d96a2648905b4ae450b378eba11"; </script>
<script id="signupScript" src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js" async defer></script>
<!-- End Constant Contact Active Forms -->

		