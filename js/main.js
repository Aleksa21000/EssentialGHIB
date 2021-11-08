// Handle loader
const loader = document.querySelector('.loader-wrapper');
const body = document.querySelector('body');

window.addEventListener('load', function () {
  setInterval(function timer() {
    loader.classList.add('opacity');
    setTimeout(function () {
      loader.classList.add('disabled');
    }, 1000);
    body.classList.remove('no-overflow');
  }, 1300);
});

// Navbar effect
const navbar = document.querySelector('#main-nav');
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    if (!scrolled) {
      navbar.style.transform = 'translateY(-400px)';
    }
    setTimeout(function () {
      navbar.style.transform = 'translateY(0)';
      scrolled = true;
    }, 200);
  } else {
    scrolled = false;
  }
}

// Section observer
const sections = document.querySelectorAll('section');
const items = document.querySelectorAll('.menu-item');

function getCurrent() {
  let current = '';

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 200;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  items.forEach(function (item) {
    item.classList.remove('current-page');
    if (item.classList.contains(current)) {
      item.classList.add('current-page');
    }
  });
}

window.addEventListener('scroll', function currentState() {
  getCurrent();
});

// Hamburger menu
const navLinks = document.querySelector('.nav_links');
const navLinksContainer = document.querySelector('.nav_links-container');
const lines = navLinks.querySelector('.lines');

function getWidth() {
  const width = window.innerWidth;

  if (width < 1080) {
    navLinks.classList.add('mobile');
    navLinksContainer.style.opacity = "0";
  } else {
    navLinks.classList.remove('mobile');
    navLinksContainer.style.opacity = "1";
  }
}

lines.addEventListener('click', function () {
  navLinks.classList.toggle('active');
  navLinksContainer.style.opacity = "1";
  body.style.overflow = "hidden";

  if (!navLinks.classList.contains('active')) {
    body.style.overflowY = "scroll";
  }
});

items.forEach(function (item) {
  item.addEventListener('click', function () {
    if (navLinks.classList.contains('mobile')) {
      navLinks.classList.remove('active');
      navLinksContainer.style.opacity = "0";
      body.style.overflowY = "scroll";
    } else {
      navLinksContainer.style.opacity = "1";
    }

  });
});

window.addEventListener('resize', getWidth);
window.addEventListener('load', getWidth);