import "bootstrap";
import { init_menu } from "./js/menu";
import { init_scroll } from "./js/scroll";
import { init_ancora } from "./js/ancora";
import { init_loader } from "./js/loader";

function init() {
  init_menu();
  init_ancora();
  init_loader();
}
init();

window.addEventListener("load", function() {
  init_scroll(false);
});
