// menu toggler
$('.menu-button').click(function (argument) {
  $('.menu').toggleClass('active');
});

// menu highlighting
var pathname=window.location.pathname;
// hacky
if (pathname == "/work-single.php") {
  pathname = "/work.php"
}
$('a[href$="'+pathname+'"]').addClass("active");