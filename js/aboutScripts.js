// new Pjax({
//   selectors: [".container"]
// });

$("#pjax-container").css("opacity","1");

$(document).pjax('a', '#pjax-container');
