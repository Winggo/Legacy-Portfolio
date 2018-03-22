// new Pjax({
//   selectors: [".container"]
// });

$("#main").hide();
$(".spinner").show();

$(window).on("load", function(){
	$(".spinner").hide();
	$("#main").show();
	console.log("on load is ready");
});

$(document).pjax('a', '#pjax-container');
