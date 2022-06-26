/*-----------------------------------------------------------------------------------

    Template Name:
    
-----------------------------------------------------------------------------------*/

    
(function ($) {
    'use strict';

    jQuery(document).ready(function () {
        
        
   /*************************
   ******OWLCAROUSEL*****
   **************************/     
      $('.request_form select, .header_top select').niceSelect();  
        
    /*************************
    ******OWLCAROUSEL*****
    **************************/

        $("#owl-demo").owlCarousel({
              autoPlay: 3000, //Set AutoPlay to 3 seconds
              items : 5,
               margin: 50,

          });
        
        
    /*************************
    ******FULLWIDTH SEARCH****
    **************************/
        
        $(".ss-trigger").on('click', function() {
            $(".ss-content").addClass("ss-content-act");
        });
        $(".ss-close").on('click', function() {
            $(".ss-content").removeClass("ss-content-act");
        });
        
    /*************************
    ******FULLWIDTH SEARCH****
    **************************/
        
        /* Get iframe src attribute value i.e. YouTube video url
        and store it in a variable */
        var url = $("#cartoonVideo").attr('src');

        /* Assign empty url value to the iframe src attribute when
        modal hide, which stop the video playing */
        $("#myModal").on('hide.bs.modal', function(){
            $("#cartoonVideo").attr('src', '');
        });

        /* Assign the initially stored url back to the iframe src
        attribute when modal is displayed again */
        $("#myModal").on('show.bs.modal', function(){
            $("#cartoonVideo").attr('src', url);
        });
        
        // Service Page Video Play
        if( $('video').length ){
            
            var video = $('#videof'),
                element = video[0];


            element.addEventListener('ended', function () {
                video.parent().removeClass("playing");
            }, false);

            element.addEventListener('pause', function () {
                video.parent().removeClass("playing");
            }, false);

            element.addEventListener('play', function () {
                video.parent().addClass("playing");
            }, false);        

            jQuery(".link-video-icon, .link-pause, .link-video").on('click', function(){
                var _mmVideo = $('#videof')[0];
                if(_mmVideo.paused){
                    _mmVideo.play();
                }else{
                    _mmVideo.pause();
                }
            });            
            
        }
        
        
        

    });

})(jQuery);

