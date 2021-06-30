<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/assets/images/favicon.png" type="image/png">
        <?php wp_head(); ?>
    </head>
    <body>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="left-block">
                            <div class="logo">
                                <a href="/">
                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.svg" alt="Globarch Group Logo" />
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
                            <ul class="nav main-nav">
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Architecture planning
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Residental interior design
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Furniture design
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Commercial design
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        About us
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Contacts
                                    </a>
                                </li>
                            </ul>
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
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            RU
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="contacts-phone">
                                <a href="#">
                                    <span>or call</span>
                                    +38 099 98 47 911
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main>