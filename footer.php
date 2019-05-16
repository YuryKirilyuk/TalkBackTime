<?php
/**
 * Fires after the main content, before the footer is output.
 *
 * @since 3.10
 */
do_action( 'et_after_main_content' );

if ( 'on' === et_get_option( 'divi_back_to_top', 'false' ) ) : ?>

	<span class="et_pb_scroll_top et-pb-icon"></span>

<?php endif;

if ( ! is_page_template( 'page-template-blank.php' ) ) : ?>

			<footer id="main-footer">
				<?php get_sidebar( 'footer' ); ?>


		<?php
			if ( has_nav_menu( 'footer-menu' ) ) : ?>

				<div id="et-footer-nav">
					<div class="container">
						<?php
							wp_nav_menu( array(
								'theme_location' => 'footer-menu',
								'depth'          => '1',
								'menu_class'     => 'bottom-nav',
								'container'      => '',
								'fallback_cb'    => '',
							) );
						?>
					</div>
				</div> <!-- #et-footer-nav -->

			<?php endif; ?>

				<div id="footer-bottom">


					<?php
                    if(is_page('792') || is_page('801') || is_page('789')){

                        $logo = ( $user_logo = et_get_option( 'divi_logo' ) ) && ! empty( $user_logo )
						? $user_logo
						: $template_directory_uri . '/images/logo.png';

					    ob_start();
					?>
                    <div class="logo-footer">
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                            <img src="<?php bloginfo('stylesheet_directory');?>/assets/img/logo_footer.png" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" id="logo" data-height-percentage="<?php echo esc_attr( et_get_option( 'logo_height', '54' ) ); ?>" />
                        </a>
                    </div>

                <?php } else { ?>

					<div class="container clearfix">
				<?php
					if ( false !== et_get_option( 'show_footer_social_icons', true ) ) {
						get_template_part( 'includes/social_icons', 'footer' );
					}

					// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
					echo et_core_fix_unclosed_html_tags( et_core_esc_previously( et_get_footer_credits() ) );
					// phpcs:enable
				?>
                        <div class="lightmix">
                            <img alt="" src="<?php bloginfo('stylesheet_directory');?>/assets/img/mcafee.png" />
                            <a href="https://www.lightmix.com/" target="_blank">DC Website design by LightMix</a>
                        </div>
                        <div class="footer-links">
                            <a href="#">Privacy Policy</a>
                        </div>
					</div>	<!-- .container -->

                <?php }  ?>

				</div><!-- #footer-bottom -->
			</footer> <!-- #main-footer -->
		</div> <!-- #et-main-area -->

<?php endif; // ! is_page_template( 'page-template-blank.php' ) ?>

	</div> <!-- #page-container -->

	<?php wp_footer(); ?>


    <!-- Modal -->
    <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                    <iframe id="video1" width="100%" height="315" src="https://www.youtube.com/embed/I3cHwaDHm8I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="modal-footer">
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->


</div>






    <script type="text/javascript" src="<?php bloginfo('stylesheet_directory');?>/assets/js/modal.js"></script>
    <script type="text/javascript" src="<?php bloginfo('stylesheet_directory');?>/assets/js/transition.js"></script>
    <script type="text/javascript" src="<?php bloginfo('stylesheet_directory');?>/assets/js/custom.js"></script>

</body>
</html>
