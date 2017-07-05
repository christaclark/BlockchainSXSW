(function() {

  "use strict";

  // onload
  (function () {
    window.onload = function () {
      document.body.className += " loaded";
    };
  })();

  // burger menu
  (function () {
    document.getElementsByClassName('js-burger')[0].onclick = function () {
      document.getElementsByClassName('js-nav')[0].classList.toggle('visible');
    };
  })();

  // wow
  (function () {
    new WOW().init();
  })();


})();