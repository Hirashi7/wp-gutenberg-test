<?php
/* Template name: Container */
?>

<?php get_header(); ?>

<main id="page-content" class="container">
    <?php if(have_posts()): the_post(); 
        the_content();
    ?>
    <?php endif;?>
</main>

<?php get_footer(); ?>