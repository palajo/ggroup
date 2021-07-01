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
