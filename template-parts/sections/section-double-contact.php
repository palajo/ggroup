<section class="section" id="contact-us">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="tabs-container">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="project-tab" data-bs-toggle="tab" data-bs-target="#project" type="button" role="tab" aria-controls="project" aria-selected="true">
                                <?php echo get_field('contact_project_tab_title', 'option'); ?>
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="career-tab" data-bs-toggle="tab" data-bs-target="#career" type="button" role="tab" aria-controls="career" aria-selected="false">
                                <?php echo get_field('contact_career_tab_title', 'option'); ?>
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane show active" id="project" role="tabpanel" aria-labelledby="project-tab">
                            <div class="tab-pane-row">
                                <div class="tab-pane-col contacts-tab-block">
                                    <h3 class="bold"> 
                                        <?php echo get_field('contact_project_title', 'option'); ?>
                                    </h3>
                                    <?php echo get_field('contact_project_description', 'option'); ?>
                                    <div class="contacts-phone">
                                        <a href="tel:<?php echo get_field('contact_project_phone', 'option'); ?>">
                                            <?php echo get_field('contact_project_phone', 'option'); ?>
                                            <span><?php echo get_field('contact_project_phone_small_text', 'option'); ?></span>
                                        </a>
                                    </div>
                                </div>
                                <div class="tab-pane-col">
                                    <?php echo do_shortcode(get_field('contact_project_form_shortcode', 'option')); ?>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="career" role="tabpanel" aria-labelledby="career-tab">
                            <div class="tab-pane-row">
                                <div class="tab-pane-col contacts-tab-block">
                                    <h3 class="bold"> 
                                        <?php echo get_field('contact_career_title', 'option'); ?>
                                    </h3>
                                    <?php echo get_field('contact_career_description', 'option'); ?>
                                    <div class="contacts-phone">
                                        <a href="tel:<?php echo get_field('contact_career_phone', 'option'); ?>">
                                            <?php echo get_field('contact_career_phone', 'option'); ?>
                                            <span><?php echo get_field('contact_career_phone_small_text', 'option'); ?></span>
                                        </a>
                                    </div>
                                </div>
                                <div class="tab-pane-col">
                                    <?php echo do_shortcode(get_field('contact_career_form_shortcode', 'option')); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>