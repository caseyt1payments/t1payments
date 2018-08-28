<?php
/*
 * Governor Widget Areas & Widgets
 *
 * Widget Areas
 * https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 *
 * Widgets
 * https://codex.wordpress.org/Function_Reference/register_widget
 * https://developer.wordpress.org/reference/functions/register_widget/
 */

/**
 * Register widget area (Sidebars, etc.).
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function governor_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'governor' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'governor_widgets_init' );

?>