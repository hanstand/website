$(document).ready ( function(){
	setupOverlays();
});

function setupOverlays() {
	var imgTargets=$(".imgDescriptionWrapper");
	$(imgTargets).each(function() {
		var $overlay = $(this).find(".imgHoverWrapper");
		$(this).mouseenter(function(){
			$overlay.fadeIn(500);
		});
		$(this).mouseleave(function(){
			$overlay.fadeOut(500);
		});
	});
}