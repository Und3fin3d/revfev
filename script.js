const container = document.querySelector('.container');
const tog = document.getElementById('toggle');

// If on mobile based on aspect ratio, set initial state to hidden with hamburger.
const mobileMediaQuery = window.matchMedia('(max-aspect-ratio: 4/6)');
if (mobileMediaQuery.matches) {
  tog.classList.remove('open');
  tog.classList.add('hide');
  container.style.display = "none";
}

tog.addEventListener('click', () => {
  if (tog.classList.contains('open')) {
    // Currently showing cross, so hide the menu and switch to hamburger.
    tog.classList.remove('open');
    tog.classList.add('hide');
    container.style.display = "none";
  } else {
    // Currently showing hamburger, so show the menu and switch to cross.
    tog.classList.remove('hide');
    tog.classList.add('open');
    container.style.display = "flex";
  }
});