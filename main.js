// Navbar changes once page scrolled to title
window.addEventListener('scroll', function (e) {
  var navbar = document.getElementById('navbar');
  if (document.documentElement.scrollTop >= window.innerHeight/5.25) navbar.classList.add('navbar-colored');
  else navbar.classList.remove('navbar-colored');
});

// Toggles image slider
function toggleImageSlider(num) {
  var body = document.querySelector('body');
  var imageSlider = document.getElementById('background');
  var image = document.getElementById('current-image');
  if (imageSlider.style.display == 'block') {
    imageSlider.style.display = 'none';
    body.classList.remove('image-slider-on');
  } else {
    body.classList.add('image-slider-on')
    imageSlider.style.display = 'block';
    image.src = `https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/fullsize/${num}.jpg`;
  }
}

// Cycles through images in a the slider
function next(dir) {
  var image = document.getElementById('current-image');
  var currentSource = Number(image.src[82]);
  var newSource;
  if (dir == 'left') newSource = currentSource - 1;
  else newSource = currentSource + 1;
  if (newSource == 0) newSource = 6;
  if (newSource == 7) newSource = 1;
  image.src = `https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/fullsize/${newSource}.jpg`;
}

// Smoothly scrolls to different sections of the page
// - - - - - Is not accurate - - - - - //
function scrollTo(section) {
  document.getElementById(section).scrollIntoView({behavior: 'smooth'});
}
