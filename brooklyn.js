$(document).ready(function () {
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      document.getElementById("main-nav").className = "sticky";
    } else {
      document.getElementById("main-nav").className = "";
    }
  }
  $(".mobile-nav-icon").click(function () {
    $("#nav-items").toggle();
    document.getElementById("nav-items").className = "mobile-nav-items";
  });
});
