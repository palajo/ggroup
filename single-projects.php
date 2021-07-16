<?php get_header(); ?>
    <section class="project-hero">
        <div class="container-fluid p-0">
            <div class="project-hero-title">
                <h1 class="project-hero-title-title">
                    <?php echo get_field('project_hero_title'); ?>
                </h1>
                <?php if (get_field('project_hero_description')): ?>
                    <?php echo get_field('project_hero_description'); ?>
                <?php endif; ?>
            </div>
            <div class="project-hero-background">
                <img src="<?php echo get_field('project_hero_image')['url']; ?>" alt="<?php echo get_field('project_hero_image')['alt']; ?>" />
            </div>
        </div>
    </section>
    <?php if (have_rows('section_project_profile')): ?>
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <table class="project-profile">
                            <tbody>
                                <?php while (have_rows('section_project_profile')): the_row(); ?>
                                    <tr>
                                        <th>
                                            <?php echo get_sub_field('column_title'); ?>
                                        </th>
                                        <td>
                                            <?php echo get_sub_field('column_value'); ?>
                                        </td>
                                    </tr>
                                <?php endwhile; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    <?php endif; ?>
    <?php if (have_rows('project_navigation')): ?>
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <ul class="nav project-navigation">
                            <?php while (have_rows('project_navigation')): the_row(); ?>
                                <li class="nav-item">
                                    <a href="<?php echo get_sub_field('link')['url']; ?>" class="nav-link">
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
    <section class="section" id="about">
        <?php 
            $descriptions = get_field('project_about_descriptions');
            $gallery = get_field('project_about_gallery');
        ?>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="section-title">
                        <?php echo get_field('project_about_title'); ?>
                    </h2>
                    <?php if ($descriptions['description_1']): ?>
                        <?php echo $descriptions['description_1']; ?>
                    <?php endif; ?>
                    <?php if ($descriptions['description_2']): ?>
                    <hr />
                        <?php echo $descriptions['description_2']; ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <div class="project-gallery">
            <?php if ($gallery['image_1']): ?>
                <div class="container">
                    <div class="row">
                        <div class="col-12 image-height-800">
                            <img src="<?php echo $gallery['image_1']['url']; ?>" alt="<?php echo $gallery['image_1']['alt']; ?>" />
                        </div>
                    </div>
                </div>
            <?php endif; ?>
            <div class="container-fluid">
                <div class="row">
                    <?php if ($gallery['image_2']): ?>
                        <div class="col-6 project-gallery-block image-height-500">
                            <img src="<?php echo $gallery['image_2']['url']; ?>" alt="<?php echo $gallery['image_2']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                    <?php if ($gallery['image_3']): ?>
                        <div class="col-6 project-gallery-block image-height-500">
                            <img src="<?php echo $gallery['image_3']['url']; ?>" alt="<?php echo $gallery['image_3']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                    <?php if ($gallery['image_4']): ?>
                        <div class="col-6 project-gallery-block image-height-500">
                            <img src="<?php echo $gallery['image_4']['url']; ?>" alt="<?php echo $gallery['image_4']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                    <?php if ($gallery['image_5']): ?>
                        <div class="col-6 project-gallery-block image-height-500">
                            <img src="<?php echo $gallery['image_5']['url']; ?>" alt="<?php echo $gallery['image_5']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <?php if ($descriptions['description_3']): ?>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <?php echo $descriptions['description_3']; ?>
                    </div>
                </div>
            </div>
        <?php endif; ?>
    </section>
    <section class="section" id="location">
        <?php 
            $descriptions = get_field('project_location_descriptions');
            $gallery = get_field('project_location_gallery');
        ?>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="section-title">
                        <?php echo get_field('project_location_title'); ?>
                    </h2>
                    <?php if ($descriptions['description_1']): ?>
                        <?php echo $descriptions['description_1']; ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <div class="project-gallery">
            <div class="container-fluid">
                <div class="row">
                    <?php if ($gallery['image_1']): ?>
                        <div class="col-4 project-gallery-block image-height-350">
                            <img src="<?php echo $gallery['image_1']['url']; ?>" alt="<?php echo $gallery['location_image_1']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                    <?php if ($gallery['image_2']): ?>
                        <div class="col-4 project-gallery-block image-height-350">
                            <img src="<?php echo $gallery['image_2']['url']; ?>" alt="<?php echo $gallery['image_2']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                    <?php if ($gallery['image_3']): ?>
                        <div class="col-4 project-gallery-block image-height-350">
                            <img src="<?php echo $gallery['image_3']['url']; ?>" alt="<?php echo $gallery['image_3']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                    <?php if ($gallery['image_4']): ?>
                        <div class="col-6 project-gallery-block image-height-400">
                            <img src="<?php echo $gallery['image_4']['url']; ?>" alt="<?php echo $gallery['image_4']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                    <?php if ($gallery['image_5']): ?>
                        <div class="col-6 project-gallery-block image-height-400">
                            <img src="<?php echo $gallery['image_5']['url']; ?>" alt="<?php echo $gallery['image_5']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <?php if ($descriptions['description_2']): ?>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <?php echo $descriptions['description_2']; ?>
                    </div>
                </div>
            </div>
        <?php endif; ?>
    </section>
    <section class="section" id="design">
        <?php 
            $descriptions = get_field('project_design_descriptions');
            $gallery = get_field('project_design_gallery');
        ?>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="section-title">
                        <?php echo get_field('project_design_title'); ?>
                    </h2>
                    <?php if ($descriptions['description_1']): ?>
                        <?php echo $descriptions['description_1']; ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <div class="project-gallery">
            <?php if ($gallery['image_1']): ?>
                <div class="container">
                    <div class="row">
                        <div class="col-12 image-height-800">
                            <img src="<?php echo $gallery['image_1']['url']; ?>" alt="<?php echo $gallery['image_1']['alt']; ?>" />
                        </div>
                    </div>
                </div>
            <?php endif; ?>
            <div class="container-fluid">
                <div class="row">
                    <?php if ($gallery['image_2']): ?>
                        <div class="col-6 project-gallery-block image-height-500">
                            <img src="<?php echo $gallery['image_2']['url']; ?>" alt="<?php echo $gallery['image_2']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                    <?php if ($gallery['image_3']): ?>
                        <div class="col-6 project-gallery-block image-height-500">
                            <img src="<?php echo $gallery['image_3']['url']; ?>" alt="<?php echo $gallery['image_3']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <?php if ($descriptions['description_2']): ?>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <?php echo $descriptions['description_2']; ?>
                    </div>
                </div>
            </div>
        <?php endif; ?>
        <div class="project-gallery">
            <div class="container">
                <div class="row">
                    <?php if ($gallery['image_4']): ?>
                        <div class="col-4 project-gallery-block image-height-700">
                            <img src="<?php echo $gallery['image_4']['url']; ?>" alt="<?php echo $gallery['image_4']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                    <?php if ($gallery['image_5']): ?>
                        <div class="col-4 project-gallery-block image-height-700">
                            <img src="<?php echo $gallery['image_5']['url']; ?>" alt="<?php echo $gallery['image_5']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                    <?php if ($gallery['image_6']): ?>
                        <div class="col-4 project-gallery-block image-height-700">
                            <img src="<?php echo $gallery['image_6']['url']; ?>" alt="<?php echo $gallery['image_6']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>
    <section class="section" id="easter-egg">
        <?php 
            $descriptions = get_field('project_egg_descriptions');
            $gallery = get_field('project_egg_gallery');
        ?>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="section-title">
                        <?php echo get_field('project_egg_title'); ?>
                    </h2>
                    <?php if ($descriptions['description_1']): ?>
                        <?php echo $descriptions['description_1']; ?>
                    <?php endif; ?>
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
    </section>
    <section class="section" id="team">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="section-title">
                        <?php echo get_field('project_team_title'); ?>
                    </h2>
                    <p class="section-description text-start text-md-center d-none d-md-block">
                        <?php echo the_field('project_team_description', false, false); ?>
                    </p>
                    <?php if (have_rows('project_team_member_block')): ?>
                        <div class="team-slider">
                            <?php while (have_rows('project_team_member_block')): the_row(); ?>
                                <div class="member-block">
                                    <div class="member-image">
                                        <img src="<?php echo get_sub_field('member_image')['url']; ?>" alt="<?php echo get_sub_field('member_image')['alt']; ?>" />
                                    </div>
                                    <div class="member-about">
                                        <div class="member-name">
                                            <?php echo the_sub_field('member_name'); ?>
                                        </div>
                                        <div class="member-position">
                                            <?php echo the_sub_field('member_position'); ?>
                                        </div>
                                    </div>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>
    <section class="section other-projects">
        <div class="container">
            <div class="row">
                <div class="col-12 no-padding-mobile">
                    <h2 class="section-title">
                        <?php echo get_field('section_other_projects_title'); ?>
                    </h2>
                    <?php get_template_part( 'template-parts/sliders/slider-other-projects' ); ?>
                    <a href="<?php echo get_post_type_archive_link('projects'); ?>" target="<?php echo get_field('section_other_projects_button')['target']; ?>">
                        <button class="button">
                            <?php echo get_field('section_other_projects_button')['title']; ?>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <?php get_template_part( 'template-parts/sections/section-contact' ); ?>
<?php get_footer(); ?>