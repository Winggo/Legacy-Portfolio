$("#main").hide();
$(".spinner").show();

$(window).on("load", function(){
	$(".spinner").hide();
	$("#main").show();
	$("#main").css("opacity","1");
	console.log("on load is ready");
});

$(document).pjax('[data-pjax] a, a[data-pjax]', '#pjax-container');
