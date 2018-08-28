<?php
/*
 Template Name: Apply Now Page Template
*/
 get_header();
?>

    <div class="apply hero" id="program-overview">
        <div class="content-wrapper home-hero">
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

    <script>
        $('input[type="text"]').addClass('text-field w-input').removeClass("medium");
        $('textarea').addClass('comments w-input').removeClass("medium");
        $('select').addClass('select-field w-select').removeClass("gfield_select");
        $('textarea').css({"height": "100px", "resize": "vertical"});
        $('input[type="submit"]').addClass('button centered w-button');

        $('.gfield_description, .validation_message').hide();
    </script>

<?php get_footer(); ?>
