<?php
  /*
   Template Name: PCI Compliance Page Template
  */
   get_header();
?>
  <div class="login page-section" id="program-overview">
      <div class="centered-content content-wrapper v-center">
        <div class="article-content-wrap centered-content">
          <h1 class="centered-page-title"><?php the_title(); ?></h1>
          <div class="text-divider"></div>
          <!-- <p class="light sub-text">asdasdasd asda a</p> -->
          <?php echo wpautop(get_post_meta( get_the_id(), 'pci_compliance_slogans', true ))?>
          <a class="button w-button" href="<?php echo get_post_meta( get_the_id(), 'pci_compliance_url', true )?>" target="_blank"><?php echo get_post_meta( get_the_id(), 'pci_compliance_text', true )?></a>
        </div>
      </div>
    </div>
 <?php get_footer(); ?>