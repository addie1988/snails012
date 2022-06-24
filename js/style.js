//header
$(window).scroll(function () {
  var currentscrollTop = $(window).scrollTop();
  if (currentscrollTop >= 50) {
    if (!$(".header").hasClass("dark")) {
      //被分配給定的class屬性
      $(".header").addClass("dark"); //添加一個class屬性
    }
  } else {
    if (!$(".toggle-nav").hasClass("active")) {
      $(".header").removeClass("dark");
    }
  }
});

//---------------------------------------------------------------------------

// menu
$(document).ready(function () {
  $(".menuClosure").click(function () {
    $("#menuUl").slideToggle(500);
    $("#menuUl").removeClass("#menuUl");
  });
});

//---------------------------------------------------------------------------

// AboutImgTitle > scroll
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".AboutImgTitle").addClass("AboutImgTitleMover");
    }
    if ($(this).scrollTop() > 900) {
      $(".AboutImgTitle").removeClass("AboutImgTitleMover");
    }
  });
});

//---------------------------------------------------------------------------















//---------------------------------------------------------------------------

// scrollTop 置頂
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".top").fadeIn();
    } else {
      $(".top").fadeOut();
    }
  });
});

$('.top').click(function () {
    $('html, body').animate({scrollTop: 0}, '800');
    return false
})
