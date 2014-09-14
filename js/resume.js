$(document).ready ( function(){
	setupCaption();
});

function setupCaption() {
	var imgTargets=$(".imgWrapper");
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