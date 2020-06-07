<?php
/*
 * Created on Thu Jun 04 2020
 *
 * Copyright (c) 2020 Arkonsoft
 */

function arkonsoft_register_scripts() {
    wp_enqueue_style( 'bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' );
    wp_enqueue_style( 'theme-css', get_template_directory_uri() . '/assets/css/theme.css' );

    wp_enqueue_script( 'popper', 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js', array('jquery') , true);
    wp_enqueue_script( 'bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js', array('jquery') );
    wp_enqueue_script( 'theme-js', get_template_directory_uri() . '/assets/js/theme.js', array(
        'jquery',
        'wp-blocks',
        'wp-editor',
        'wp-components',
        'wp-i18n',
        'wp-element',
        'popper',
        'bootstrap'
    ), filemtime( get_template_directory_uri() . "/assets/js/theme.js" ));
}

add_action( 'init', 'arkonsoft_register_scripts' );

function arkonsoft_gutenberg_blocks() {

    register_block_type( 'arkonsoft/section', array(
        'editor_script' => 'theme-js1'
    ) );
    
}

add_action( 'init', 'arkonsoft_gutenberg_blocks' );
