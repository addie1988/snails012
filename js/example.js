$(document).ready(function ($) {
  $(".carousel-normal").carousel({
    autoplay: false,
    infinite: true,
    circular: false,
    delay: 4000,
    speed: 1000,
    direction: "right", //top, right, bottom, left
    easing: "linear",

    pager: true, // Boolean: Show pager, true or false

    nav: true, // Boolean: Show navigation, true or false,
    navItems: 1,

    prevText: "Previous", // String: Text for the "previous" button
    nextText: "Next", // String: Text for the "next" button

    render: function (item) {
      return '<li><img src="' + item.img + '" alt="" /></li>';
    },
    load: null,
    /* function(callback){},*/

    mousewheel: true,
    touch: true,
    keyboard: true,
    responsive: true,
  });
});
