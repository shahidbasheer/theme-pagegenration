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
  <script type="text/javascript" src="//static1.mailerlite.com/js/w/webforms.js?v19"></script>
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
  
  .gform_body input, .gform_body select, .gform_body textarea {
  display: inline-block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}

.gform_body input:focus , .gform_body select:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
}

.gform_body input::-moz-placeholder {
  color: #999;
  opacity: 1;
}

.gform_body input:-ms-input-placeholder, .gform_body input::-webkit-input-placeholder {
  color: #999;
}

.gform_body input[disabled], .gform_body input[readonly] {
  background-color: #eee;
  opacity: 1;
}

fieldset[disabled] .gform_body input {
  background-color: #eee;
  opacity: 1;
}

.gform_body input[disabled], fieldset[disabled] .gform_body input {
  cursor: not-allowed;
}

.gform_wrapper textarea {
  height: auto;
}

.gform_wrapper .gfield_time_ampm select {
    width: 80px !important;
}

.gform_wrapper .top_label textarea.textarea {
    width: 47%;
}

.button.gform_button{ 
   width: 47%;
}

</style>