// $(".spinner").show();
$("#bottom").hide();

$(window).on("load", function(){
	$(".spinner").hide();
	$("#bottom").show();
	console.log("on load is ready");
});

var feed = new Instafeed({
	clientId: '6a4d78c4b5f84abf877c48c545ee268b',
	accessToken: '3685282344.6a4d78c.22ef44601675418c97780808576214fd',
	get: 'user',
	userId: '3685282344',
	// template: '<div class="item"><a href="{{link}}"><img src="{{image}}" /></a></div>'
	template: '<a href="{{image}}"><img src="{{image}}" /></a>'
	// resolution: 'standard_resolution'
});
feed.run();

$("#mygallery").justifiedGallery({
	rowHeight: 500,
	margins: 5,
	rel: 'gallery2'
}).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});



// $("#instafeed").justifiedGallery({
// 	rowHeight: 500,
// 	margins: 5,
// 	rel: 'gallery2'
// }).on('click', '[data-toggle="lightbox"]', function(event) {
//     event.preventDefault();
//     $(this).ekkoLightbox();
// });

// $("#instafeed").justifiedGallery();





// scroll top button
var btn = $('#return_top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, 300);
  console.log('button click works');
});
