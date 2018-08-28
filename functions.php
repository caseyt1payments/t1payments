<?php
/**
 * The Governor functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package The_Governor
 */

// Initial Theme Setup & Theme Options Setup
require get_template_directory() . '/inc/governor-setup.php';

// Max Content Width
require get_template_directory() . '/inc/governor-content.php';

// Theme Image Sizes
require get_template_directory() . '/inc/governor-images.php';

// Theme Widget Areas (sidebars, etc) & Widgets
require get_template_directory() . '/inc/governor-widgets.php';

// Theme Scripts & Styles
require get_template_directory() . '/inc/governor-enqueues.php';

// Custom template tags for this theme.
require get_template_directory() . '/inc/template-tags.php';

// Custom functions that act independently of the theme templates.
require get_template_directory() . '/inc/extras.php';

// Custom Admin Dashboard Color Schemes
require get_template_directory() . '/inc/dash-colors/dash-colors.php';

// Custom Functions
require get_template_directory() . '/inc/custom-functions.php';

// Theme Options Panel
// Only uncomment this after governor-setup.php is full refactored
//require get_template_directory() . '/inc/theme-options/theme-options.php';

// Custom Gravity Forms Functions
// Uncomment if Needed
//require get_template_directory() . '/inc/governor-gravity-scripts.php';

// WooCommerce Support & Customizations
// Uncomment if Needed
//require get_template_directory() . '/inc/governor-woocommerce-scripts.php';

// Basic Breadcrumbs
// Uncomment if Needed
//require get_template_directory() . '/inc/governor-breadcrumbs.php';


/*
 * Page Template Architecture (Meta Boxes, Fields, Etc.)
 * Organized By Template
 */
// Full Width Template Architecture
require get_template_directory() . '/inc/template-architecture/full-width-architecture.php';

// Home Template Architecture
require get_template_directory() . '/inc/template-architecture/home-architecture.php';

// Contact Template Architecture
require get_template_directory() . '/inc/template-architecture/contact-architecture.php';




// Industries Custom Post Type Architecture
require get_template_directory() . '/inc/template-architecture/post-industries-arhitecture.php';

// Markets Custom Post Type Architecture
require get_template_directory() . '/inc/template-architecture/post-markets-arhitecture.php';

// Testimonials Custom Post Type Architecture
require get_template_directory() . '/inc/template-architecture/post-testimonials-arhitecture.php';

// Benefits Custom Post Type Architecture
require get_template_directory() . '/inc/template-architecture/post-benefits-arhitecture.php';

// Careers Custom Post Type Architecture
require get_template_directory() . '/inc/template-architecture/post-careers-arhitecture.php';

// Default Page Template Architecture
require get_template_directory() . '/inc/template-architecture/default-architecture.php';


// Merchants Page Template Architecture
require get_template_directory() . '/inc/template-architecture/merchants-architecture.php';

// Partners Page Template Architecture
require get_template_directory() . '/inc/template-architecture/partners-architecture.php';

// Payment Gateway Page Template Architecture
require get_template_directory() . '/inc/template-architecture/payment-gateway-architecture.php';

// Global Procesing Page Template Architecture
require get_template_directory() . '/inc/template-architecture/global-procesing-architecture.php';

// About Page Template Architecture
require get_template_directory() . '/inc/template-architecture/about-architecture.php';


// News Page Template Architecture
require get_template_directory() . '/inc/template-architecture/news-architecture.php';


// Default Post Type Architecture
require get_template_directory() . '/inc/template-architecture/post-post-arhitecture.php';

// Carers Page Template Architecture
require get_template_directory() . '/inc/template-architecture/careers-architecture.php';

// PCI Compliance Page Template Architecture
require get_template_directory() . '/inc/template-architecture/pci-compliance-architecture.php';


// Merchant Login Page Template Architecture
require get_template_directory() . '/inc/template-architecture/merchant-login-architecture.php';


function remove_api () {
remove_action( 'wp_head', 'rest_output_link_wp_head', 10 );
remove_action( 'wp_head', 'wp_oembed_add_discovery_links', 10 );
}
add_action( 'after_setup_theme', 'remove_api' );

show_admin_bar( false );

add_filter( 'gform_enable_field_label_visibility_settings', '__return_true' );

/**
 * Disable the emoji's
 */
function disable_emojis() {
 remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
 remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
 remove_action( 'wp_print_styles', 'print_emoji_styles' );
 remove_action( 'admin_print_styles', 'print_emoji_styles' ); 
 remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
 remove_filter( 'comment_text_rss', 'wp_staticize_emoji' ); 
 remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
 add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
 add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );
}
add_action( 'init', 'disable_emojis' );

/**
 * Filter function used to remove the tinymce emoji plugin.
 * 
 * @param array $plugins 
 * @return array Difference betwen the two arrays
 */
function disable_emojis_tinymce( $plugins ) {
 if ( is_array( $plugins ) ) {
 return array_diff( $plugins, array( 'wpemoji' ) );
 } else {
 return array();
 }
}

/**
 * Remove emoji CDN hostname from DNS prefetching hints.
 *
 * @param array $urls URLs to print for resource hints.
 * @param string $relation_type The relation type the URLs are printed for.
 * @return array Difference betwen the two arrays.
 */
function disable_emojis_remove_dns_prefetch( $urls, $relation_type ) {
 if ( 'dns-prefetch' == $relation_type ) {
 /** This filter is documented in wp-includes/formatting.php */
 $emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );

$urls = array_diff( $urls, array( $emoji_svg_url ) );
 }

return $urls;
}

//end ?>
