        </main>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-4 left-block">
                        <ul class="nav flex-column white">
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <?php echo get_field('footer_contacts_address', 'option'); ?>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="mailto:<?php echo get_field('footer_contacts_email', 'option'); ?>" class="nav-link">
                                    <?php echo get_field('footer_contacts_email', 'option'); ?>
                                </a>
                            </li>
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
                            <?php
                                $behance = get_field('footer_social_behance', 'option');
                                $facebook = get_field('footer_social_facebook', 'option');
                                $instagram = get_field('footer_social_instagram', 'option');
                                $youtube = get_field('footer_social_youtube', 'option');
                            ?>
                            <div class="get-in-touch-social">
                                <a href="<?php echo $behance['url']; ?>" target="<?php echo $behance['target'] ?>">
                                    <div class="icon white behance"></div>
                                </a>
                                <a href="<?php echo $facebook['url'] ?>" target="<?php echo $facebook['target'] ?>">
                                    <div class="icon white facebook"></div>
                                </a>
                                <a href="<?php echo $instagram['url'] ?>" target="<?php echo $instagram['target'] ?>">
                                    <div class="icon white instagram"></div>
                                </a>
                                <a href="<?php echo $youtube['url'] ?>" target="<?php echo $youtube['target'] ?>">
                                    <div class="icon white youtube"></div>
                                </a>
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