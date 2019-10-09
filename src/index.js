import "bootstrap";

import { init_menu } from "./js/menu";
import { init_scroll } from "./js/scroll";

function init() {
  init_menu();
}
init();

window.addEventListener("load", function() {
  init_scroll();
});
