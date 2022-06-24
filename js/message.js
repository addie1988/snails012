$(function () {
  $(".rslides").responsiveSlides();
});

$(".rslides").responsiveSlides({
  // Boolean: Animate automatically, true or false
  auto: true,

  // Integer: Speed of the transition, in milliseconds
  speed: 4000,

  // Integer: Time between slide transitions, in milliseconds
  timeout: 4000,

  // Boolean: Show pager, true or false
  pager: false,

  // Boolean: Show navigation, true or false
  nav: false,

  // Boolean: Randomize the order of the slides, true or false
  random: false,

  // Boolean: Pause on hover, true or false
  pause: false,

  // Boolean: Pause when hovering controls, true or false
  pauseControls: false,

  // String: Text for the "previous" button
  prevText: "Previous",

  // String: Text for the "next" button
  nextText: "Next",

  // Integer: Max-width of the slideshow, in pixels
  maxwidth: "",

  // Selector: Where auto generated controls should be appended to, default is after the <ul>
  navContainer: "",

  // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",
  // String: change the default namespace used
  namespace: "rslides",

  // Function: Before callback
  before: function () {},

  // Function: After callback
  after: function () {},
});



// Slideshow 2
$("#slider2").responsiveSlides({
  auto: false,
  pager: true,
  speed: 2000,
  maxwidth: 540
});