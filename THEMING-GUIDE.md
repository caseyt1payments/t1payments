# Governor Theming Guide

## Notes
- Keep in mind, that you may have to modify, edit, delete some of the existing code in this starter theme during your prototype conversion process, your debugging process, etc.  This is just a starter theme to build off of.

## Steps
1. Copy css assets from prototype to Governor and replace existing placeholder files
	- `normalize.css`
	- `webflow.css`
	- `project_name.webflow.css` <- You will need to rename the path in the wp_enqueue for this file within the `/inc/governor-enqueues.php` file.
		`wp_enqueue_style('webflow-project', get_template_directory_uri() . '/css/$project_name.webflow.css', array(), null, );`
2. Copy js assets from prototype to Governor and replace existing placeholder files
	- `modernizr.js`
	- `webflow.js`
3. Set Content Width in `/inc/governor-content.php`
4. If project requires it, post-format theme support can be re-added by uncommenting it from `/inc/governor-setup.php`
5. Move Images from prototype folder to `Governor/images/` folder.


## Guides, Notes & KIMs (Keep In Mind)s
- `add_image_size()`, should be used in `/inc/governor-images.php`
- `register_widget()`, should be used in `/inc/governor-widgets.php`
- All Scripts & Styles should be added in `/inc/governor-enqueues.php`
- Page Template Architecture (Meta Boxes, etc)
	- Should be added as their own files in `/inc/template-architecture/`
	- Should follow existing naming convention
		- Home Template - home-architecture.php
		- Full Width Template - full-width-architecture.php
		- Contact Template - contact-template.php
		- If you create a 'Services' Page with meta, your meta code would be written in `/inc/template-architecture/services-architecture.php`.
- Post Template Architecture goes in the Custom Post Type's plugin file.
