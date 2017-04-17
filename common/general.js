/*
	The following code setup was borrowed from Stack Overflow
	link: http://stackoverflow.com/questions/28452235/make-a-nav-bar-stick-to-the-top-when-scrolling-with-css 
	
	This code is used to fix the navbar to the top of the webpage after scrolling
*/

$(document).ready(function() {
	$(window).scroll(function () {
      	if (window.innerWidth < 1024 && window.innerWidth > 768) {
			if ($(window).scrollTop() >= 70) {
			  $('#nav').addClass('navbar-fixed-top');
			  $('body').addClass('pad-for-nav');
			} else {
			  $('#nav').removeClass('navbar-fixed-top');
			  $('body').removeClass('pad-for-nav');
			}
		} else if (window.innerWidth < 769) {
			if ($(window).scrollTop() >= 120) {
			  $('#nav').addClass('navbar-fixed-top');
			  $('body').addClass('pad-for-nav');
			} else {
			  $('#nav').removeClass('navbar-fixed-top');
			  $('body').removeClass('pad-for-nav');
			}
		} else {
			if ($(window).scrollTop() >= 120) {
			  $('#nav').addClass('navbar-fixed-top');
			  $('body').addClass('pad-for-nav');
			} else {
			  $('#nav').removeClass('navbar-fixed-top');
			  $('body').removeClass('pad-for-nav');
			}
		}
	});
	
	console.log(window.innerHeight);
	if (window.innerHeight > 1000) {
		$('#content').height(window.innerHeight - 400);
	}
});

/* End borrowed code */