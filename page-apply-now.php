<?php
/*
 Template Name: Apply Now Page Template
*/
 get_header();
?>

    <div class="apply hero" id="program-overview">
        <div class="content-wrapper home-hero apply-now-content-wrapper">
            <div class="w-row">
                <div class="col p-left-o w-col w-col-6">
                    <div class="contact-text-block p-right-40">
                        <h1 class="apply-now-left-page-title"><?php the_title(); ?></h1>
                        <div class="text-divider"></div>
                        <p class="_100 apply-now-sub-slogan"><?php echo $post->post_content; ?></p>
                    </div>
                </div>
                <div class="w-col w-col-6">
                    <div class="in-hero-form-wrap w-form">
                            <?php gravity_form(5, false); ?>

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
