<?php
/*
 * Initial Governor Theme Setup
 */



if ( ! function_exists( 'governor_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function governor_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on The Governor, use a find and replace
	 * to change 'governor' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'governor', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'governor' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See https://developer.wordpress.org/themes/functionality/post-formats/
	 */
	// Deprecating this.  But keeping it here in case it's ever needed in a project.
	/*add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
	) );*/


	require get_template_directory() . '/inc/theme-options/style-script.php';
	/* 
	* Load up our theme options page and related code.
	* require only in admin! 
	*/ 
    if(is_admin()){
		require get_template_directory() . '/inc/theme-options/theme-options.php';
	}

}
endif;
add_action( 'after_setup_theme', 'governor_setup' );

// Add Image Size
add_action( 'after_setup_theme', 'wpdocs_theme_setup' );
function wpdocs_theme_setup() {
    add_image_size( 'main_logo', 300,50, true);
    add_image_size( 'hero_image', 1200,574, true);
    add_image_size( 'home_home', 1600,1100, true);
    add_image_size( 'home_main', 150,150, true);
    add_image_size( 'merchants_hero', 1600,600, true);
    add_image_size( 'payment500x302', 500,302, true);
    add_image_size( 'payment772x466', 772,466, true);
    add_image_size( 'payment1000x667', 1000,667, true);
    add_image_size( 'payment500x334', 500,334, true);
    add_image_size( 'payment800x534', 800,534, true);
    add_image_size( 'about800x500', 800,500, true);
    add_image_size( 'about500x313', 500,313, true);
	add_image_size( 'industries_1000x667', 1000,667, true);
    add_image_size( 'industries_500x534', 500,534, true);
    add_image_size( 'industries_800x534', 800,534, true);
    add_image_size( 'client_logo', 80,80, true);
    add_image_size( 'partner1080x721', 1080,721, true);

    add_image_size( 'payment871x690', 871,690, true);
    add_image_size( 'payment500x397', 500,397, true);
    add_image_size( 'payment800x634', 800,634, true);
   
    add_image_size( 'payment800x465', 800,465, true);

    //add_image_size( 'payment772x446', 772,446, true);
    //add_image_size( 'payment500x302', 500,302, true);
	add_image_size( 'payment668x858', 668,858, true);
    add_image_size( 'payment500x643', 500,643, true);

    add_image_size( 'payment679x460', 679,460, true);
    add_image_size( 'payment500x339', 500,339, true);
    
}

/*
 *
 * Hide editor on specific pages.
 *
 */
add_action( 'admin_init', 'hide_editor' );
function hide_editor() {
  // Get the Post ID.
  $post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
  if( !isset( $post_id ) ) return;
 
  // Hide the editor on the page titled 'Homepage'
  /*$homepgname = get_the_title($post_id);
  if($homepgname == 'Homepage'){ 
    remove_post_type_support('page', 'editor');
  }*/
  
  // Hide the editor on a page with a specific page template
  // Get the name of the Page Template file.
  $template_file = get_post_meta($post_id, '_wp_page_template', true);
  //echo "<pre>"; var_dump($template_file); echo "</pre>";die();
  if($template_file != 'default' && $template_file != 'page-apply-now.php'){ // the filename of the page template
    remove_post_type_support('page', 'editor');
  }
}

// Remove Featured Image
add_action('do_meta_boxes', 'remove_thumbnail_box');
function remove_thumbnail_box() {
	$no_thumbnail = array('post','page');
    remove_meta_box( 'postimagediv',$no_thumbnail,'side' );
}


//allow-svg-through-wordpress-media-uploader
function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

?>