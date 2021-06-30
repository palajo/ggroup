<?php
/* enqueue styles and js */
function theme_scripts() {
    // styles
    wp_enqueue_style('slick-css', get_theme_file_uri('/assets/styles/slick.css'), array(), '1.8.1');
    wp_enqueue_style('globarch-css', get_theme_file_uri('/assets/styles/styles.css'), array(), '1.0.0');
    
    // js
    wp_enqueue_script('jquery-js', get_template_directory_uri() . '/assets/js/jquery-3.6.0.min.js', array('jquery'), '3.6.0');
    wp_enqueue_script('slick-js', get_template_directory_uri() . '/assets/js/slick.min.js', array('jquery'), '1.8.1');
    wp_enqueue_script('bootstrap-js', get_template_directory_uri() . '/assets/js/bootstrap.min.js', array('jquery'), '5.0.2');
    wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0');
}
add_action('wp_enqueue_scripts', 'theme_scripts');