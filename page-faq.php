<?php
   /*
     Template Name: FAQ Page Template
    */
     get_header();
?> 
<div class="hero no-img">
    <div class="bottom content-wrapper">
        <h1 class="centered-page-title m-btm-60"><?php the_title(); ?></h1>
    </div>
</div>
<div class="page-section" id="program-overview">
    <div class="centered-content content-wrapper">
        <div class="article-content-wrap">
<?php 
    $args = array(
        'post_type' => 'faqs',
        'posts_per_page' => -1,
        'post_status' => 'publish',
        'orderby'  => array( 'date'=>'DESC', 'post_title' => 'ASC' )
    );
    $the_query = new WP_Query( $args );

    if ( $the_query->have_posts() ) {
        $i = 0;
        while ( $the_query->have_posts() ) {
            $the_query->the_post();    
?> 
            <div class="acc-wrap">
                <div class="acc-head" data-ix="open-acc">
                    <h2 class="p-title"><?php the_title(); ?></h2>
                </div>
                <div class="acc-content">
                    <div class="acc-content-inner">
                        <?php wpautop(the_content()); ?>
                    </div>
                </div>
            </div>
            <?php
                }
            }   
            wp_reset_query();
            ?>
        </div>
    </div>
</div>
<?php get_footer(); ?>