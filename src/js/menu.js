export function init_menu() {
  $(document).on("click", ".menu-mobile", function() {
    $(this).toggleClass("active", "active");
    $(".display-menu").toggleClass("active", "active");
  });
}

export function init_logo(scroll = false) {
  var mySVG = document.getElementById("logo-svg");
  var svgDoc = mySVG.contentDocument;

  if (scroll) {
    $(svgDoc)
      .find("#text-1")
      .attr("fill", "#000");
    $(svgDoc)
      .find("#text-2")
      .attr("fill", "#000");
  } else {
    $(svgDoc)
      .find("#text-1")
      .attr("fill", "#FFF");
    $(svgDoc)
      .find("#text-2")
      .attr("fill", "#FFF");
  }
}
