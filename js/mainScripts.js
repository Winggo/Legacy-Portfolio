// new Pjax({
//   selectors: [".container"]
// });

$("#main").hide();
$(".spinner").show();

$(window).on("load", function(){
	$(".spinner").hide();
	$("#main").show();
	$("#main").css("opacity","1");
	console.log("on load is ready");
});

$(document).pjax('a', '#pjax-container');
