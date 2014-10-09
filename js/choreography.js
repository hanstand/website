$(document).ready ( function(){
	setupOverlays();
	loadPage();
});

function setupOverlays() {
	var imgTargets=$(".imgLinksWrapper a");
	$(imgTargets).each(function() {
		var $overlay = $(this).find(".imgHoverWrapper");
		$(this).mouseenter(function(){
			$overlay.stop().fadeIn(500);
		});
		$(this).mouseleave(function(){
			$overlay.stop().fadeOut(500);
		});
	});
}

function loadPage() {
	$(".loadingImg").fadeOut(2000, function() {
		$("#chorImgNavWrapper").fadeIn(1000);
	});
}
