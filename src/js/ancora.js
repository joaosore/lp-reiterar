export function init_ancora() {
  init_start_url_scroll();
  init_scroll_section();
  var $doc = $("html, body");
  $("a").click(function() {
    if ($.attr(this, "href").charAt(0) === "#") {
      var el = $("body").find($.attr(this, "href"));
      if ($(el).length > 0) {
        $(".menu-mobile").removeClass("active");
        $(".collapse").removeClass("active");
        window.location.hash = $.attr(this, "href");
        $doc.animate(
          {
            scrollTop: $($.attr(this, "href")).offset().top
          },
          500
        );
        return false;
      }
    }
  });
}

function init_start_url_scroll() {
  var hash = window.location.hash;
  var el = $("body").find(hash);
  var $doc = $("html, body");

  if (el.length > 0) {
    $doc.animate(
      {
        scrollTop: $(el).offset().top
      },
      500
    );
  }
}

function init_scroll_section() {
  var width = $(window).width();
  if (width <= 991) {
    var i = 50;
  } else {
    var i = 95;
  }

  $(window).resize(function() {
    var width = $(window).width();
    if (width <= 991) {
      var i = 50;
    } else {
      var i = 95;
    }
  });

  $(window).on("scroll", function() {
    var inicio_top = $($("#inicio")).offset().top - i;
    var inicio_bottom = inicio_top + $("#inicio").height();

    var sistema_seguro_top = $($("#sistema-seguro")).offset().top - i;
    var sistema_seguro_bottom =
      sistema_seguro_top + $("#sistema-seguro").height();

    var somos_a_solucao_top = $($("#somos-a-solucao")).offset().top - i;
    var somos_a_solucao_bottom =
      somos_a_solucao_top + $("#somos-a-solucao").height();

    var como_a_reiterar_trabalha_top =
      $($("#como-a-reiterar-trabalha")).offset().top - i;
    var como_a_reiterar_trabalha_bottom =
      como_a_reiterar_trabalha_top + $("#como-a-reiterar-trabalha").height();

    var scrollPosition = $(window).scrollTop();

    if (scrollPosition >= inicio_top && scrollPosition <= inicio_bottom) {
      window.location.hash = "#inicio";
      $(".nav-item").removeClass("active");
      $('a[href="#inicio"]')
        .parent()
        .addClass("active");
    } else if (
      scrollPosition >= sistema_seguro_top &&
      scrollPosition <= sistema_seguro_bottom
    ) {
      window.location.hash = "#sistema-seguro";
      $(".nav-item").removeClass("active");
      $('a[href="#sistema-seguro"]')
        .parent()
        .addClass("active");
    } else if (
      scrollPosition >= somos_a_solucao_top &&
      scrollPosition <= somos_a_solucao_bottom
    ) {
      window.location.hash = "#somos-a-solucao";
      $(".nav-item").removeClass("active");
      $('a[href="#somos-a-solucao"]')
        .parent()
        .addClass("active");
    } else if (
      scrollPosition >= como_a_reiterar_trabalha_top &&
      scrollPosition <= como_a_reiterar_trabalha_bottom
    ) {
      window.location.hash = "#como-a-reiterar-trabalha";
      $(".nav-item").removeClass("active");
      $('a[href="#como-a-reiterar-trabalha"]')
        .parent()
        .addClass("active");
    } else {
      $(".nav-item").removeClass("active");
    }
  });
}
