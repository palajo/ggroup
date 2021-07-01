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