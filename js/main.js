$('.menu-toggle').click(function () {
	$('.nav').toggleClass('mobile-nav');
	$(this).toggleClass('is-active');
});
$('.nav-item').click(function () {
	$('#mobile-menu').removeClass('is-active');
	$('#nav').removeClass('mobile-nav');
});
$(document).ready(function () {
	$('.services-container-mobile').slick({
		dots: true,
		autoplay: true,
		slidesPerRow: 1,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: true,
		swipeToSlide: true,
		touchMove: true,
		prevArrow: $('.slider-prev-mobile'),
		nextArrow: $('.slider-next-mobile'),
	});
	$('.services-container-pc').slick({
		dots: true,
		autoplay: true,
		slidesPerRow: 2,
		slidesToShow: 2,
		slidesToScroll: 2,
		swipe: true,
		swipeToSlide: true,
		touchMove: true,
	});
	$('.industries-container-mobile').slick({
		dots: true,
		autoplay: true,
		slidesPerRow: 1,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: true,
		swipeToSlide: true,
		touchMove: true,
	});
	$('.industries-container-pc').slick({
		dots: true,
		autoplay: true,
		slidesPerRow: 2,
		slidesToShow: 2,
		slidesToScroll: 2,
		swipe: true,
		swipeToSlide: true,
		touchMove: true,
	});
	$('.clients-talk-slider').slick({
		adaptiveHeight: false,
		autoplay: true,
		arrows: false,
		dots: true,
		draggable: true,
		infinite: false,
		slidesPerRow: 1,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: true,
		swipeToSlide: true,
		touchMove: true,
		useTransform: true,
	});
});
