$(document).ready ( function(){
	loadPage();
});

function loadPage() {
	$(".loadingImg").fadeOut(2000, function() {
		$(".otherWrapper").fadeIn(2000);
	});
}
