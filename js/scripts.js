jQuery(document).ready(function(){
	var navPos = $('nav').position().top;
    var lastPos = 0;
	$(window).on('scroll', function () {
		var pos = $(window).scrollTop();
		if (pos >= navPos + $('nav').height() && lastPos < pos) {
			$('nav').addClass('fixed');
		}
		if (pos > navPos && lastPos > pos) {
			$('nav').removeClass('fixed');
		}
		lastPos = pos;
	});
});