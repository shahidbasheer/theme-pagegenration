<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */


?>



<!-- **************************** insidetemplate ************************ -->

<footer id="footer" class="container-fluid">
        
        
         <div class="row copyright"><!-- copyright -->
            <p class="copyright"><small>&copy; 2015 - Copyright Dr GVG Clinic, Bangalore.</small> </p>
        </div><!-- copyright -->

    </footer>

    
    </div>
    <!-- /wrap -->
    <script>
        //window.jQuery || document.write('<script src="<?php echo  theme_root . '/'; ?>js/vendor/jquery-1.11.2.min.js"><\/script>')
    </script>




   
   <script src="<?php echo  theme_root . '/'; ?>js/vendor/bootstrap.min.js"></script>
   <script src="<?php echo  theme_root . '/'; ?>js/jquery-ui.js"></script>
  <script src="<?php echo  theme_root . '/'; ?>js/plugins.js"></script>
  <script src="<?php echo  theme_root . '/'; ?>js/superfish/js/hoverIntent.js"></script>
  <script src="<?php echo  theme_root . '/'; ?>js/main.js"></script>

<script src="<?php echo  theme_root . '/'; ?>js/ct-social-widgets/moment.min.js"></script>
<script src="<?php echo  theme_root . '/'; ?>js/ct-social-widgets/codebird.js"></script>
<script src="<?php echo  theme_root . '/'; ?>js/ct-social-widgets/social-widgets.js"></script>
<script src="<?php echo  theme_root . '/'; ?>js/ct-social-widgets/init.js"></script>

     <!-- <script src="https://use.typekit.net/rqi2ege.js"></script> -->
    <script>
      try{Typekit.load({ 

                async: true,
                 active: function() { 
                    megaMenuResize();
                 } 

       });}catch(e){}
    </script>     
    
     <script>
          function ml_webform_success_1334293() {
              jQuery('#mlb2-1334293').find('.ml-block-success').show();
              jQuery('#mlb2-1334293').find('.ml-block-form').hide();
          };
      </script>
  
</body>
</html>


<style>
    #simple-modal {
        display: none;
    }

    #popup-form .popup-button.btn-orange {
        background: #ff9600;
        border-color: #ff9600;
    }
    #popup-form .popup-button.btn-orange:hover {
        background: #f16209;
        border-color: #f16209;
    }

</style>

<script>

    jQuery('.socialSecond').socialTimeLine({
        width: 250

    });

</script>

<script>
    jQuery(document).ready(function($) {

        // If front Page

        jQuery(window).bind('scroll', function() {
            if (jQuery(window).scrollTop() > (jQuery(window).height()+2800)) {
                jQuery('#simple-modal').slideDown(1000);
                // jQuery("#simple-modal").removeClass('hidden').addClass('displayed');
            }
            if (jQuery(window).scrollTop() < (jQuery(window).height()+2800)) {
                jQuery('#simple-modal').slideUp(1000);
                // jQuery("#simple-modal").removeClass('displayed').addClass('hidden');

            }
        });

        jQuery('.close').on('click', function(event) {
            console.log('clicked');
            event.preventDefault();
            jQuery('#simple-modal').css('visibility', 'hidden');
            /* Act on the event */

        });

    });
</script>

<style>
  
  .socialSecond.socialMedia-switcher.socialMedia-switcher--right > nav > ul > li a {
    padding-top: 0;
}

  .socialMedia-switcher .socialMedia-nav .socialMedia-nav-list > li > a {
    display: block;
    height: 60px;
    line-height: 46px; 
  }


  .socialMedia-switcher.socialMedia-switcher--right .socialMedia-nav .socialMedia-nav-list > li {

    width: 43px !important;

}

.socialMedia-switcher .socialMedia-nav .socialMedia-nav-list > li > a {

    height: 43px; 
}


</style>
<!-- Smartsupp Live Chat script -->
<script type="text/javascript">
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'c330db98f727492ffdb2a178ea2c8ed34ee15e02';
window.smartsupp||(function(d) {
var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
s=d.getElementsByTagName('script')[0];c=d.createElement('script');
c.type='text/javascript';c.charset='utf-8';c.async=true;
c.src='//www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
</script>

<style>
  
 
</style>