$(document).ready(function () {
  // Controll the navbar
  $("#ham-container").click(function (e) {
    e.preventDefault();
    $("#link-container").toggleClass("slide-out");
    $("#link-container").toggleClass("slide-in");
    $(".fa-layer-group").toggleClass("text-change");
    $(".navbar-text").toggleClass("text-change");
    $(".box-1").toggleClass("bar-change");
    $(".box-2").toggleClass("bar-change");
    $(".box-3").toggleClass("bar-change");
  });
  // Hover over rect, nodeJS, python, and JS logos
  $(".fa-react").hover(function () {
    // over
    $(".react-text").fadeToggle();
  });
  $(".fa-node").hover(function () {
    // over
    $(".node-text").fadeToggle();
  });
  $(".fa-python").hover(function () {
    // over
    $(".python-text").fadeToggle();
  });
  $(".fa-js-square").hover(function () {
    // over
    $(".js-text").fadeToggle();
  });
});
