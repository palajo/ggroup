<?php /* Template Name: Homepage Template */ ?>
<?php get_header(); ?>
    <section class="main-hero">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6 col-xxl-5">
                    <div class="main-hero-content">
                        <h1 class="main-hero-title">
                            LOREM IPSUM
                        </h1>
                        <button class="button">
                            View all services
                        </button>
                    </div>
                    <div class="main-hero-social">
                        <a href="#">
                            <div class="icon white behance"></div>
                        </a>
                        <a href="#">
                            <div class="icon white facebook"></div>
                        </a>
                        <a href="#">
                            <div class="icon white instagram"></div>
                        </a>
                        <a href="#">
                            <div class="icon white youtube"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section" id="services">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title text-center text-md-start">
                        Services
                    </h2>
                    <div class="blocks-row">
                        <div class="col-md-6 col-lg-6 col-xl-3 service-block">
                            <div class="service-block-title">
                                <img src={ServiceBlockIcon1} alt=" Architecture planning icon" />
                                Architecture planning
                            </div>
                            <div class="service-block-description">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </div>
                            <div class="service-block-more">
                                <a href="#">
                                    <div>
                                        View more
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-3 service-block">
                            <div class="service-block-title">
                                <img src={ServiceBlockIcon2} alt=" Architecture planning icon" />
                                Residental interior design
                            </div>
                            <div class="service-block-description">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </div>
                            <div class="service-block-more">
                                <a href="#">
                                    <div>
                                        View more
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-3 service-block">
                            <div class="service-block-title">
                                <img src={ServiceBlockIcon3} alt=" Architecture planning icon" />
                                Commercial design
                            </div>
                            <div class="service-block-description">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </div>
                            <div class="service-block-more">
                                <a href="#">
                                    <div>
                                        View more
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-3 service-block">
                            <div class="service-block-title">
                                <img src={ServiceBlockIcon4} alt=" Architecture planning icon" />
                                Furniture design
                            </div>
                            <div class="service-block-description">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </div>
                            <div class="service-block-more">
                                <a href="#">
                                    <div>
                                        View more
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section" id="projects">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title text-center text-md-start">
                        Projects
                    </h2>
                    <div class="blocks-row mainpage-projects-slider">
                        <?php 
                            $loop = new WP_Query(array(
                                'post_type' => 'projects',
                                'posts_per_page' => 4
                            ));

                            if ($loop->have_posts()):
                                while ($loop->have_posts()):
                                    $loop->the_post();
                        ?>
                            <div class="col-md-12 col-lg-6 project-block">
                                <div class="project-image">
                                    <a href="<?php the_permalink(); ?>">
                                        <?php the_post_thumbnail(); ?>
                                    </a>
                                </div>
                                <div class="project-title">
                                    <div class="project-title-title">
                                        <a href="<?php the_permalink(); ?>" class="nav-link">
                                            <?php the_title(); ?>
                                        </a>
                                    </div>
                                    <div class="project-title-more">
                                        <a href="<?php the_permalink(); ?>">
                                            <div>
                                                View more
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        <?php
                                endwhile;
                            endif;
                        ?>
                    </div>
                    <div class="section-button">
                        <a href="<?php echo get_post_type_archive_link('projects'); ?>">
                            <button class="button">
                                View all projects
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php get_template_part( 'template-parts/sections/section-clients' ); ?>
    <?php get_template_part( 'template-parts/sections/section-team' ); ?>
    <?php get_template_part( 'template-parts/sections/section-double-contact' ); ?>
<?php get_footer(); ?>
