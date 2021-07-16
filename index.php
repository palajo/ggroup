<?php get_header(); ?>
    <?php
        $taxonomy_slug = $wp_query->tax_query->queries[0]['taxonomy'];
        $term_slug = $wp_query->tax_query->queries[0]['terms'][0];
        $term = get_term_by('slug', $term_slug, $taxonomy_slug);
        $term_name = $term->name;
    ?>
    <section class="projects-hero">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="projects-hero-content">
                        <h1 class="projects-hero-title">
                            <span>
                                <?php
                                    if ($taxonomy_slug === 'project_category') 
                                        echo 'Category';

                                        else if ($taxonomy_slug === 'project_year') 
                                            echo 'Year';

                                            else
                                                echo 'Filter'
                                ?>
                            </span>
                            <?php echo $term_name; ?>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="filters-row">
                        <div class="filter-block dropdown">
                            <a href="#" class="nav-link dropdown-toggle">
                                <span>
                                    <?php
                                        if ($taxonomy_slug === 'project_category') 
                                            echo $term_name;

                                            else 
                                                echo 'All';
                                    ?>
                                </span>
                                Category
                            </a>
                            <ul class="dropdown-menu">
                                <?php
                                    $args = array(
                                        'taxonomy' => 'project_category'
                                    );

                                    $cats = get_categories($args);
                                    foreach($cats as $cat):
                                ?>
                                    <li>
                                        <a href="<?php echo get_category_link( $cat->term_id ) ?>" class="dropdown-item">
                                            <?php echo $cat->name; ?>
                                        </a>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                        <div class="filter-block dropdown">
                            <a href="#" class="nav-link dropdown-toggle">
                                <span>
                                    <?php
                                        if ($taxonomy_slug === 'project_year') 
                                            echo $term_name;

                                            else 
                                                echo 'All';
                                    ?>
                                </span>
                                Year
                            </a>
                            <ul class="dropdown-menu">
                                <?php
                                    $args = array(
                                        'taxonomy' => 'project_year'
                                    );

                                    $cats = get_categories($args);
                                    foreach($cats as $cat):
                                ?>
                                    <li>
                                        <a href="<?php echo get_category_link( $cat->term_id ) ?>" class="dropdown-item">
                                            <?php echo $cat->name; ?>
                                        </a>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </div>
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
    <?php get_template_part( 'template-parts/sections/section-contact' ); ?>
<?php get_footer(); ?>