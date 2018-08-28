<?php
  /*
   Template Name: Merchant Login Page Template
  */
   get_header();
?>
  <div class="login page-section" id="program-overview">
      <div class="centered-content content-wrapper v-center">
        <div class="article-content-wrap centered-content">
          <h1 class="centered-page-title"><?php the_title(); ?></h1>
          <div class="text-divider"></div>
          <?php echo wpautop(get_post_meta( get_the_id(), 'pci_merchant_login_slogans', true ))?>
          <a class="button w-button" href="<?php echo get_post_meta( get_the_id(), 'pci_merchant_login_url', true )?>"><?php echo get_post_meta( get_the_id(), 'pci_merchant_login_text', true )?></a>

        </div>
      </div>
    </div>
 <?php get_footer(); ?>