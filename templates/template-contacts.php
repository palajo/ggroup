<?php /* Template Name: Contacts Template */ ?>
<?php get_header(); ?>
    <section class="section section-contacts">
        <?php 
            $contacts = get_field('contacts_contacts');
            $social = get_field('contacts_social');
        ?>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-5">
                    <h1 class="section-title">
                        <?php echo get_field('contacts_title'); ?>
                    </h1>
                    <div>
                        <h3 class="bold">
                            <?php echo get_field('contacts_company_name'); ?>
                        </h3>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <?php echo $contacts['address']; ?>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="mailto:<?php echo $contacts['email']; ?>" class="nav-link">
                                    <?php echo $contacts['email']; ?>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="tel:<?php echo $contacts['phone']; ?>" class="nav-link">
                                    <?php echo $contacts['phone']; ?>
                                </a>
                            </li>
                        </ul>
                        <div class="get-in-touch-social">
                            <?php if($social['behance']): ?>
                                <a href="<?php echo $social['behance']['url'] ?>" target="<?php echo $social['behance']['target'] ?>">
                                    <div class="icon behance"></div>
                                </a>
                            <?php endif; ?>
                            <?php if($social['facebook']): ?>
                                <a href="<?php echo $social['facebook']['url'] ?>" target="<?php echo $social['facebook']['target'] ?>">
                                    <div class="icon facebook"></div>
                                </a>
                            <?php endif; ?>
                            <?php if($social['instagram']): ?>
                                <a href="<?php echo $social['instagram']['url'] ?>" target="<?php echo $social['instagram']['target'] ?>">
                                    <div class="icon instagram"></div>
                                </a>
                            <?php endif; ?>
                            <?php if($social['youtube']): ?>
                                <a href="<?php echo $social['youtube']['url'] ?>" target="<?php echo $social['youtube']['target'] ?>">
                                    <div class="icon youtube"></div>
                                </a>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-7 contacts-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d643.3677463122051!2d24.034190460769146!3d49.83360726305589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xea77690e785aad1b!2sGlobarch%20Group!5e0!3m2!1sru!2sua!4v1621930265936!5m2!1sru!2sua" title="globarch-group-location" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </section>
    <?php get_template_part( 'template-parts/sections/section-contact' ); ?>
<?php get_footer(); ?>
