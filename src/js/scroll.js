import { init_logo } from "./menu";

export function init_scroll() {
  let width = $(window).width();

  scroll();
  if (width <= 991) {
    init_logo(true);
  } else {
    init_logo(false);
  }
}

$(window).resize(function() {
  init_scroll();
});

function scroll() {
  let scroll_status = true;
  $(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    let width = $(window).width();

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
