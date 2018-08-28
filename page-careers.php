<?php
    /*
     Template Name: Careers Page Template
    */
    get_header();
    $careers_hero_imag = get_post_meta( get_the_id(), 'mer_careers_hero_image', true );
    $careers_hero_url = wp_get_attachment_image_src($careers_hero_imag, 'careers_hero')[0]
?>
<div class="careers hero short" style="background-image: -webkit-linear-gradient(270deg, rgba(51, 51, 102, .85), rgba(51, 51, 102, .85)), url(<?php echo $careers_hero_url;?>);
    background-image: linear-gradient(180deg, rgba(51, 51, 102, .85), rgba(51, 51, 102, .85)), url(<?php echo $careers_hero_url;?>);">
    <div class="content-wrapper short-hero">
        <h1 class="left-page-title"><?php echo get_post_meta( get_the_id(), 'mer_careers_hero_slogan', true )?></h1>
        <div class="small-hr"></div>
        <div class="home-slogan sub-slogan"><?php echo get_post_meta( get_the_id(), 'mer_careers_hero_subslogan', true )?></div>
    </div>
</div>
<div class="gray page-section" id="getting-started">
    <div class="centered-content content-wrapper">
        <h2 class="left section-heading">Open Positions</h2>
        <div class="m-btm-30 small-hr"></div>
        <?php 
            $args = array(
                'post_type' => 'carrer',
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
                    <div class="position-block">
                        <h3 class="position-title"><?php echo the_title(); ?></h3>
                        <p class="positiion-blurb"><?php echo the_content(); ?></p>
                        <div class="position-action-block"><a class="learn-more-job text-link" href="<?php echo get_permalink($post->ID); ?>">Learn more about this job</a>
                        </div>
                    </div>
        <?php
                }
            }
        ?>
    </div>
</div>
<?php get_footer(); ?>