(()=>{
	//$(window).on('load', function(event) {
		       // $('#preloader').delay(500).fadeOut(500);
		   // });
const openNavMenu=document.querySelector(".open-nav-menu"),
 closeNavMenu=document.querySelector(".close-nav-menu"),
 navMenu=document.querySelector(".nav-menu"),
 menuOverlay=document.querySelector(".menu-overly"),
 mediaSize=991;
	
	openNavMenu.addEventListener("click", toggleNav);
	closeNavMenu.addEventListener("click", toggleNav);

	menuOverlay.addEventListener("click", toggleNav);

	function toggleNav(){
		navMenu.classList.toggle("open");
		menuOverlay.classList.toggle("active");
		ocument.body.classList.toggle("hidden-scrolling");
	}
	navMenu.addEventListener("click",(event)=>{
		if (event.target.hasAttribute("data-toggle") && window.innerWidth<=mediaSize) {
			//prevent default ancor click behavior
			event.preventDefault();
			const menuIteamHasChildren=event.target.parentElement;
			//if menuIteamHasChildren is already ecpanded collapse it
			if (menuIteamHasChildren.classList.contains("active")){
				collapseSubMenu();
			}
			else{
				//collapse exting expanded menuIteamHasChildren
			if(navMenu.querySelector(".menu-iteam-has-childrean.active")){
				collapseSubMenu();
			}
			//expand new menuIteamHasChildren
			menuIteamHasChildren.classList.add("active");
			const subMenu=menuIteamHasChildren.querySelector(".submenu");
			subMenu.style.maxHeight=subMenu.scrollHeight + "px";
		}
		}
	});
	function collapseSubMenu(){
		navMenu.querySelector(".menu-iteam-has-childrean.active .submenu")
		.removeAttribute("style");
		navMenu.querySelector(".menu-iteam-has-childrean.active")
		.classList.remove("active");
	}

	function resizeFix(){
		if (navMenu.classList.contains("open")) {
			toggleNav();
		}	
		if(navMenu.querySelector(".menu-iteam-has-childrean.active")){
				collapseSubMenu();
		}
	}
	window.addEventListener("resize",function(){
		if (this.innerWidth > mediaSize) {
			resizeFix();
		}

	});
})();

(function($){
	'use script';

	// WOW JS
	new WOW().init();

 // Google Map JS
	function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(26.032101, 88.460716), // New York
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#202c3e"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20},{"weight":"1.39"},{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"weight":"0.96"},{"saturation":"9"},{"visibility":"on"},{"color":"#000000"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":"9"},{"color":"#29446b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#193a55"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25},{"weight":"0.01"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20}]}]
        };
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(26.032101, 88.460716),
            map: map,
            title: 'Cryptox'
        });
    }
    if ($('#map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    }

	// Scroll Area
	$(document).ready(function(){
	    $('.scroll-area').click(function(){
	      	$('html').animate({
	        	'scrollTop' : 0,
	      	},700);
	      	return false;
	    });
	    $(window).on('scroll',function(){
	      	var a = $(window).scrollTop();
	      	if(a>400){
	            $('.scroll-area').slideDown(300);
	        }else{
	            $('.scroll-area').slideUp(200);
	        }
	    });
	});
		$(window).on("load",function(){
        	$(".accordion-body p").mCustomScrollbar();
   	 	});
	
	// Initialize popup as usual
	$('.image-link').magnificPopup({
	  type: 'image',
	  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

	  zoom: {
	    enabled: true, // By default it's false, so don't forget to enable it

	    duration: 300, // duration of the effect, in milliseconds
	    easing: 'ease-in-out', // CSS transition easing function
	    opener: function(openerElement) {
	      // openerElement is the element on which popup was initialized, in this case its <a> tag
	      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
	      return openerElement.is('img') ? openerElement : openerElement.find('img');
	    }
	  }

	});
	//SKILL
	var $banner = $('.slider-area-full');
    if($banner.length > 0){
	$(document).ready(function(){
	  	$(".slider-area-full").owlCarousel({
	  		loop:true,
	  		center:true,
	  		items:1,
	  		autoplay: true,
	  	});
	});
}

	$(document).ready(function(){
	  	$(".work-slider").owlCarousel({
	  		loop:true,
	  		
	  		items:3,
	  		nav:true,
			navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
			  responsive:{
		        0:{
		            items:1,
		        },
		        600:{
		            items:1,
		        },
		        1000:{
		            items:3,
		        }
		    }
	  	});
	}); 

	//client slider
	$(document).ready(function(){
	  	$(".single-client").owlCarousel({
	  		loop:true,
	  		items:2,
	  		nav:true,
			navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
			  responsive:{
		        0:{
		            items:1,
		        },
		        600:{
		            items:2,
		        },
		        1000:{
		            items:2,
		        }
		    }
	  	});
	});
	

	// Sticky Menu
	$(document).ready(function(){
		$(window).on('scroll',function(){
			var scroll = $(window).scrollTop();
			if(scroll < 150){
				$('.header-main').removeClass('sticky');
			}else{
				$('.header-main').addClass('sticky');
			}
		});
	});



	// Counter Active
	var $counter = $('.coder');
    if($counter.length > 0){
		$('.coder').counterUp({
	       delay: 10,
	       time: 1000
	    });
	}

	 $('.slider-for').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: true,
			  fade: true,
			  prevArrow:'<span class="prev-arrow"><i class="fas fa-chevron-right"></i></span>',
			  nextArrow:'<span class="next-arrow"><i class="fas fa-chevron-left"></i></span>',
			});
			$('.slider-nav').slick({
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  asNavFor: '.slider-for',
			  dots:false,
			  centerMode: false,
			  focusOnSelect: true
			});
			$('.responsive').slick({
			  dots: true,
			  infinite: false,
			  speed: 300,
			  slidesToShow: 4,
			  slidesToScroll: 4,
			  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1,
			        infinite:false,
			        dots:false
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1,
			        infinite:false,
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1,
			        infinite:false,
			      }
			    }
			  ]
			});

			$('.slider-nav2').slick({
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  asNavFor: '.slider-for',
			  dots:false,
			  centerMode: false,
			  focusOnSelect: true
			});

		

}(jQuery));

