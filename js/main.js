$(function() {
	$('.toggle-mobile').click(function() {
		$('.mobile-menu').addClass('open');
	});
	$('.close-toggle').click(function() {
		$('.mobile-menu').removeClass('open');
	});
	$('.img-feed').slick({
		slidesToShow: 6,
		dots: false,
		arrows: false,
		autoplay: true,
		infinite: true,
		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        centermode: true
	      }
	    }]
	});

	$('.qty-input .plus').click(function() {
		var value = parseInt($(this).parent().find('input').val());
		$(this).parent().find('input').val(value+1);
	});
	$('.qty-input .minus').click(function() {
		var value = parseInt($(this).parent().find('input').val());
		if(value > 1) {
			$(this).parent().find('input').val(value - 1);
		}
	});
	$('.checkout-btn').magnificPopup({
		type: 'inline',
		preloader: false,
		modal: true
	}).click();

	$('.close-modal').click(function(e) {
		e.preventDefault();
		var magnificPopup = $.magnificPopup.instance; 
		magnificPopup.close(); 
	});
	$('.go-guest').click(function(e) {
		e.preventDefault();
		$('#modal .options').fadeOut(function() {
			$('#modal .guest-checkout').fadeIn();
		});
	});
	$('h2.back').click(function(e) {
		e.preventDefault();
		$('#modal .guest-checkout').fadeOut(function() {
			$('#modal .options').fadeIn();
		});
	});

});