import { init_logo } from "./menu";

export function init_scroll() {
  var width = $(window).width();
  var scroll_position = $(window).scrollTop();

  scroll();
  if (width <= 991) {
    init_logo(true);
  } else {
    if (scroll_position > 10) {
      $("header").addClass("scroll");
      init_logo(true);
    } else {
      init_logo(false);
    }
  }
}

$(window).resize(function() {
  init_scroll(false);
});

function scroll() {
  var scroll_status = true;
  $(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    var width = $(window).width();

    if (width > 991) {
      if (scroll > 10) {
        if (scroll_status) {
          $("header").addClass("scroll");
          init_logo(scroll_status);
        }
        scroll_status = false;
      } else {
        if (!scroll_status) {
          $("header").removeClass("scroll");
          init_logo(scroll_status);
          scroll_status = true;
        }
      }
    }
  });
}
