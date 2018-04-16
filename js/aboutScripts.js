// new Pjax({
//   selectors: [".container"]
// });

$("#pjax-container").css("opacity","1");

$(document).pjax('[data-pjax] a, a[data-pjax]', '#pjax-container');