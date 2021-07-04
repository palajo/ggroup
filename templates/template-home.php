<?php /* Template Name: Homepage Template */ ?>
<?php get_header(); ?>
    <section class="main-hero" data-bg="<?php echo get_field('hero_background')['url']; ?>">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6 col-xxl-5">
                    <div class="main-hero-content">
                        <h1 class="main-hero-title">
                            <?php echo get_field('hero_title'); ?>
                        </h1>
                        <?php echo get_field('hero_description', false); ?>
                        <a href="<?php echo get_field('hero_button')['url']; ?>" target="<?php echo get_field('hero_button')['target']; ?>">
                            <button class="button">
                                <?php echo get_field('hero_button')['title']; ?>
                            </button>
                        </a>
                    </div>
                    <div class="main-hero-social">
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
        </div>
    </section>
    <section class="section" id="services">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title text-center text-md-start">
                        <?php echo get_field('services_title'); ?>
                    </h2>
                    <?php if (have_rows('services_blocks')): ?>
                        <div class="blocks-row">
                            <?php while (have_rows('services_blocks')): the_row(); ?>
                                <div class="col-md-6 col-lg-6 col-xl-3 service-block">
                                    <div class="service-block-title">
                                        <img src="<?php echo get_sub_field('block_icon')['url']; ?>" alt="<?php echo get_sub_field('block_icon')['alt']; ?>" />
                                        <?php echo get_sub_field('block_title'); ?>
                                    </div>
                                    <div class="service-block-description">
                                        <?php echo the_sub_field('block_description', false, false); ?>
                                    </div>
                                    <div class="service-block-more">
                                        <a href="<?php echo get_sub_field('block_link')['url']; ?>" target="<?php echo get_sub_field('block_link')['target']; ?>">
                                            <div>
                                                <?php echo get_sub_field('block_link')['title']; ?>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    <?php endif; ?>
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
