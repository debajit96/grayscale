$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $(".navbar").addClass("change");
      $(".navbar-brand").addClass("change-2");
      $(".nav-link").addClass("change-3");
    } else {
      $(".navbar").removeClass("change");
      $(".navbar-brand").removeClass("change-2");
      $(".nav-link").removeClass("change-3");
    }
  });
});
