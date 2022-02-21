$(document).ready(function(){
	// sliders
    
    // alert("he;;o");
setTimeout(function() {
	// alert("heee");
	$('.get-started-slider').bxSlider({
		touchEnabled:false,
		nextText:'<img src="./assets/images/agency_slide_move_next.svg" alt="Arrow Next Icon"/>',
		prevText:'<img src="./assets/images/about_slide_move_previous.svg" alt="Arrow Prev Icon"/>',
		slideZIndex: 3,
	});

	$('.process-slider').bxSlider({
		touchEnabled:false,
		controls:true,
		nextText:'<img src="./assets/images/process_slide_move_next.svg" alt="Arrow Next Icon"/>',
		prevText:'<img src="./assets/images/process_slide_move_previous.svg" alt="Arrow Prev Icon"/>',
		adaptiveHeight:true,
		pagerCustom: '.process-pager',
		mode:'fade',
		onSlideBefore: function(elem){
			var pagerNumber = $('.process-pager li').length;
			pagerNumber = pagerNumber - 1;

				var idx = elem.index();
				console.log(idx);
				console.log(pagerNumber);
				jQuery('.process-pager li a span').removeClass('dot-active');
				jQuery('.process-pager li:first-child a span').addClass('dot-active');
				for(var i = 0; i <= idx; i++) {
					jQuery('.process-pager li a[data-slide-index="'+i+'"] span').addClass('dot-active');
				}

		},
		hideControlOnEnd: true,
   		startSlide: 0,
   		infiniteLoop:false,
   		slideZIndex: 3,
	});

	$('.digital-slider').bxSlider({
		touchEnabled:false,
		slideWidth:500,
		pager:false,
		nextText:'<img src="./assets/images/about_slide_move_next.svg" alt="Arrow Next Icon"/>',
		prevText:'<img src="./assets/images/about_slide_move_previous.svg" alt="Arrow Prev Icon"/>',
		mode:'fade'
	});
	$('.testimonial-slider').bxSlider({
		touchEnabled:false,
		nextText:'<img src="./assets/images/tesimonials_move_next.svg" alt="Arrow Next Icon"/>',
		prevText:'<img src="./assets/images/tesimonials_move_previous.svg" alt="Arrow Prev Icon"/>',
		pager:false,
		mode:'fade'
	});
// }, 2000);
	// function Utils() {}
	// 	Utils.prototype = {
	// 		constructor: Utils,
	// 			isElementInView: function(element, fullyInView) {
	// 			   	var pageTop = $(window).scrollTop();
	// 			    var pageBottom = pageTop + $(window).height();
	// 			    var elementTop =$(element).offset().top;
	// 			    var elementBottom = elementTop + jQuery(element).height();
	// 			    if (fullyInView === true) {
	// 			        return ((pageTop < elementTop) && (pageBottom > elementBottom));
	// 				} else {
	// 			            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
	// 			        }
	// 			    }
	// 			};
	// var Utils = new Utils();

	$('.read-more-btn').on({
		mouseover: function(){ 
			$(this).parents('.best-features-block').find('.best-feature-icon').addClass('left-icon');
			$(this).parents('.best-features-block').find('.best-feature-icon').addClass('right-icon');
			$(this).parents('.best-features-block').find('.best-feature-icon img').fadeOut("fast");
		},
		mouseleave: function(){ 
			$(this).parents('.best-features-block').find('.best-feature-icon').removeClass('left-icon');
			$(this).parents('.best-features-block').find('.best-feature-icon').removeClass('right-icon');
			$(this).parents('.best-features-block').find('.best-feature-icon img').fadeIn("fast");
		}
	});
	
	$('.footer-contact-description a').on({
		mouseover: function(){ 
			$(this).parents('.footer-contact').find('.location-icon #Location #Path_165').css({"transform": "translate(-88px , -11px)","fill":"rgb(255,255,255)"});
			$(this).parents('.footer-contact').find('.location-icon #Location #Path_164').css({"fill":"rgb(255,255,255)"});
			$(this).parents('.footer-contact').find('.call-icon #Call #Path_98').css({"fill":"rgb(255,255,255)"});
			$(this).parents('.footer-contact').find('.call-icon #Call #Path_102	').css({"fill":"rgb(255,255,255)"});
			$(this).parents('.footer-contact').find('.call-icon #Call #Path_103').css({"fill":"rgb(255,255,255)"});
			$(this).parents('.footer-contact').find('.mail-icon #Path_775').css({"fill":"rgb(255,255,255)"});
			$(this).parents('.footer-contact').find('.mail-icon #Path_775').css({"fill":"rgb(255,255,255)"});
			$(this).parents('.footer-contact').find('.mail-icon #Path_776').css({"fill":"rgb(255,255,255)"});
		},
		mouseleave: function(){ 
			$(this).parents('.footer-contact').find('.location-icon #Location #Path_165').css({"transform": "translate(-88px , 0px)", "fill":"rgb(112,112,112)"});
			$(this).parents('.footer-contact').find('.location-icon #Location #Path_164').css({"fill":"rgb(112,112,112)"});
			$(this).parents('.footer-contact').find('.call-icon #Call').css({"animation": "none"});
			$(this).parents('.footer-contact').find('.call-icon #Call #Path_98').css({"fill":"rgb(112,112,112)"});
			$(this).parents('.footer-contact').find('.call-icon #Call #Path_102	').css({"fill":"rgb(112,112,112)"});
			$(this).parents('.footer-contact').find('.call-icon #Call #Path_103').css({"fill":"rgb(112,112,112)"});
			$(this).parents('.footer-contact').find('.mail-icon #Path_775').css({"fill":"rgb(112,112,112)"});
			$(this).parents('.footer-contact').find('.mail-icon #Path_776').css({"fill":"rgb(112,112,112)"});
		}
	});
}, 2000);
	// Intialization for animation
	new WOW().init({
		offset: 100
	});
	// Splitting({
	// 	traget:'h1 span',
	// 	whitespace:false
	// });
	// popup Video
	// var popupwr = $('.popup-bg-wr');
	// var popupOverlay = $('.popup-content');
	// var popupVideo = $('.popup-video');
	// var popupClose = $('.close-btn');
	// var videoPlayBtn =$('.video-btn');
	// $(popupClose).on("click",function(){
	// 	// alert("hhhh");
	// 	$(popupwr).css({display:"none"});
	// 	$(popupOverlay).fadeOut();
	// 	$('.popup-video iframe').attr('src',$('.popup-video iframe').attr('src', ' ') );
	// 	$('.video-block').get(0).pause();
	// 	$('.conative-page').css({"overflow":"visible"});
	// });

	// $('.popup-bg-wr').on("click" , function(){
 // 		popupwr.fadeOut();
 // 		$(popupOverlay).fadeOut();
 // 		$('.popup-video iframe').attr('src', $('.popup-video iframe').attr('src', ' ') );
 // 		$('.video-block').get(0).pause();
 // 		$('.conative-page').css({"overflow":"visible"});
 // 	});
	
	// videoPlayBtn.on("click", function(){
	// 	// alert("hello");
	// 	$(popupwr).css({display:"block"});
	// 	$(popupOverlay).fadeIn();
	// 	var data_target = jQuery(this).attr('data-target');
	// 	var data_v_id = jQuery(this).attr('data-v-id');
	// 	console.log(data_v_id);
	// 	$('.popup-content').fadeIn();

	// 	$('.conative-page').css({"overflow":"hidden"});
		
	// 	if(data_target == 'unknown') {
	// 		$('.video-block').show();
	// 		jQuery('.popup-video iframe').hide();
	// 		jQuery('.popup-video iframe').attr('src','');
	// 		jQuery('.video-block').attr('src',data_v_id);
	// 		$('.video-block').get(0).currentTime = 0;
	// 		$('.video-block').get(0).play();
	// 	} else {
	// 		data_v_id = data_v_id+'?autoplay=1';
	// 		$('.video-block').get(0).pause();
	// 		$('.video-block').hide();
	// 		jQuery('.popup-video iframe').show();
	// 		jQuery('.popup-video iframe').attr('src',data_v_id);
	// 		jQuery('.video-block').attr('src',data_v_id);
	// 	}
	// });


});


