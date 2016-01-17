

<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<link rel="stylesheet" href="<?php echo  theme_root . '/'; ?>css/bootstrap.min.css">
<link rel="stylesheet" href="<?php echo  theme_root . '/'; ?>css/style.css">

<link rel="stylesheet" href="<?php echo  theme_root . '/'; ?>fonts/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet" type="css" href="<?php echo  theme_root . '/'; ?>js/ct-social-widgets/pluginstyle.css">
<link rel="stylesheet" type="css" href="<?php echo  theme_root . '/'; ?>js/ct-social-widgets/fontello.css">
<!-- <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css"> -->
    
<script src="<?php echo  theme_root . '/'; ?>js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
<?php wp_head(); ?>
<script src='https://www.google.com/recaptcha/api.js'></script>

</head>

<script>
	var siteURL  =  "<?php bloginfo('template_directory') ?>";
	
</script>

<body <?php body_class(); ?>>
	<div class="wrap">
	       
	        <header>
	                <div class="container-fluid">
	                    <div class="row">
	                        <div class="col-md-2 col-sm-6 col-xm-12">
	                            <div class="logo">
	                                <a href="index.php"><img title="" src="<?php echo  theme_root . '/'; ?>images/gvg.logo.png" alt=""></a>
	                            </div>
	                        </div>
	                        <div
	                        </div>
	                    </div> <!-- row -->
	                    <div class="row">
	                        <div class="col-md-12 col-sm-12 col-xm-12">
	                           
	                        </div>
	                    </div>
	                </div>
	        </header>

	            <!-- Start of nav -->
	        
	    
	        
	        <?php //wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
	        <div class="socialSecond socialMedia-switcher socialMedia-switcher--right"></div>
