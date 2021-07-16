<?php

// theme support
add_theme_support( 'menus' );
add_theme_support( 'post-thumbnails' ); 


// activate Options Tab for ACF
if (function_exists('acf_add_options_page')) {
	acf_add_options_page();
}


// custom post types
flush_rewrite_rules( true );

function create_posttype() {
    register_taxonomy('year', 
        array('projects'), 
        array(
        'labels'            => array(
            'name'              => __('Year', 'palaj'),
            'singular_name'     => __('year', 'palaj'),
            'search_items'      => __('Search year', 'palaj'),
            'all_items'         => __('All Years', 'palaj'),
            'parent_item'       => __('Parent year', 'palaj'),
            'parent_item_colon' => __('Parent year:', 'palaj'),
            'edit_item'         => __('Edit year', 'palaj'), 
            'update_item'       => __('Update year', 'palaj'),
            'add_new_item'      => __('Add new year', 'palaj'),
            'new_item_name'     => __('New year', 'palaj'),
            'menu_name'         => __('Years', 'palaj')
        ),
        'show_ui'           => true,
        'query_var'         => true,
        'hierarchical'      => true,
        'show_admin_column' => true,
        'rewrite'           => array('slug' => 'year')
    ));

    register_taxonomy('category', 
        array('projects'), 
        array(
        'labels'            => array(
            'name'              => __('Category', 'palaj'),
            'singular_name'     => __('category', 'palaj'),
            'search_items'      => __('Search category', 'palaj'),
            'all_items'         => __('All Categories', 'palaj'),
            'parent_item'       => __('Parent category', 'palaj'),
            'parent_item_colon' => __('Parent category:', 'palaj'),
            'edit_item'         => __('Edit category', 'palaj'), 
            'update_item'       => __('Update category', 'palaj'),
            'add_new_item'      => __('Add new category', 'palaj'),
            'new_item_name'     => __('New category name', 'palaj'),
            'menu_name'         => __('Categories', 'palaj')
        ),
        'show_ui'           => true,
        'query_var'         => true,
        'hierarchical'      => true,
        'show_admin_column' => true,
        'rewrite'           => array('slug' => 'category')
    ));

    register_post_type( 'projects',
        array(
            'labels' => array(
                'name' => __( 'Projects' ),
                'singular_name' => __( 'Project' ),
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'projects'),
            'show_in_rest' => true,
            'supports' => array('title', 'thumbnail')
        )
    );
}
add_action( 'init', 'create_posttype' );


// Bootstrap NavWalker
function register_navwalker(){
	require_once get_template_directory() . '/includes/class-wp-bootstrap-navwalker.php';
}
add_action( 'after_setup_theme', 'register_navwalker' );


// enqueue styles and js
function theme_scripts() {
    // styles
    wp_enqueue_style('slick-css', get_theme_file_uri('/assets/styles/slick.css'), array(), '1.8.1');
    wp_enqueue_style('globarch-css', get_theme_file_uri('/assets/styles/styles.css'), array(), '1.0.0');
    
    // js
    wp_enqueue_script('jquery-js', get_template_directory_uri() . '/assets/js/jquery-3.6.0.min.js', array('jquery'), '3.6.0');
    // wp_enqueue_script('maskedinput-js', get_template_directory_uri() . '/assets/js/maskedinput.min.js', array('jquery'), '1.4.1');
    wp_enqueue_script('slick-js', get_template_directory_uri() . '/assets/js/slick.min.js', array('jquery'), '1.8.1');
    wp_enqueue_script('bootstrap-js', get_template_directory_uri() . '/assets/js/bootstrap.min.js', array('jquery'), '5.0.2');
    wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0');
}
add_action('wp_enqueue_scripts', 'theme_scripts');

