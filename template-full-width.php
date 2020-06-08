<?php
/* Template name: Full width */
?>

<?php get_header(); ?>

<main id="page-content">
    <?php if(have_posts()): the_post(); the_content(); endif; ?>
</main>

<?php get_footer(); ?>