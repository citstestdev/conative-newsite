setTimeout(function() {
function Utils() {}
    Utils.prototype = {
      constructor: Utils,
        isElementInView: function(element, fullyInView) {
          // alert(element); alert(fullyInView);
            var pageTop = $(window).scrollTop();
            var pageBottom = pageTop + $(window).height();
            var elementTop =$(element).offsetTop;
            var elementBottom = elementTop + jQuery(element).height();
            if (fullyInView === true) {
                return ((pageTop < elementTop) && (pageBottom > elementBottom));
          } else {
                    return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
                }
            }
        };
  var Utils = new Utils();

$(window).scroll(function() {
  var sticky = $('header'),
    scroll = $(window).scrollTop();
   
  if (scroll >= 40) { 
     sticky.addClass('fixed');
     $('.logo-block').addClass('logo-fixed');
     $('.header-contact-content').addClass('header-content-fixed');
     $('.our-work-blk a').addClass('btn-padding');
  }
  else { 
     sticky.removeClass('fixed');
     $('.logo-block').removeClass('logo-fixed');
     $('.header-contact-content').removeClass('header-content-fixed');;
     $('.our-work-blk a').removeClass('btn-padding');
}


 var btn = $('.scroll-verticle-blk a');
   btn.on('click', function(e) {
     // e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
   if (scroll > 400) {
    // alert("hello");
       btn.addClass('show-scroll');
   } else {
    // alert("hello11");
     btn.removeClass('show-scroll');
   }

      var section1 = Utils.isElementInView(document.getElementsByClassName('digital-section-wr'), false);
      var section2 = Utils.isElementInView(document.getElementsByClassName('creator-content-area'), false);
      var section3 = Utils.isElementInView(document.getElementsByClassName('best-features-area'), false);
      var section4 = Utils.isElementInView(document.getElementsByClassName('process-slider-area'), false);
      var section5 = Utils.isElementInView(document.getElementsByClassName('our-project-wr'), false);
      var section6 = Utils.isElementInView(document.getElementsByClassName('counter-area'), false);
   // 1
   if(section1) {
    // alert("hello22");
     btn.removeClass('scroll-line2');
     btn.removeClass('scroll-line3');
     btn.removeClass('scroll-line4');
     btn.removeClass('scroll-line5');
     btn.removeClass('scroll-line6');
     btn.addClass('scroll-line1');
        // }else{
        //   alert("elese");
        }
   if(section2) {
     btn.removeClass('scroll-line1');
     btn.removeClass('scroll-line3');
     btn.removeClass('scroll-line4');
     btn.removeClass('scroll-line5');
     btn.removeClass('scroll-line6');
     btn.addClass('scroll-line2');
        }
   if(section3) {
     btn.removeClass('scroll-line2');
     btn.removeClass('scroll-line1');
     btn.removeClass('scroll-line4');
     btn.removeClass('scroll-line5');
     btn.removeClass('scroll-line6');
     btn.addClass('scroll-line3');
        }
   if(section4) {
     btn.removeClass('scroll-line2');
     btn.removeClass('scroll-line3');
     btn.removeClass('scroll-line1');
     btn.removeClass('scroll-line5');
     btn.removeClass('scroll-line6');
     btn.addClass('scroll-line4');
        }
   if(section5) {
     console.log('Yes');
     btn.removeClass('scroll-line2');
     btn.removeClass('scroll-line3');
     btn.removeClass('scroll-line4');
     btn.removeClass('scroll-line1');
     btn.removeClass('scroll-line6');
     btn.addClass('scroll-line5');
        }
        if(section6) {
         btn.removeClass('scroll-line2');
     btn.removeClass('scroll-line3');
     btn.removeClass('scroll-line4');
     btn.removeClass('scroll-line5');
     btn.removeClass('scroll-line1');
     btn.addClass('scroll-line6');
        }
   // counter
   var counterArea = Utils.isElementInView(document.getElementsByClassName('counter-area'), false);

   var winScrl = $(window).scrollTop();
   var counterScrl = $(".counter-area").offset().top;
    
   if(counterArea){
      
     if($('.counter-value h3.completeScroll').length == 0) {
          $('.counter-value h3').each(function () {
           var counterVal = $(this).attr('data-count');
            $(this).prop('Counter', 0).animate({ Counter: counterVal }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $(this).text(Math.ceil(this.Counter));
                },
           complete: function(){
               $(this).text((this.Counter));
               $('.counter-value h3').addClass('completeScroll');
           }
             });
          });
       }
   }
      
});

// popup Video
  var popupwr = $('.popup-bg-wr');
  var popupOverlay = $('.popup-content');
  var popupVideo = $('.popup-video');
  var popupClose = $('.close-btn');
  var videoPlayBtn =$('.video-btn');
  // var videoPlayBtn = document.querySelector('.video-btn');

  // alert();
  $(popupClose).on("click",function(){
    // alert("hhhh");
    // alert("helll");
    $(popupwr).css({display:"none"});
    $(popupOverlay).fadeOut();
    $('.popup-video iframe').attr('src',$('.popup-video iframe').attr('src', ' ') );
    $('.video-block').get(0).pause();
    $('.conative-page').css({"overflow":"visible"});
  });

  $('.popup-bg-wr').on("click" , function(){
    // alert("helll11");
    popupwr.fadeOut();
    $(popupOverlay).fadeOut();
    $('.popup-video iframe').attr('src', $('.popup-video iframe').attr('src', ' ') );
    $('.video-block').get(0).pause();
    $('.conative-page').css({"overflow":"visible"});
  });
  
  videoPlayBtn.on("click", function(){
    // alert("hello");
    // alert("helll22");
    $(popupwr).css({display:"block"});
    $(popupOverlay).fadeIn();
    var data_target = jQuery(this).attr('data-target');
    var data_v_id = jQuery(this).attr('data-v-id');
    console.log(data_v_id);
    $('.popup-content').fadeIn();

    $('.conative-page').css({"overflow":"hidden"});
    
    if(data_target == 'unknown') {
      $('.video-block').show();
      jQuery('.popup-video iframe').hide();
      jQuery('.popup-video iframe').attr('src','');
      jQuery('.video-block').attr('src',data_v_id);
      $('.video-block').get(0).currentTime = 0;
      $('.video-block').get(0).play();
    } else {
      // alert("v");
      data_v_id = data_v_id+'?autoplay=1';
      $('.video-block').get(0).pause();
      $('.video-block').hide();
      jQuery('.popup-video iframe').show();
      jQuery('.popup-video iframe').attr('src',data_v_id);
      jQuery('.video-block').attr('src',data_v_id);
    }
  });
}, 2000);
