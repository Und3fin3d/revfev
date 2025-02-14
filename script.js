const container = document.querySelector('.container');
const tog = document.getElementById('toggle');

const mobileMediaQuery = window.matchMedia('(max-aspect-ratio: 4/6)');
if (mobileMediaQuery.matches) {
  tog.classList.remove('open');
  tog.classList.add('hide');
  container.style.display = "none";
}

tog.addEventListener('click', () => {
  if (tog.classList.contains('open')) {
    tog.classList.remove('open');
    tog.classList.add('hide');
    container.style.display = "none";
  } else {
    tog.classList.remove('hide');
    tog.classList.add('open');
    container.style.display = "flex";
  }
});

const gallery = [
  'gallery/night.jpeg',
  'gallery/acts.jpeg',
  'gallery/arlott.jpeg',
  'gallery/ducks.jpeg',
  'gallery/rain.jpeg',
  'gallery/bolder.jpeg',
  'gallery/energy.jpeg',
  'gallery/scoops.jpeg',
  'gallery/chess2.jpeg',
  'gallery/harsh.jpeg',
  'gallery/wash.jpeg',
  'gallery/dry.jpeg',
  'gallery/climb.jpeg',
  'gallery/harsh2.jpeg',
  'gallery/word.jpeg',
  'gallery/club.jpeg',
  'gallery/kart2.jpeg',
  'gallery/xmas.jpeg',
  'gallery/connect.jpeg',
  'gallery/kwackers.jpeg',
  'gallery/doppelganger.jpeg',
  'gallery/lidl.jpeg'
];
let i = 0;

const curr = document.getElementById('g-img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

function updateGallery() {
  curr.src = gallery[i];
}

prev.addEventListener('click', () => {
  i = (i - 1 + gallery.length) % gallery.length;
  updateGallery();
});

next.addEventListener('click', () => {
  i = (i + 1) % gallery.length;
  updateGallery();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    i = (i - 1 + gallery.length) % gallery.length;
    updateGallery();
  } else if (e.key === 'ArrowRight') {
    i = (i + 1) % gallery.length;
    updateGallery();
  }
});