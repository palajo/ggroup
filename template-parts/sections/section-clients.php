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
