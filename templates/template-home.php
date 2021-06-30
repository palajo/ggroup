<?php /* Template Name: Homepage Template */ ?>
<?php get_header(); ?>
    <section class="main-hero">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6 col-xxl-5">
                    <div class="main-hero-content">
                        <h1 class="main-hero-title">
                            LOREM IPSUM
                        </h1>
                        <button class="button">
                            View all services
                        </button>
                    </div>
                    <div class="main-hero-social">
                        <a href="#">
                            <div class="icon white behance"></div>
                        </a>
                        <a href="#">
                            <div class="icon white facebook"></div>
                        </a>
                        <a href="#">
                            <div class="icon white instagram"></div>
                        </a>
                        <a href="#">
                            <div class="icon white youtube"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section" id="services">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title text-center text-md-start">
                        Services
                    </h2>
                    <div class="blocks-row">
                        <div class="col-md-6 col-lg-6 col-xl-3 service-block">
                            <div class="service-block-title">
                                <img src={ServiceBlockIcon1} alt=" Architecture planning icon" />
                                Architecture planning
                            </div>
                            <div class="service-block-description">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </div>
                            <div class="service-block-more">
                                <a href="#">
                                    <div>
                                        View more
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-3 service-block">
                            <div class="service-block-title">
                                <img src={ServiceBlockIcon2} alt=" Architecture planning icon" />
                                Residental interior design
                            </div>
                            <div class="service-block-description">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </div>
                            <div class="service-block-more">
                                <a href="#">
                                    <div>
                                        View more
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-3 service-block">
                            <div class="service-block-title">
                                <img src={ServiceBlockIcon3} alt=" Architecture planning icon" />
                                Commercial design
                            </div>
                            <div class="service-block-description">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </div>
                            <div class="service-block-more">
                                <a href="#">
                                    <div>
                                        View more
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-3 service-block">
                            <div class="service-block-title">
                                <img src={ServiceBlockIcon4} alt=" Architecture planning icon" />
                                Furniture design
                            </div>
                            <div class="service-block-description">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...
                            </div>
                            <div class="service-block-more">
                                <a href="#">
                                    <div>
                                        View more
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section" id="projects">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title text-center text-md-start">
                        Projects
                    </h2>
                    <div class="blocks-row mainpage-projects-slider">
                        <div class="col-md-12 col-lg-6 project-block">
                            <div class="project-image">
                                <img src={ProjectImage1} alt="Globarch Project 1" />
                            </div>
                            <div class="project-title">
                                <div class="project-title-title">
                                    <a href="/projects/villa-kuzmina" class="nav-link">
                                        Villa Kuzmina
                                    </a>
                                </div>
                                <div class="project-title-more">
                                    <a href="/projects/villa-kuzmina">
                                        <div>
                                            View more
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 project-block">
                            <div class="project-image">
                                <img src={ProjectImage2} alt="Globarch Project 2" />
                            </div>
                            <div class="project-title">
                                <div class="project-title-title">
                                    <a href="/projects/villa-kuzmina" class="nav-link">
                                        Villa Kuzmina
                                    </a>
                                </div>
                                <div class="project-title-more">
                                    <a href="/projects/villa-kuzmina">
                                        <div>
                                            View more
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 project-block">
                            <div class="project-image">
                                <img src={ProjectImage3} alt="Globarch Project 3" />
                            </div>
                            <div class="project-title">
                                <div class="project-title-title">
                                    <a href="/projects/villa-kuzmina" class="nav-link">
                                        Villa Kuzmina
                                    </a>
                                </div>
                                <div class="project-title-more">
                                    <a href="/projects/villa-kuzmina">
                                        <div>
                                            View more
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6 project-block">
                            <div class="project-image">
                                <img src={ProjectImage4} alt="Globarch Project 4" />
                            </div>
                            <div class="project-title">
                                <div class="project-title-title">
                                    <a href="/projects/villa-kuzmina" class="nav-link">
                                        Villa Kuzmina
                                    </a>
                                </div>
                                <div class="project-title-more">
                                    <a href="/projects/villa-kuzmina">
                                        <div>
                                            View more
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-button">
                        <a href="/projects">
                            <button class="button">
                                View all projects
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section" id="clients">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title text-center text-md-start">
                        Our clients
                    </h2>
                    <?php if (have_rows('section_clients_block', 'option')): ?>
                        <div class="blocks-row">
                            <?php while (have_rows('section_clients_block', 'option')): the_row(); ?>
                                <div class="col-1 client-block">
                                    <a href="<?php echo get_sub_field('client_link')['url']; ?>" target="<?php echo get_sub_field('client_link')['target']; ?>">
                                        <img src="<?php echo get_sub_field('client_logo')['url']; ?>" alt="<?php echo get_sub_field('client_logo')['alt']; ?>" />
                                    </a>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>
    <section class="section" id="team">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title text-center text-md-start">
                        <?php echo get_field('section_team_title', 'option'); ?>
                    </h2>
                    <?php if (have_rows('section_team_member_block', 'option')): ?>
                        <div class="team-slider">
                            <?php while (have_rows('section_team_member_block', 'option')): the_row(); ?>
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
    <section class="section" id="contact-us">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="tabs-container">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="project-tab" data-bs-toggle="tab" data-bs-target="#project" type="button" role="tab" aria-controls="project" aria-selected="false">
                                    I'm interested in project
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="career-tab" data-bs-toggle="tab" data-bs-target="#career" type="button" role="tab" aria-controls="career" aria-selected="true">
                                    I'm interested in a career
                                </button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane" id="project" role="tabpanel" aria-labelledby="project-tab">
                                <div class="tab-pane-row">
                                    <div class="tab-pane-col contacts-tab-block">
                                        <h3 class="bold"> 
                                            Are you interested in career?
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Nisi voluptates temporibus eos molestiae veritatis sapiente eius.
                                        </p>
                                        <div class="contacts-phone">
                                            <a href="#">
                                                +38 099 98 47 911
                                                <span>or call</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="tab-pane-col">
                                        <form>
                                            <div class="form-row">
                                                <div class="form-block">
                                                    <label htmlFor="project-title">Project title</label>
                                                    <input type="text" class="text-input" id="project-title" />
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-block">
                                                    <label htmlFor="project-description">Project description</label>
                                                    <textarea class="textarea-input" id="project-description"></textarea>
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-block">
                                                    <label htmlFor="file-input">Attachment (up to 10mb)</label>
                                                    <label htmlFor="file-input" class="file-input">
                                                        Upload file
                                                        <input type="file" id="file-input" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-block">
                                                    <label htmlFor="location">Location</label>
                                                    <input type="text" class="text-input" id="location" />
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-block">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text" class="text-input" id="name" />
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-block">
                                                    <label htmlFor="company-name">Company name</label>
                                                    <input type="text" class="text-input" id="company-name" />
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-block">
                                                    <label htmlFor="phone">Phone number</label>
                                                    <input type="text" class="text-input phone-input" id="phone" />
                                                </div>
                                                <div class="form-block">
                                                    <label htmlFor="email">E-mail</label>
                                                    <input type="email" class="text-input" id="email" />
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-block">
                                                    <div class="checkbox-input">
                                                        <input type="checkbox" id="checkbox-input" />
                                                        <label htmlFor="checkbox-input">
                                                            I agree that the company: Globarch Group, will process my personal data for the customer relationship records (name, surname, e-mail and phone number). *
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="button" type="submit">
                                                Send message
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane show active" id="career" role="tabpanel" aria-labelledby="career-tab">
                                <div class="tab-pane-row">
                                    <div class="tab-pane-col contacts-tab-block">
                                        <h3 class="bold"> 
                                            Are you interested in career?
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Nisi voluptates temporibus eos molestiae veritatis sapiente eius.
                                        </p>
                                        <div class="contacts-phone">
                                            <a href="#">
                                                +38 099 98 47 911
                                                <span>or call</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="tab-pane-col">
                                        <form>
                                            <div class="form-row">
                                                <div class="form-block">
                                                    <label htmlFor="position-2">Position title</label>
                                                    <input type="text" class="text-input" id="position-2" />
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-block">
                                                    <label htmlFor="about-2">Briefly about you</label>
                                                    <textarea class="textarea-input" id="about-2"></textarea>
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-block">
                                                    <label htmlFor="file-input-2">Attachment (up to 10mb)</label>
                                                    <label htmlFor="file-input-2" class="file-input">
                                                        Upload file
                                                        <input type="file" id="file-input-2" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-block">
                                                    <label htmlFor="location-2">Location</label>
                                                    <input type="text" class="text-input" id="location-2" />
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-block">
                                                    <label htmlFor="name-2">Name</label>
                                                    <input type="text" class="text-input" id="name-2" />
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-block">
                                                    <label htmlFor="phone-2">Phone number</label>
                                                    <input type="text" class="text-input phone-input" id="phone-2" />
                                                </div>
                                                <div class="form-block">
                                                    <label htmlFor="email-2">E-mail</label>
                                                    <input type="email" class="text-input" id="email-2" />
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-block">
                                                    <div class="checkbox-input">
                                                        <input type="checkbox" id="checkbox-input-2" />
                                                        <label htmlFor="checkbox-input-2">
                                                            I agree that the company: Globarch Group, will process my personal data for the customer relationship records (name, surname, e-mail and phone number). *
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="button" type="submit">
                                                Send message
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php get_footer(); ?>
