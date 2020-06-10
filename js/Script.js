let scroll = document.querySelector('.header-nav');
// window.onscroll = function () {
//   scroll.classList.add('scroll');
// }

let video = document.querySelector('.presentation-video'),
  button = document.querySelector('.presentation-content-btn'),
  content = document.querySelector('.presentation-content');

button.addEventListener("click", function () {
  video.play()
  video.setAttribute("controls", "controls");
}, false);

button.onclick = function () {
  content.classList.add('hiden');
}