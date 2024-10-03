$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 20) {
    $(".logo_scroll").addClass("active");
    $(".logo").removeClass("active");
    $(".menu").addClass("transparent");
    $(".header-link").addClass("text-link");
  } else {
    $(".logo").addClass("active");
    $(".logo_scroll").removeClass("active");
    $(".menu").removeClass("transparent");
    $(".header-link").removeClass("text-link");
  }
});