// alert("jump");
	// on scroll js
	// $(window).scroll(function(){
	// // alert("hello");
	// 	var ourClientHeight = $('.our-client-wr').position().top,
	// 	    boxInner = $('.our-client-wr').innerHeight(),
	// 	    boxOuter = $('.our-client-wr').outerHeight(),
	// 	    windowHeight = $(window).height(),
	// 	    scroll = $(window).scrollTop();
			
	// 	// sticky header
	// 	 var sticky = $('header')
	// 	if (scroll >= 40) { 
	// 		    sticky.addClass('fixed'); 
	// 		    $('.logo-block').addClass('logo-fixed');
	// 		    $('.header-contact-content').addClass('header-content-fixed');
	// 		    $('.our-work-blk a').addClass('btn-padding');
	// 	}
	// 	else { 
	// 		    sticky.removeClass('fixed');
	// 		    $('.logo-block').removeClass('logo-fixed');
	// 		    $('.header-contact-content').removeClass('header-content-fixed');;
	// 		    $('.our-work-blk a').removeClass('btn-padding');
	// 	}

	// 	// scrollTop button
	// 	var btn = $('.scroll-verticle-blk a');
	// 	btn.on('click', function(e) {
	// 	  // e.preventDefault();
	// 	  $('html, body').animate({scrollTop:0}, '300');
	// 	});
	// 	if (scroll > 400) {
	// 	    btn.addClass('show-scroll');
	// 	} else {
	// 	  btn.removeClass('show-scroll');
	// 	}
	// 	var section1 = Utils.isElementInView(document.getElementsByClassName('digital-section-wr'), false);
 //        var section2 = Utils.isElementInView(document.getElementsByClassName('creator-content-area'), false);
 //        var section3 = Utils.isElementInView(document.getElementsByClassName('best-features-area'), false);
 //        var section4 = Utils.isElementInView(document.getElementsByClassName('process-slider-area'), false);
 //        var section5 = Utils.isElementInView(document.getElementsByClassName('our-project-wr'), false);
 //        var section6 = Utils.isElementInView(document.getElementsByClassName('counter-area'), false);
	// 	// 1
	// 	if(section1) {
	// 		btn.removeClass('scroll-line2');
	// 		btn.removeClass('scroll-line3');
	// 		btn.removeClass('scroll-line4');
	// 		btn.removeClass('scroll-line5');
	// 		btn.removeClass('scroll-line6');
	// 		btn.addClass('scroll-line1');
 //        }
	// 	if(section2) {
	// 		btn.removeClass('scroll-line1');
	// 		btn.removeClass('scroll-line3');
	// 		btn.removeClass('scroll-line4');
	// 		btn.removeClass('scroll-line5');
	// 		btn.removeClass('scroll-line6');
	// 		btn.addClass('scroll-line2');
 //        }
	// 	if(section3) {
	// 		btn.removeClass('scroll-line2');
	// 		btn.removeClass('scroll-line1');
	// 		btn.removeClass('scroll-line4');
	// 		btn.removeClass('scroll-line5');
	// 		btn.removeClass('scroll-line6');
	// 		btn.addClass('scroll-line3');
 //        }
	// 	if(section4) {
	// 		btn.removeClass('scroll-line2');
	// 		btn.removeClass('scroll-line3');
	// 		btn.removeClass('scroll-line1');
	// 		btn.removeClass('scroll-line5');
	// 		btn.removeClass('scroll-line6');
	// 		btn.addClass('scroll-line4');
 //        }
	// 	if(section5) {
	// 		console.log('Yes');
	// 		btn.removeClass('scroll-line2');
	// 		btn.removeClass('scroll-line3');
	// 		btn.removeClass('scroll-line4');
	// 		btn.removeClass('scroll-line1');
	// 		btn.removeClass('scroll-line6');
	// 		btn.addClass('scroll-line5');
 //        }
 //        if(section6) {
 //        	btn.removeClass('scroll-line2');
	// 		btn.removeClass('scroll-line3');
	// 		btn.removeClass('scroll-line4');
	// 		btn.removeClass('scroll-line5');
	// 		btn.removeClass('scroll-line1');
	// 		btn.addClass('scroll-line6');
 //        }
	// 	// counter
	// 	var counterArea = Utils.isElementInView(document.getElementsByClassName('counter-area'), false);

	// 	var winScrl = $(window).scrollTop();
	// 	var counterScrl = $(".counter-area").offset().top;
		
	// 	if(counterArea){
			
	// 		if($('.counter-value h3.completeScroll').length == 0) {
	//         $('.counter-value h3').each(function () {
	//         	var counterVal = $(this).attr('data-count');
	//           $(this).prop('Counter', 0).animate({ Counter: counterVal }, {
 //                duration: 2000,
 //                easing: 'swing',
 //                step: function () {
 //                    $(this).text(Math.ceil(this.Counter));
 //                },
	//         	complete: function(){
	//         		  $(this).text((this.Counter));
	//         		  $('.counter-value h3').addClass('completeScroll');
	//         	}
 //            	});
	//         });
	//     	}
	// 	}
    	
	// });

setTimeout(function() {
$(window).on("load", function(){
	// Our Projects Masonary
	$('.project-widget-area').masonry({
		columnWidth: 488,
		gutter:60,
		horizontalOrder:true
	});
});
// }, 3000);

// setTimeout(function() {
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
    alert("hello22");
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
}, 1000);


