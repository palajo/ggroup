<section class="section" id="contact-us">
    <?php 
        $career = get_field('contact_project_tab', 'option');
        $project = get_field('contact_carrer_tab', 'option');
    ?>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="tabs-container">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="project-tab" data-bs-toggle="tab" data-bs-target="#project" type="button" role="tab" aria-controls="project" aria-selected="true">
                                <?php echo $project['tab_title']; ?>
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="career-tab" data-bs-toggle="tab" data-bs-target="#career" type="button" role="tab" aria-controls="career" aria-selected="false">
                                <?php echo $career['tab_title']; ?>
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane show active" id="project" role="tabpanel" aria-labelledby="project-tab">
                            <div class="tab-pane-row">
                                <div class="tab-pane-col contacts-tab-block">
                                    <h3 class="bold"> 
                                        <?php echo $project['title']; ?>
                                    </h3>
                                    <?php echo $project['description']; ?>
                                    <div class="contacts-phone">
                                        <a href="tel:<?php echo $project['phone']; ?>">
                                            <?php echo $project['phone']; ?>
                                            <span><?php echo $project['small_text']; ?></span>
                                        </a>
                                    </div>
                                </div>
                                <div class="tab-pane-col">
                                    <?php echo do_shortcode($project['form_shortcode']); ?>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="career" role="tabpanel" aria-labelledby="career-tab">
                            <div class="tab-pane-row">
                                <div class="tab-pane-col contacts-tab-block">
                                    <h3 class="bold"> 
                                        <?php echo $career['title']; ?>
                                    </h3>
                                    <?php echo $career['description']; ?>
                                    <div class="contacts-phone">
                                        <a href="tel:<?php echo $career['phone']; ?>">
                                            <?php echo $career['phone']; ?>
                                            <span><?php echo $career['small_text']; ?></span>
                                        </a>
                                    </div>
                                </div>
                                <div class="tab-pane-col">
                                    <?php echo do_shortcode($career['form_shortcode']); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>