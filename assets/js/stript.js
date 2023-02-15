window.onscroll = function() {myFunction()};
AOS.init();


var navbar = document.querySelector('.navbar')
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-top")
  } else {
    navbar.classList.remove("fixed-top");
  }
}
