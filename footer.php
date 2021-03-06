<?php
    /**
     * The template for displaying the footer.
     *
     * Contains the closing of the #content div and all content after.
     *
     * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
     *
     * @package The_Governor
     */
    $url = get_site_url();
    $url = str_replace( 'http://', "", $url );
    $year=date("Y");
    ?>
<div class="footer">
    <div class="content-wrapper">
        <div class="w-row">
            <div class="col p-left-o w-col w-col-4">
                <div class="footer-title">Resources</div>
                <a class="footer-link" href="<?php echo esc_url( home_url( '/' ) ); ?>faq">Frequently Asked Questions</a>
                <a class="footer-link" href="<?php echo esc_url( home_url( '/' ) ); ?>careers">Careers</a>
                <a class="footer-link" href="<?php echo esc_url( home_url( '/' ) ); ?>merchant-login">Merchant Login</a>
                <a class="footer-link" href="<?php echo esc_url( home_url( '/' ) ); ?>pci-compliance">PCI Compliance</a>
                <a class="footer-link" href="<?php echo esc_url( home_url( '/' ) ); ?>privacy-policy">Privacy Policy</a>
                <a class="footer-link" href="<?php echo esc_url( home_url( '/' ) ); ?>terms-conditions">Terms &amp; Conditions</a>
            </div>
            <div class="col no-pad w-col w-col-8">
                <div class="footer-title">Accreditations</div>
                <div class="footer-accred-row w-row">
                    <div class="accred-logo col w-col w-col-3 w-col-small-3 w-col-tiny-3">
                        <img alt="control-scan" title="control-scan" class="accred-logo" src="<?php echo get_template_directory_uri(); ?>/images/58f540c118dc9b2b2cc1d21c_controlScan.jpg">
                    </div>
                    <div class="accred-logo col w-col w-col-3 w-col-small-3 w-col-tiny-3">
                        <img alt="eta" title="eta" src="<?php echo get_template_directory_uri(); ?>/images/58f540cdf635b6783866fe5f_eta.jpg">
                    </div>
                    <div class="accred-logo col w-col w-col-3 w-col-small-3 w-col-tiny-3">
                        <img alt="g2-web-services" title="g2-web-services" src="<?php echo get_template_directory_uri(); ?>/images/58f540d23573e8784828015b_g2-web.jpg"></div>
                    <div class="accred-logo col w-col w-col-3 w-col-small-3 w-col-tiny-3">
                        <img alt="pci" title="pci" src="<?php echo get_template_directory_uri(); ?>/images/58f540e5f635b6783866fe61_pci.jpg">
                    </div>
                </div>
                <div class="copywrite-text"><?php echo "&copy;".$year." ".$url; ?></div>
                <!--<div class="copywrite-text">Fueled by Adlava</div>-->
            </div>
        </div>
    </div>
</div>
<!-- </div>
    <footer id="colophon" class="site-footer" role="contentinfo">
      <div class="site-info">
        <a href="<?php echo esc_url( __( 'https://wordpress.org/', 'governor' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'governor' ), 'WordPress' ); ?></a>
        <span class="sep"> | </span>
        <?php printf( esc_html__( 'Theme: %1$s by %2$s.', 'governor' ), 'governor', '<a href="http://adlava.com" rel="designer">adlava</a>' ); ?>
      </div>
    </footer>
    </div> -->
<?php wp_footer(); ?>
<!-- </div> --><!-- main-wrap -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/jquery.gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/animations.js"></script> -->
</body>
</html>
