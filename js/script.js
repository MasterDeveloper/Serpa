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
	$('.go-prev').click(function(){
		if ($('.thumb-circle').eq(0).hasClass('active')){
			$('.thumb-circle').eq(length -1).children('a').trigger('click');
		}
		else{
			$('.thumb-circle.active').prev().children('a').trigger('click');
		}
		return false;
	});
	$('.go-next').click(function(){
		if ($('.thumb-circle').eq(length -1).hasClass('active')){
			$('.thumb-circle').eq(0).children('a').trigger('click');
		}
		else{
			$('.thumb-circle.active').next().children('a').trigger('click');
		}
		return false;
	});
	$("#thumbnail a").click (function () {
		$('.controls-slide').show(0);
		$('.thumb-circle').removeClass('active');
		$('.tab-content').stop(true, true).fadeOut(0);/*.animate({
			height : '0',
			'min-height': '0',
			opacity:0.5
			
		},0);
		*/
		$(this.hash).stop(true, true).fadeIn(600).height('auto').css('opacity', 1);/*.animate({
			height:		'100%',
			opacity : 1,
		},600)
		
		*/
		$(this).parent().addClass('active');
		 $('html, body').animate({
				scrollTop: $('.thumbs-slider-wrap').offset().top - $('#nav-wrap').height() - 20
			}, 600);
		return false;
	});
	$('.close-slider').click(function(){
		$('.tab-content').height(0).css('overflow', 'hidden');
		$('.controls-slide').fadeOut(0);
			return false;
	});
	$('.slider-3').bxSlider({
		pager: true
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