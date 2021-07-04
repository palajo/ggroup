<?php /* Template Name: Architecture Planning Template */ ?>
<?php get_header(); ?>
    <section class="architechure-hero">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-8">
                    <h1 class="section-title text-center text-md-start">
                        <?php echo get_field('hero_title'); ?>
                    </h1>
                    <p class="section-description">
                        <?php echo get_field('hero_description', false, false); ?>
                    </p>
                </div>
            </div>
        </div>
        <div class="architechure-hero-background">
            <img src="<?php echo get_field('hero_image')['url']; ?>" alt="<?php echo get_field('hero_image')['alt']; ?>" />
        </div>
    </section>
    <section class="section double-padding gray">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title text-center">
                        <?php echo get_field('advantages_title'); ?>
                    </h2>
                    <?php if (have_rows('advantages_puncts')): ?>
                        <ul class="benefits-list mt-100px">
                            <?php while (have_rows('advantages_puncts')): the_row(); ?>
                                <li>
                                    <?php echo get_sub_field('advantage_text'); ?>
                                </li>
                            <?php endwhile; ?>
                        </ul>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>
    <section class="section architecture-blocks-section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h3 class="section-title text-center">
                        <?php echo get_field('process_title'); ?>
                    </h3>
                </div>
            </div>
            <?php if (have_rows('process_blocks')):
                $i = 0;
            ?>
                <div class="row">
                    <?php while (have_rows('process_blocks')): the_row(); 
                        $i++;
                        $reverse = "";

                        if ($i % 2 == 0) {
                            $reverse = "reverse";
                        };
                    ?>
                        <div class="col-12 architecture-block <?php echo $reverse; ?>">
                            <div class="row">
                                <div class="col-md-12 col-lg-6 architecture-block-content">
                                    <div class="architecture-block-number">
                                        <?php echo $i; ?>
                                    </div>
                                    <div class="architecture-block-text">
                                        <h4>
                                            <?php echo get_sub_field('process_title'); ?>
                                        </h4>
                                        <?php echo get_sub_field('process_description'); ?>
                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-6 architecture-block-image">
                                    <img src="<?php echo get_sub_field('process_image')['url']; ?>" alt="<?php echo get_sub_field('process_image')['alt']; ?>" />
                                </div>
                            </div>
                        </div>
                    <?php endwhile; ?>
                </div>
            <?php endif; ?>
        </div>
    </section>
    <?php get_template_part( 'template-parts/sections/section-contact' ); ?>
    <section class="section">
        <div class="container no-padding-mobile">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title text-center">
                        Our architecture projects
                    </h2>
                    <?php get_template_part( 'template-parts/sliders/slider-architecture-projects' ); ?>
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
    <?php get_template_part( 'template-parts/sections/section-contact' ); ?>
<?php get_footer(); ?>