$(".spinner").show();
$("#bottom").hide();

$(window).on("load", function(){
	$(".spinner").hide();
	$("#bottom").show();
	console.log("on load is ready");
});


$("#mygallery").justifiedGallery({
	rowHeight: 500,
	margins: 5,
	rel: 'gallery2'
}).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// new Pjax({
//   selectors: [".container"]
// });
$(document).pjax('a', '#pjax-container');
