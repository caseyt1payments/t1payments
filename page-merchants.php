<?php
    /*
     Template Name: Merchants Page Template
    */
     get_header();

    $merchants_hero_imag = get_post_meta( get_the_id(), 'mer_merchants_hero_image', true );
    $merchants_hero_url = wp_get_attachment_image_src($merchants_hero_imag, 'merchants_hero')[0];
?>
<div class="fixed-subnav-wrap">
    <div class="content-wrapper"><a class="subnav-item" href="#getting-started">Getting Started</a><a class="subnav-item" href="#benefits">Benefits</a><a class="subnav-item" href="#markets">Markets</a><a class="button subnav w-button" href="#">Apply Now</a>
    </div>
</div>
<div class="hero merchants short" style="background-image: -webkit-linear-gradient(270deg, hsla(0, 0%, 9%, .5), hsla(0, 0%, 9%, .5)), url(<?php echo $merchants_hero_url;?>);
    background-image: linear-gradient(180deg, hsla(0, 0%, 9%, .5), hsla(0, 0%, 9%, .5)), url(<?php echo $merchants_hero_url;?>);">
    <div class="content-wrapper short-hero" data-ix="show-fixed-subnav">
        <h1 class="left-page-title purple"><?php the_title(); ?></h1>
        <div class="small-hr"></div>
        <div class="home-slogan sub-slogan"><?php echo get_post_meta( get_the_id(), 'mer_merchants_hero_slogan', true )?></div>
        <div class="hidden-nav" ></div>
    </div>
</div>
<div class="subnav-wrap" data-ix="show-solid-header">
    <div class="content-wrapper"><a class="subnav-item" href="#getting-started">Getting Started</a><a class="subnav-item" href="#benefits">Benefits</a><a class="subnav-item" href="#markets">Markets</a><a class="button subnav w-button" href="<?php echo get_post_meta( get_the_id(), 'mer_merchants_hero_sub_url', true )?>"><?php echo get_post_meta( get_the_id(), 'mer_merchants_hero_sub_text', true )?></a>
    </div>
</div>
<div class="gray page-section" id="getting-started">
      <div class="centered-content content-wrapper">
        <h2 class="left section-heading">Getting Started</h2>
        <div class="m-btm-30 small-hr"></div>
        <div class="div-get-started-content">
          <div class="rw w-row">
            <?php
            $merchants_started_image = get_post_meta( get_the_id(), 'mer_merchants_started_image', true );
            $merchants_started_url = wp_get_attachment_image_src($merchants_started_image, 'home_main')[0];
            $merchants_started_image_obj = wp_prepare_attachment_for_js( $merchants_started_image );
            ?>
            <div class="col w-col w-col-2"><img alt="<?php echo $merchants_started_image_obj['alt'] ? $merchants_started_image_obj['alt'] : 'This is the image alt'; ?>" title="<?php echo $merchants_started_image_obj['title'] ? $merchants_started_image_obj['title'] : 'This is the image title'; ?>" class="get-started-icon" src="<?php echo $merchants_started_url; ?>">
            </div>
            <div class="col w-col w-col-10">
                <?php echo wpautop(get_post_meta( get_the_id(), 'mer_merchants_started_copy', true ));?>
                <a class="button w-button" href="<?php echo get_post_meta( get_the_id(), 'mer_merchants_started_url', true )?>"><?php echo get_post_meta( get_the_id(), 'mer_merchants_started_button', true )?></a>
            </div>
          </div>
        </div>
      </div>
</div>
<div class="page-section" id="benefits">
    <div class="centered-content content-wrapper">
        <h2 class="left section-heading">Benefits</h2>
        <div class="m-btm-30 small-hr"></div>
        	<div class="marg-btn-20 row w-row">
			<?php
			    $args = array(
			        'post_type' => 'benefits',
			        'posts_per_page' => -1,
			        'post_status' => 'publish',
			        'meta_key'   => 'cp_site_show_mer',
					'meta_value' => '1',
			        'orderby'  => array( 'date'=>'DESC', 'post_title' => 'ASC' )
			    );
			    $the_query = new WP_Query( $args );

			    if ( $the_query->have_posts() ) {
			        $i = 0;
			        while ( $the_query->have_posts() ) {
			            $the_query->the_post();

			            if ($i%4==0) {
	                 		echo '</div><div class="anim-cont marg-btn-20 row w-row">';
	            		}
			?>
			            <div class="anim-item col w-col w-col-3 w-col-medium-6 w-col-small-6">
			                <div class="benefit-title-block">
			                    <div><?php the_title(); ?></div>
			                </div>
			            </div>
			<?php
				    $i++;
			 		}
				}
	    	?>
    	</div>
    </div>
