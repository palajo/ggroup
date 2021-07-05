<?php /* Template Name: Furniture Design Template */ ?>
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
    <?php if (have_rows('furniture_navigation')): ?>
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <ul class="nav project-navigation">
                            <?php while (have_rows('furniture_navigation')): the_row(); ?>
                                <li class="nav-item">
                                    <a href="<?php echo get_sub_field('link')['url']; ?>" class="nav-link" target="<?php echo get_sub_field('link')['target']; ?>">
                                        <?php echo get_sub_field('link')['title']; ?>
                                    </a>
                                </li>
                            <?php endwhile; ?>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    <?php endif; ?>
    <?php if (have_rows('furniture_blocks')):
        $i = 0;    
    ?>
        <?php while (have_rows('furniture_blocks')): the_row();
            $i++;
            $reverse = "";

            if ($i % 2 == 0) {
                $reverse = "reverse";
            };
        ?>
            <?php 
                $gallery = get_sub_field('block_gallery');
            ?>
            <section class="section four-blocks <?php echo $reverse; ?>" id="<?php echo get_sub_field('block_anchor_id'); ?>">
                <div class="project-gallery">
                    <div class="container">
                        <div class="row">
                            <h2 class="section-title">
                                <?php echo get_sub_field('block_title'); ?>
                            </h2>
                        </div>
                        <div class="row">
                            <div class="col-12 project-gallery-block block-with-text image-height-500">
                                <div class="project-gallery-block-image">
                                    <img src="<?php echo $gallery['image_1']['url']; ?>" alt="<?php echo $gallery['image_1']['alt']; ?>" />
                                </div>
                                <div class="project-gallery-block-content">
                                    <div class="project-gallery-block-description">
                                        <?php echo get_sub_field('block_description', false, false); ?>
                                    </div>
                                    <div class="project-gallery-block-links">
                                        <a href="<?php echo get_sub_field('block_contact_link')['url']; ?>" class="nav-link" target="<?php echo get_sub_field('block_contact_link')['target']; ?>">
                                            <?php echo get_sub_field('block_contact_link')['title']; ?>
                                        </a>
                                        <a href="<?php echo get_sub_field('block_samples_link')['url']; ?>" class="nav-link" target="<?php echo get_sub_field('block_samples_link')['target']; ?>">
                                            <?php echo get_sub_field('block_samples_link')['title']; ?>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 project-gallery-block image-height-300">
                                <img src="<?php echo $gallery['image_2']['url']; ?>" alt="<?php echo $gallery['image_2']['alt']; ?>" />
                            </div>
                            <div class="col-4 project-gallery-block image-height-300">
                                <img src="<?php echo $gallery['image_3']['url']; ?>" alt="<?php echo $gallery['image_3']['alt']; ?>" />
                            </div>
                            <div class="col-4 project-gallery-block image-height-300">
                                <img src="<?php echo $gallery['image_4']['url']; ?>" alt="<?php echo $gallery['image_4']['alt']; ?>" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <?php endwhile; ?>
    <?php endif; ?>
    <?php get_template_part( 'template-parts/sections/section-clients' ); ?>
    <?php get_template_part( 'template-parts/sections/section-contact' ); ?>
<?php get_footer(); ?>