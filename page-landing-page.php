<?php
/*
Template Name: landing-page
*/
?>

<?php get_header ('landing-page'); ?>
<link href='https://fonts.googleapis.com/css?family=Passion+One:400,700' rel='stylesheet' type='text/css'>

 <link rel="stylesheet" href="<?php echo  theme_root . '/'; ?>css/style-landing-page.min.css">
    <link rel="stylesheet" href="<?php echo  theme_root . '/'; ?>font-awesome/css/font-awesome.min.css">
    <link href='https://fonts.googleapis.com/css?family=Passion+One:400,700' rel='stylesheet' type='text/css'>
    

    <!-- Important Owl stylesheet -->
    <link rel="stylesheet" href="<?php echo  theme_root . '/'; ?>css/owl.carousel.css">
     
    <!-- Default Theme -->
    <link rel="stylesheet" href="<?php echo  theme_root . '/'; ?>css/owl.theme.css">


            <!-- ****************************Nav End************************ -->
                <div id="landing-page">
                    
                
               <?php 
               if ( have_posts() ) {
                    while ( have_posts() ) {
                        the_post(); 
                        //
                        the_title();
                        //
                    } // end while
               } // end if
               ?>
                
                
                </div>

            <!-- **************************** insidetemplate ************************ -->
 <?php get_footer('landing-page'); ?>

 <script src="<?php echo  theme_root . '/'; ?>js/owl.carousel.min.js"></script>
    
    <script>
           jQuery(document).ready(function($) {
            var owl  = $('#demo');
             $(owl).owlCarousel({
            
                 autoPlay: 3000, //Set AutoPlay to 3 seconds
            
                 items : 4,
                 pagination: false,
                 itemsDesktop : [1199,3],
                 itemsDesktopSmall : [979,3]
            
             });



             $('.indicator-next').click(function() {
                console.log('clicked');
                 owl.trigger('next.#dem');
             })
             // Go to the previous item
             $('.indicator-pre').click(function() {
                 // With optional speed parameter
                 // Parameters has to be in square bracket '[]'
                 owl.trigger('prev.#dem', [300]);
             })
            
           });


            jQuery(document).ready(function($) {
            var owl  = $('#demo-2');
             $(owl).owlCarousel({
            
                 autoPlay: 3000, //Set AutoPlay to 3 seconds
            
                 items : 4,
                 pagination: false,
                 itemsDesktop : [1199,3],
                 itemsDesktopSmall : [979,3]
            
             });



             $('.indicator-next').click(function() {
                console.log('clicked');
                 owl.trigger('next.#dem');
             })
             // Go to the previous item
             $('.indicator-pre').click(function() {
                 // With optional speed parameter
                 // Parameters has to be in square bracket '[]'
                 owl.trigger('prev.#dem', [300]);
             })
            
           });
    </script>