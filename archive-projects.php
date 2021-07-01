<?php get_header(); ?>
    <section class="projects-hero">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="projects-hero-content">
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                        </p>
                        <h1 class="projects-hero-title">
                            <span>
                                Gallery of realized projects
                            </span>
                            Our projects
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container-fluid p-0">
            <?php 
                $loop = new WP_Query(array('post_type' => 'projects'));

                if ($loop->have_posts()):
                    while ($loop->have_posts()):
                        $loop->the_post();
            ?>
                <div class="projects-block">
                    <div class="projects-image">
                        <a href="<?php the_permalink(); ?>">
                            <?php the_post_thumbnail(); ?>
                        </a>
                    </div>
                    <div class="projects-title">
                        <div class="projects-title-title">
                            <a href="<?php the_permalink(); ?>" class="nav-link">
                                <?php the_title(); ?>
                            </a>
                            <span>
                                <?php the_field('project_hero_subtitle', $post->ID); ?>
                            </span>
                        </div>
                    </div>
                </div>
            <?php
                    endwhile;
                endif;
            ?>
        </div>
    </section>
    <?php get_template_part( 'template-parts/sections/section-other-projects' ); ?>
    <?php get_template_part( 'template-parts/sections/section-contact' ); ?>
<?php get_footer(); ?>