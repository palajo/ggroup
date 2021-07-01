        </main>
        <footer>
            <?php
                $social = get_field('social_media', 'option');
                $contacts = get_field('contacts', 'option');
            ?>
            <div class="container">
                <div class="row">
                    <div class="col-4 left-block">
                        <ul class="nav flex-column white">
                            <?php if($contacts['footer_contacts_address']): ?>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <?php echo $contacts['footer_contacts_address']; ?>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if($contacts['footer_contacts_email']): ?>
                                <li class="nav-item">
                                    <a href="mailto:<?php echo $contacts['footer_contacts_email']; ?>" class="nav-link">
                                        <?php echo $contacts['footer_contacts_email']; ?>
                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                        <div class="leadbranding">
                            <a href="#">Crafted by <img src="<?php echo get_template_directory_uri(); ?>/assets/images/leadbranding-white.svg" alt="leadbranding.net / logo" /></a>
                        </div>
                    </div>
                    <div class="col-4 middle-block">
                        <div class="footer-logo">
                            <img src="<?php echo get_field('footer_globarch_logo', 'option')['url']; ?>" alt="<?php echo get_field('footer_globarch_logo', 'option')['alt']; ?>" />
                        </div>
                        <div class="get-in-touch">
                            <div class="get-in-touch-title">
                                Get in touch
                            </div>
                            <div class="get-in-touch-link">
                                <a href="#">
                                    Contacts
                                </a>
                            </div>
                            <div class="get-in-touch-social">
                                <?php if($social['footer_social_behance']): ?>
                                    <a href="<?php echo $social['footer_social_behance']['url'] ?>" target="<?php echo $social['footer_social_behance']['target'] ?>">
                                        <div class="icon white behance"></div>
                                    </a>
                                <?php endif; ?>
                                <?php if($social['footer_social_facebook']): ?>
                                    <a href="<?php echo $social['footer_social_facebook']['url'] ?>" target="<?php echo $social['footer_social_facebook']['target'] ?>">
                                        <div class="icon white facebook"></div>
                                    </a>
                                <?php endif; ?>
                                <?php if($social['footer_social_instagram']): ?>
                                    <a href="<?php echo $social['footer_social_instagram']['url'] ?>" target="<?php echo $social['footer_social_instagram']['target'] ?>">
                                        <div class="icon white instagram"></div>
                                    </a>
                                <?php endif; ?>
                                <?php if($social['footer_social_youtube']): ?>
                                    <a href="<?php echo $social['footer_social_youtube']['url'] ?>" target="<?php echo $social['footer_social_youtube']['target'] ?>">
                                        <div class="icon white youtube"></div>
                                    </a>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 right-block">
                        <?php 
                            wp_nav_menu( 
                                array(
                                    'menu'              => 'Footer menu',
                                    'depth'             => 1,
                                    'container'         => false,
                                    'menu_class'        => 'nav flex-column reverse white',
                                    'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
                                    'walker'            => new WP_Bootstrap_Navwalker(),
                                ) 
                            );
                        ?>
                    </div>
                </div>
            </div>
        </footer>
    </body>
</html>
<?php wp_footer(); ?>