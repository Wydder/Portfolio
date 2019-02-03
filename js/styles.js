$(document).ready(function(){
    
     	
  	var letters = $('span');
    var index = 0;
  
    function fadeInLeftEffect() {
    	letters.removeClass('hiddenBtn');
    	if (index == letters.length) return;
    	letters.eq(index++).addClass('fadeInLeftAnimation');
    	window.setTimeout(fadeInLeftEffect, 50);    		 
    };	

	fadeInLeftEffect();


  	$("#menu").click(function(){
      $(".other").toggle('hiddenBtn showBtn');
      $('.arrowControl').addClass('hiddenBtn');      
  });
  	

    


    $('#fullpage').fullpage( {
        //Navigation
        menu: 'menu',
        lockAnchors: false,
        anchors:['Home', 'About', 'Work', 'Contact'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'About me', 'Work & Skills', 'Contact'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 1000,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: false,
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: false,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){
      

            if (anchorLink == 'About') {
            	// =========================================================
            	// Year section
            	// =========================================================

            	// $('#timeline1989 p:first-child').delay(100).queue(function(){
            	// 	$(this).addClass('fadeInLeft')
            	// });
            	// $('#timeline1996 p:first-child').delay(400).queue(function(){
            	// 	$(this).addClass('fadeInLeft')
            	// });
            	// $('#timeline2000 p:first-child').delay(700).queue(function(){
            	// 	$(this).addClass('fadeInLeft')
            	// });
            	// $('#timeline2006 p:first-child').delay(1000).queue(function(){
            	// 	$(this).addClass('fadeInLeft')
            	// });
            	// $('#timeline2008 p:first-child').delay(1300).queue(function(){
            	// 	$(this).addClass('fadeInLeft')
            	// });
            	// $('#timeline2017 p:first-child').delay(1600).queue(function(){
            	// 	$(this).addClass('fadeInLeft')
            	// });
            		var i = 0;
        			var pArray = $('.timeline p:nth-child(1)');
        			var n = pArray.length ;
        			  for (i = 0 ; i < n; i++) {
        			   $(pArray[i]).delay(100 + i*300).queue(function(){
        			    $(this).addClass('fadeInLeft')
        			  });
        			};

            	// =========================================================
            	// Description section
            	// =========================================================
            	    		
        			var i = 0;
        			var pArray = $('.timeline p:nth-child(3)');
        			var n = pArray.length ;
        			  for (i = 0 ; i < n; i++) {
        			   $(pArray[i]).delay(100 + i*300).queue(function(){
        			    $(this).addClass('fadeInRight')
        			  });
        			};

            	// =========================================================
            	// Icon section
            	// =========================================================
            	
            		var i = 0;
        			var pArray = $('.timeline p:nth-child(2)');
        			var n = pArray.length ;
        			  for (i = 0 ; i < n; i++) {
        			   $(pArray[i]).delay(100 + i*300).queue(function(){
        			    $(this).addClass('rotateIn')
        			  });
        			};

            	// =========================================================
            	// Line section
            	// =========================================================
            		var i = 0;
        			var pArray = $('.timeline p:nth-child(4)');
        			var n = pArray.length ;
        			  for (i = 0 ; i < n; i++) {
        			   $(pArray[i]).delay(100 + i*300).queue(function(){
        			    $(this).addClass('widthIn')
        			  });
        			};
        		};

        	if (anchorLink == 'Work') {
        			
        			}
        		},
	

        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
      });

        $('#fp-nav').addClass('bounceInRightAnimation').delay(3000).queue(function(next){
        $(this).removeClass('bounceInRightAnimation'); 
        next();
    	});

    	$('.controlButton').addClass('bounceInRightAnimation').delay(3000).queue(function(next){
        $(this).removeClass('bounceInRightAnimation'); 
        next();
    	});

    	$('.profile_pic').addClass('zoomInDownAnimation').delay(2000).queue(function(next){
        $(this).removeClass('zoomInDownAnimation'); 
        next();
    	});
    	$('.nickname').addClass('flip-active').delay(3000).queue(function(next){
        $(this).removeClass('flip-active'); 
        next();
    	});
      $('#menu').addClass('bounceInDownAnimation').delay(3000).queue(function(next){
        $(this).removeClass('bounceInDownAnimation'); 
        next();
      });

      

  //   $('.portofoliu').addClass('flip-active').delay(3000).queue(function(next){
  //   $(this).removeClass('flip-active'); 
  //   next();
  // });




      $('#arrowTop').click(function(){
        $.fn.fullpage.moveSectionUp();
      });  
      $('#arrowDown').click(function(){
        $.fn.fullpage.moveSectionDown();
      });

      $('.controlButton').click(function(){
        $('#arrowTop').fadeToggle([600], 'hiddenBtn showBtn');
        $('#arrowDown').fadeToggle([600], 'hiddenBtn showBtn');
        $('.locker').toggleClass('fa-lock fa-unlock');
      });

    
 	$("#menu").click(function() {
		$('.flip').toggleClass('flip-active');
		  if($('.flip').hasClass('flip-active')){
		    $('.flip').addClass('fa-times');
			$('.flip').removeClass('fa-bars');			
		} else {
			$('.flip').addClass('fa-bars');
		    $('.flip').removeClass('fa-times');
		}      
	});  
});