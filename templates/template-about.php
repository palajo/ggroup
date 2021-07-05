<?php /* Template Name: About Template */ ?>
<?php get_header(); ?>
    <section class="about-hero">
        <div class="about-hero-background">
            <img src="<?php echo get_field('hero_image')['url']; ?>" alt="<?php echo get_field('hero_image')['alt']; ?>" />
        </div>
    </section>
    <section class="section gray double-padding about-information">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">
                        <?php echo get_field('about_title'); ?>
                    </h2>
                    <?php echo get_field('about_description', false); ?>
                    <div class="view-projects">
                        <a href="<?php echo get_field('about_link')['url']; ?>" class="nav-link" target="<?php echo get_field('about_link')['target']; ?>">
                            <?php echo get_field('about_link')['title']; ?>
                        </a>
                    </div>
                    <div class="slogan">
                        <?php echo get_field('about_right_text'); ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php get_template_part( 'template-parts/sections/section-clients' ); ?>
    <?php get_template_part( 'template-parts/sections/section-double-contact' ); ?>
<?php get_footer(); ?>
