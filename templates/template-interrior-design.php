<?php /* Template Name: Interrior Design Template */ ?>
<?php get_header(); ?>
    <section class="project-hero">
        <div class="container-fluid p-0">
            <div class="project-hero-title">
                <h1 class="project-hero-title-title">
                    <?php echo get_field('hero_title'); ?>
                </h1>
                <?php echo get_field('hero_description', false); ?>
            </div>
            <div class="project-hero-background">
                <img src="<?php echo get_field('hero_image')['url']; ?>" alt="<?php echo get_field('hero_image')['alt']; ?>" />
            </div>
        </div>
    </section> 
    <section class="section double-padding gray">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <?php if (get_field('advantages_title')): ?>
                        <h2 class="section-title text-center">
                            <?php echo get_field('advantages_title'); ?>
                        </h2>
                    <?php endif; ?>
                    <?php if (have_rows('advantages_puncts')): ?>
                        <ul class="benefits-list">
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
    <?php get_template_part( 'template-parts/sections/section-contact' ); ?>
    <section class="section">
        <?php 
            $descriptions = get_field('content_descriptions');
            $gallery = get_field('content_gallery');
        ?>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="section-title">
                        <?php echo get_field('content_title'); ?>
                    </h2>
                    <?php echo $descriptions['description_1']; ?>
                </div>
            </div>
        </div>
        <div class="project-gallery">
            <div class="container">
                <div class="row">
                    <?php if ($gallery['image_1']): ?>
                        <div class="col-12 image-height-800">
                            <img src="<?php echo $gallery['image_1']['url']; ?>" alt="<?php echo $gallery['image_1']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <?php if ($gallery['image_2']): ?>
                        <div class="col-4 project-gallery-block image-height-700">
                            <img src="<?php echo $gallery['image_2']['url']; ?>" alt="<?php echo $gallery['image_2']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                    <?php if ($gallery['image_3']): ?>
                        <div class="col-4 project-gallery-block image-height-700">
                            <img src="<?php echo $gallery['image_3']['url']; ?>" alt="<?php echo $gallery['image_3']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                    <?php if ($gallery['image_4']): ?>
                        <div class="col-4 project-gallery-block image-height-700">
                            <img src="<?php echo $gallery['image_4']['url']; ?>" alt="<?php echo $gallery['image_4']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 text-center">
                    <?php echo $descriptions['description_2']; ?>
                </div>
            </div>
        </div>
        <div class="project-gallery">
            <div class="container">
                <div class="row">
                    <?php if ($gallery['image_5']): ?>
                        <div class="col-6 project-gallery-block image-height-500">
                            <img src="<?php echo $gallery['image_5']['url']; ?>" alt="<?php echo $gallery['image_5']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                    <?php if ($gallery['image_6']): ?>
                        <div class="col-6 project-gallery-block image-height-500">
                            <img src="<?php echo $gallery['image_6']['url']; ?>" alt="<?php echo $gallery['image_6']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 text-center">
                    <?php echo $descriptions['description_3']; ?>
                    <a href="<?php echo get_field('content_link')['url']; ?>" target="<?php echo get_field('content_link')['target']; ?>">
                        <button class="button mt-30px">
                            <?php echo get_field('content_link')['title']; ?>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-12 no-padding-mobile">
                    <h2 class="section-title text-center text-md-start">
                        Our projects
                    </h2>
                    <?php get_template_part( 'template-parts/sliders/slider-interrior-projects' ); ?>
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
    <?php get_template_part( 'template-parts/sections/section-contact' ); ?>
<?php get_footer(); ?>
