<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/assets/images/favicon.png" type="image/png">
        <title><?php wp_title(); ?></title>
        <?php wp_head(); ?>
    </head>
    <body>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="left-block">
                            <div class="logo">
                                <a href="<?php echo home_url(); ?>">
                                    <img src="<?php echo get_field('globarch_logo', 'option')['url']; ?>" />
                                </a>
                            </div>
                        </div>
                        <div class="navigation-toggler">
                            <div class="icon-burgermenu">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                        <div class="right-block">
                            <?php 
                                wp_nav_menu( 
                                    array(
                                        'menu'              => 'Primary menu',
                                        'depth'             => 1,
                                        'container'         => false,
                                        'menu_class'        => 'nav main-nav',
                                        'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
                                        'walker'            => new WP_Bootstrap_Navwalker(),
                                    ) 
                                );
                            ?>
                            <div class="dropdown language-switcher-dropdown">
                                <a class="nav-link dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    en
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <a class="dropdown-item active" href="#">
                                            EN
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            UA
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="contacts-phone">
                                <a href="tel:<?php echo get_field('header_phone', 'option'); ?>">
                                    <span><?php echo get_field('header_phone_small_text', 'option'); ?></span>
                                    <?php echo get_field('header_phone', 'option'); ?>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main>