</div>
<div class="gray page-section" id="markets">
    <div class="centered-content content-wrapper">
        <h2 class="left section-heading">Markets</h2>
        <div class="m-btm-30 small-hr"></div>
        <?php
		    $args = array(
		        'post_type' => 'markets',
		        'posts_per_page' => 12,
		        'post_status' => 'publish',
		        'orderby'  => array( 'date'=>'DESC', 'post_title' => 'ASC' )
		    );
		    $the_query = new WP_Query( $args );

		    if ( $the_query->have_posts() ) {

		        while ( $the_query->have_posts() ) {
		            $the_query->the_post();
                    $i++;

		            $market_image = get_post_meta( get_the_id(), 'mrk_market_page', true );

		            $market_1000x667 = wp_get_attachment_image_src($market_image, 'industries_1000x667')[0];
		            $market_500x534 = wp_get_attachment_image_src($market_image, 'industries_500x534')[0];
		            $market_800x534 = wp_get_attachment_image_src($market_image, 'industries_800x534')[0];
                    $market_image_obj = wp_prepare_attachment_for_js( $market_image );

		            if ($i%4==1) {
		                 echo '<div class="ind-anim-cont marg-btn-20 row w-row">';
		            }
		?>
                    <div class="ind-anim-item col w-col w-col-3 w-col-medium-6 w-col-small-6">
                        <a class="thumb-link-block w-inline-block" href="<?php the_permalink(); ?>">
                            <div class="market-thumb-wrap"><img alt="<?php echo $market_image_obj['alt'] ? $market_image_obj['alt'] : 'This is the image alt'; ?>" title="<?php echo $market_image_obj['title'] ? $market_image_obj['title'] : 'This is the image title'; ?>" class="market-thumb" sizes="(max-width: 479px) 87vw, (max-width: 991px) 42vw, 18vw" src="<?php echo $market_1000x667; ?>" srcset="<?php echo $market_500x534; ?> 500w, <?php echo $market_800x534; ?> 800w, <?php echo $market_1000x667; ?> 1000w">
                                <div class="thumb-title"><?php the_title(); ?></div>
                            </div>
                        </a>
                    </div>
		<?php
                    if($i%4==0){
                        echo '</div>';
                    }
		        }
		    }
		?>
    </div>
</div>

<div class="logos page-section">
    <div class="content-wrapper">

        <div class="logos row w-row">
            <div class="col no-pad w-col w-col-4">
                <div class="logos row w-row">
    <?php
    global $wpdb;
    $results = $wpdb->get_results( "SELECT * FROM `wp_postmeta` WHERE `meta_key` LIKE '%mer_client_logo%' and `meta_value` <> '' order by `meta_id` asc", OBJECT );
    $total_results = count($results);
    if ($total_results >= 1 ) {
        for ($i=1; $i <= $total_results ; $i++) {
                $post_meta = $results[$i-1]->meta_key;
                $post_id = $results[$i-1]->post_id;
                $meta_key = $results[$i-1]->meta_key;

                $post_img = get_post_meta( $post_id, $meta_key, true );
                $post_img_url = wp_get_attachment_image_src($post_img, 'full')[0];

                ?>
                    <div class="col w-col w-col-6 w-col-small-6 w-col-tiny-6">
                        <div class="client-logo-block">
                            <div class="client-logo" style="background-image: url(<?php echo $post_img_url; ?>);">
                            </div>
                        </div>
                    </div>
                <?php
                if ($i%2==0) {
                    echo'</div></div><div class="col no-pad w-col w-col-4"><div class="logos row w-row">';

                }
                if ($i%6==0 && $i < $total_results) {
                    echo '</div><div class="logos row w-row">';
                }

                if ($i==$total_results ) {
                    echo "</div>";
                }
                ?>

                <?php
        }
    }
    ?></div></div>
    </div>
</div>

<script>
    $('.centered-content div.row:last').addClass('margin-btm-50').removeClass("marg-btn-20");
</script>
<?php get_footer(); ?>
