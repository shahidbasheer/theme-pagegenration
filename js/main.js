 function megaMenuResize () {
             jQuery(".dropdown-menu").css("max-width", jQuery(".nav.navbar-nav").width(),200 );
         }

  jQuery(document).ready(function($){

        var config = {    
         sensitivity: 3,    
         interval: 300,     
         timeout: 300,    

        };

        $(".dropdown").hoverIntent(            
            function(config) {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("2000");
                $(this).toggleClass('open');        
            },
            function() {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("1000");
                $(this).toggleClass('open');       
            } );
        
        $(".first-ul > li.men ").hoverIntent( function() {
                       
                    $(".mega-dropdown-menu > li.women ").addClass('hide');
                    $(".mega-dropdown-menu > li.men ").removeClass('hide');
                },config);
         
         $(".first-ul > li.women ").hoverIntent( function() {
                
                $(".mega-dropdown-menu > li.men ").addClass('hide');
                $(".mega-dropdown-menu > li.women ").removeClass('hide');
                
                },config);  

         
        // Ashtetic Mega Menu
         $(".first-ul.asthetic .anti-aging ").hoverIntent( function() {
                
                $(".mega-dropdown-menu").find(".displayed").removeClass('displayed').addClass("hide");
                $(".mega-dropdown-menu > li.anti-aging").removeClass('hide').addClass('displayed');
                
                
                },config); 

        $(".first-ul.asthetic .aesthetic-laser ").hoverIntent( function() {
                console.log(this);
                
                $(".mega-dropdown-menu").find(".displayed").removeClass('displayed').addClass("hide");
                $(".mega-dropdown-menu > li.aesthetic-laser ").removeClass('hide').addClass('displayed');
                
                },config); 

         $(".first-ul.asthetic .aesthetic-smile ").hoverIntent( function() {
                console.log(this);
                
                $(".mega-dropdown-menu").find(".displayed").removeClass('displayed').addClass("hide");
                $(".mega-dropdown-menu > li.aesthetic-smile ").removeClass('hide').addClass('displayed');
                
                },config);
         $(".first-ul.asthetic .aesthetic-face ").hoverIntent( function() {
                console.log(this);
                
                $(".mega-dropdown-menu").find(".displayed").removeClass('displayed').addClass("hide");
                $(".mega-dropdown-menu > li.aesthetic-face ").removeClass('hide').addClass('displayed');
                
                },config);
         $(".first-ul.asthetic .aesthetic-breast ").hoverIntent( function() {
                console.log(this);
                
                $(".mega-dropdown-menu").find(".displayed").removeClass('displayed').addClass("hide");
                $(".mega-dropdown-menu > li.aesthetic-breast ").removeClass('hide').addClass('displayed');
                
                },config);
        $(".first-ul.asthetic .aesthetic-body ").hoverIntent( function() {
                console.log(this);
                
                $(".mega-dropdown-menu").find(".displayed").removeClass('displayed').addClass("hide");
                $(".mega-dropdown-menu > li.aesthetic-body ").removeClass('hide').addClass('displayed');
                
                },config); 
        $(".first-ul.asthetic .aesthetic-sculpting ").hoverIntent( function() {
                console.log(this);
                
                $(".mega-dropdown-menu").find(".displayed").removeClass('displayed').addClass("hide");
                $(".mega-dropdown-menu > li.aesthetic-sculpting ").removeClass('hide').addClass('displayed');
                
                },config);     
         $(".first-ul.asthetic .aesthetic-restoration ").hoverIntent( function() {
                console.log(this);
                
                $(".mega-dropdown-menu").find(".displayed").removeClass('displayed').addClass("hide");
                $(".mega-dropdown-menu > li.aesthetic-restoration ").removeClass('hide').addClass('displayed');
                
                },config);
         $(".first-ul.asthetic .aesthetic-obesity ").hoverIntent( function() {
                console.log(this);
                
                $(".mega-dropdown-menu").find(".displayed").removeClass('displayed').addClass("hide");
                $(".mega-dropdown-menu > li.aesthetic-obesity ").removeClass('hide').addClass('displayed');
                
                },config);  
        $(".first-ul.asthetic .aesthetic-surgery ").hoverIntent( function() {
                console.log(this);
                
                $(".mega-dropdown-menu").find(".displayed").removeClass('displayed').addClass("hide");
                $(".mega-dropdown-menu > li.aesthetic-surgery ").removeClass('hide').addClass('displayed');
                
                },config);

        
         megaMenuResize();

         $(window).resize(function() {
           console.log('resize fired');
           megaMenuResize();
        });

         // Special offer form ==============================================================

         // var expEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
          
         //  function isEmail(email) {
         //    var regex =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
         //    return regex.test(email);
         //  }
          
         //    var form = jQuery("#specialOffer");
         //    // submit form 
         //     jQuery(form).submit(function(event) {  
         //        event.preventDefault(); 
         //           post_data = {
         //                 'email'     : $('#specialOffer input[name=email]').val()
         //             };

         //            //console.log( post_data ['email']);
         //         if ( !isEmail( post_data ['email'] ) ) {
                  
         //          console.log('invalid email form not submit');
                  
         //          $("#specialOffer .form-section .form-group").first().addClass('ml-error');

         //          }  else {

         //            submitForm ();
         //          }
         //     });
         //          function submitForm () {
         //             //console.log( post_data );
         //                  $.ajax({
         //                       method:  'POST',
         //                       url: siteURL + '/inc/special-offer-form.php', // proper url to your "store-address.php" file
         //                       data : post_data,
         //                       dataType: 'json', // what type of data do we expect back from the server
         //                       success:   console.log ('ajax success'), // success ajax call from client side
         //                       //error:   "" ;  
                               
         //                  }).
         //                     done(function(data) {
         //                       // get php response in json
         //                        //console.log(data);
         //                        //if msg sent
         //                        var form_p = $('#specialOffer p');

         //                         if (data.status == "email_sent") {
         //                           //console.log('hide form calll')
         //                           msgsent (form_section, form_button, form_p);
         //                         } else if ( data.email == "email_not_valid") {
         //                            form_p.html('Sorry Your Email is not Valid.');
         //                            form_p.css({
         //                              color: 'red',
         //                            });
         //                         }

         //                        // here we will handle errors and validation messages
         //                      }).
         //                        fail(function(jqXHR, textStatus, errorThrown ) {
                                            
         //                                    //console.log(jqXHR);
                                          
         //                        });

         //          }//submit form 
         //          var form_section = $('#specialOffer .form-section').eq(1);
         //          var form_button = $('#specialOffer button');
                  
         //          function msgsent (form_section , form_button, form_p) {
         //            form_section.css({
         //               display: 'none'
         //             });
         //            form_button.css({
         //               display: 'none'
         //             });
         //            form_p.html('Thank you! You have successfully subscribed to our newsletter.');
                    
         //          }
                
    });
  
          
    