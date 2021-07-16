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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.7624663346865!2d24.041741115708902!3d49.82812947939438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add5ba2d9f257%3A0xb0541fb74816b996!2z0LLRg9C70LjRhtGPINCe0LvRjNCz0Lgg0JHQsNGB0LDRgNCw0LEsIDMsINCb0YzQstGW0LIsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1suk!2sua!4v1626363445012!5m2!1suk!2sua" title="globarch-group-location" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </section>
    <?php get_template_part( 'template-parts/sections/section-contact' ); ?>
<?php get_footer(); ?>
