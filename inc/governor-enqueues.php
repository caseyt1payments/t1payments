<?php
/*
 * Governor Enqueues
 *
 * Please follow existing commenting practices.
 *
 * Also, please make sure your ordering of dependencies is logical.
 */


/**
 * Enqueue scripts and styles.
 */
function governor_scripts() {
	// Normalize Styles
//	wp_enqueue_style('normalize', get_template_directory_uri() . '/css/normalize.css', array(), null );

	// Webflow Main Styles
//	wp_enqueue_style('webflow-main-styles', get_template_directory_uri() . '/css/webflow.css', array(), null );

	/// Webflow Project Specific Styles
	wp_enqueue_style('t1-payments', get_template_directory_uri() . '/css/t1-payments.webflow.min.css', array(), null );

	// Gravity Forms Specific Styles
//	wp_enqueue_style('governor-gravity', get_template_directory_uri() . '/css/governor-gravity.css', array(), null );
	//wp_enqueue_style('progresscss', '//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css', array(), null );
	wp_enqueue_style('progresscss', '//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css', array(), null );


	// Secondary Stylesheet => $theme/style.css
//	wp_enqueue_style( 'governor-style', get_stylesheet_uri() );


	// Webflow Main JS
//	wp_enqueue_script( 'webflow-js', get_template_directory_uri() . '/js/webflow.js', array(), '1.0', true );

	// Let's Add respond.js if IE 8
	if ( strpos( $_SERVER['HTTP_USER_AGENT'], 'MSIE 8' ) ) {
		// Load respond.js
		wp_enqueue_script( 'respondjs', get_template_directory_uri() . '/js/respond.min.js', array(), '1.0.0', true );
	}

	// Modernizr
//	wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/js/modernizr.js', array(), '1.0', true );

	// Progressbar
	//wp_enqueue_script( 'progressjs', '//code.jquery.com/ui/1.11.4/jquery-ui.js', array(), '1.0', true );
	wp_enqueue_script( 'progressjs', '//code.jquery.com/ui/1.12.1/jquery-ui.min.js', array(), '1.0', true );

	// Customjs
	//wp_enqueue_script( 'customjs', get_template_directory_uri() . '/js/custom.js', array(), '1.0', true );


	// Site Tracking & Data Type Scripts
	// Uncomment if needed
	//wp_enqueue_script( 'site-tracking', get_template_directory_uri() . '/js/site-tracking.js', array(), '1.0', false );
	//wp_enqueue_script( 'min-js', 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js', array(), '1.0', false );
	wp_enqueue_script( 'min-js', 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js', array(), '1.0', false );

	// Skip Link for ADA Compliance
//	wp_enqueue_script( 'governor-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	// if(is_page(5) || is_page(17) || is_page(9) || is_page(15) || is_page(11)) {
	// 	wp_enqueue_script('waypoints', 'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js', array(), '4.0.1', true);
	// 	wp_enqueue_script('velocity', 'http://cdn.jsdelivr.net/velocity/1.1.0/velocity.min.js', array(), '1.1.0', true);
	// }
   wp_enqueue_script('main', get_template_directory_uri() . '/js/main.min.js', array(), '1.0', true );
//	wp_enqueue_script('scroll-magic', get_template_directory_uri() . '/js/ScrollMagic.min.js', array(), '1.0', true );
//	wp_enqueue_script('tween-anim', get_template_directory_uri() . '/js/TweenMax.min.js', array(), '1.0', true );
//	wp_enqueue_script('jquery-gsap', get_template_directory_uri() . '/js/jquery.gsap.min.js', array(), '1.0', true );
//	wp_enqueue_script('gsap-anim', get_template_directory_uri() . '/js/animation.gsap.js', array(), '1.0', true );
//	wp_enqueue_script('animations', get_template_directory_uri() . '/js/animations.js', array(), '1.0', true );

	// Add Comments to Blog Articles When Comments Are Open
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	// Native _s Mobile Nav Button.  If preferred, dev can use this if a dropdown is added to a project later.
	//wp_enqueue_script( 'governor-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );
}
add_action( 'wp_enqueue_scripts', 'governor_scripts' );


//Import admin js
function functions_access() {
   wp_enqueue_media();
   wp_enqueue_script("CNdevadminMetabox", get_template_directory_uri()."/js/meta-box.js", false, "1.0");
   wp_enqueue_style("CNdevAccordianCss", "https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css", false, "1.0");
   wp_enqueue_script("CNdevAccordianJs", "https://code.jquery.com/ui/1.11.4/jquery-ui.js", false, "1.0");
   wp_enqueue_script("themeformjs", get_template_directory_uri()."/js/theme-optionform.js", false, "1.0");
}
add_action('admin_enqueue_scripts', 'functions_access');

?>


