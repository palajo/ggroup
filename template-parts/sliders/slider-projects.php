<div class="slider projects-slider">
    <?php 
        $loop = new WP_Query(array(
            'post_type' => 'projects',
            'posts_per_page' => 8
        ));
        if ($loop->have_posts()):
            while ($loop->have_posts()):
                $loop->the_post();
    ?>
        <div class="project-block">
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