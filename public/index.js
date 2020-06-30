$(function () {
  $(window).scroll(function () {
    if ($("html").scrollTop() > 100) {
      $(".logo").addClass("orange");
      $(".navbar")
        .addClass("navbar__backgroundWhite")
        .removeClass("navbar-dark")
        .addClass("navbar-light");
    } else {
      $(".logo").removeClass("orange");
      $(".navbar")
        .removeClass("navbar__backgroundWhite")
        .addClass("navbar-dark")
        .removeClass("navbar-light");
    }
  });
});
