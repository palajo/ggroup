<?php /* Template Name: About Template */ ?>
<?php get_header(); ?>
    <section class="about-hero">
        <div class="about-hero-background">
            <img src="#" alt="Globarch Team" />
        </div>
    </section>
    <section class="section gray double-padding about-information">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">
                        About us
                    </h2>
                    <p class="size-18px">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam ...<br /><br />
                        
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam ...<br /><br />

                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque laudantium, totam ...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam ...
                    </p>
                    <div class="view-projects">
                        <a href="/projects" class="nav-link">
                            View projects
                        </a>
                    </div>
                    <div class="slogan">
                        We are metter
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
                    <div class="blocks-row">
                        <div class="col-1 client-block">
                            <a href="#">
                                <img src="#" alt="Globarch Client 1" />
                            </a>
                        </div>
                    </div>
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
