$(document).ready ( function(){
	setupDropdowns();
	setupFancybox();
	setupReadMoreButtons();
});

function setupDropdowns() {
	$('#navigation li ul').hide().removeClass('fallback');
	$('#navigation li').hover(
		function () {
			$('ul', this).stop().slideDown(100);
		},
		function() {
			$('ul', this).stop().slideUp(100);
		}
	);
}

function setupFancybox() {
	var fancyboxes = $(".fancybox");
	if (fancyboxes.length) {
		fancyboxes.fancybox();
	}
}

 function setupReadMoreButtons(){
    var readMoreButtons = $(".readMoreButtons");
    readMoreButtons.on("click", readMore);
}

function readMore(){
    var readMoreText = $(this).siblings(".readMoreText");
    $(this).fadeOut(function(){
		readMoreText.fadeIn();
    });
}