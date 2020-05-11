$(function(){

	$('.header__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrows-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrows-right.svg" alt=""></img>',
		asNavFor: '.slider-dotshead',
	});

	$('.slider-dotshead').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider',
	});

	$('.serf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrows-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrows-right.svg" alt=""></img>',
		asNavFor: '.slider-map',
	});

	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.serf-slider',
		focusOnSelect: true,
	});

	$('.holder__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrows-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrows-right.svg" alt=""></img>',
	})

});