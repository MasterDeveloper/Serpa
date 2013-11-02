$(function(){
	$('.slider-1').bxSlider({
		  auto: true,
		  autoControls: true
	});
	$('.slider-2').bxSlider({
		  auto: true,
		  pager: false,
		  controls:	false
	});
	$('.slider-3').bxSlider({
		pager: true
	});
	$('.slide-top, .scroll-home').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	})
	$('.menu-btn').click(function(){
		$('.navigation').stop(true, true).slideToggle()
		return false;
	});
	
});

// navigation
$(document).ready(function(){
	$("#nav-wrap").data("top", $("#nav-wrap").offset().top); // set original position on load
	$(window).scroll(fixDiv);
});
function fixDiv() {
	var $div = $("#nav-wrap");
	if ($(window).scrollTop() > $div.data("top")) { 
		$('#nav-wrap').css({'position': 'fixed', 'top': '0', 'width': '100%'});
		$("#nav-hidden").show();
	}
	else {
		$('#nav-wrap').css({'position': 'static', 'top': 'auto', 'width': '100%'});
		$("#nav-hidden").hide();
	}
}