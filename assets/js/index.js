document.addEventListener("DOMContentLoaded", function (event) {
  var toogle_button = document.querySelector("body > div.container.header-contianer > div > div.col-xs-12.col-sm-6.col-md-6.col-lg-4.header-right > ul > li:nth-child(5) > a");

  toogle_button.removeAttribute("href");

  toogle_button.onclick = function () {
    if (document.body.classList.value == "dark") {
      document.body.classList.remove("dark");
    }
    else{
      document.body.classList.add("dark");
    }
  }
});
