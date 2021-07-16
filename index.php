<?php get_header(); ?>
    <?php
        $taxonomy_slug = $wp_query->tax_query->queries[0]['taxonomy'];
        $term_slug = $wp_query->tax_query->queries[0]['terms'][0];
        $term = get_term_by('slug', $term_slug, $taxonomy_slug);
        $term_name = $term->name;
    ?>
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>
                        <?php echo $term_name; ?>
                    </h1>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container-fluid p-0">
            <?php 
                $loop = new WP_Query(array(
                    'post_type' => 'projects',
                    'tax_query' => array(
                        array(
                            'taxonomy' => $taxonomy_slug,
                            'field'    => 'slug',
                            'terms' => $term_slug
                        )
                    )
                ));

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
<?php get_footer(); ?>