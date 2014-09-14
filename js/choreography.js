$(document).ready ( function(){
	setupOverlays();
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