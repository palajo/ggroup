<section class="section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 col-lg-10 col-xl-8 col-xxl-6 contact-form">
                <h3 class="bold">
                    <?php echo get_field('section_contact_title', 'option'); ?>
                </h3>
                <?php echo get_field('section_contact_description', 'option'); ?>
                <?php echo do_shortcode(get_field('section_contact_form_shortcode', 'option')); ?>
                <div class="contacts-phone">
                    <a href="tel:<?php echo get_field('section_contact_phone', 'option'); ?>">
                        <span><?php echo get_field('section_contact_phone_small_text', 'option'); ?></span>
                        <?php echo get_field('section_contact_phone', 'option'); ?>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>