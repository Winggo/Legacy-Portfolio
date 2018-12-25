$("#main").hide();
$(".spinner").show();

$(window).on("load", function(){
	$(".spinner").hide();
	$("#main").show();
	$("#main").css("opacity","0.9");
});
