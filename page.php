<section class="section double-padding">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="section-title">
                    <?php the_title(); ?>
                </h2>
                <?php if (have_posts()): while (have_posts()) : the_post(); ?>
                        <div <?php post_class(); ?>>
                            <?php the_content(); ?>
                        </div>
                <?php endwhile; ?>

                <?php else: ?>
                    <h4><?php _e( 'Sorry, nothing to display.', 'globarch' ); ?></h4>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>