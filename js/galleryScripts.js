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
