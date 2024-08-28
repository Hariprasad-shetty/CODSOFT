const circle = document.querySelector('.header .nav-bar .nav-list .circle');
const mobile = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector(
  '.header.container');
circle.addEventListener('click', () => {
  circle.classList.toggle('active');
  mobile.classList.toggle('active');
});
document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";                      
  }
});