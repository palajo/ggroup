<?php get_header(); ?>
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="section-title">
                        <?php the_title(); ?>
                    </h1>
                    <?php 
                        if (have_posts()): 
                            while (have_posts()) : the_post();
                                the_content();
                            endwhile;

                            else:
                                echo _e( 'Sorry, nothing to display.', 'globarch' );
                        
                        endif;
                    ?>
                </div>
            </div>
        </div>
    </section>
<?php get_footer(); ?>