revFev = document.getElementById('revFev')
quackSound = new Audio('quack.mp3')
let beingDragged = false
let e = 0.7
let g = 0.6
let fr = 0.04
let ρ = 0.0002
let x = (window.innerWidth - revFev.offsetWidth) / 2
let y = (window.innerHeight - revFev.offsetHeight) / 2
let ddx = 0
let ddy = 0
let dx = 0
let dy = 0

revFev.style.left = x + 'px'
revFev.style.top = y + 'px'

function moveFev() {
    console.log(Math.round(dx), Math.round(dy));
    if (!beingDragged) {
      dy += g;
      dy += (dy !== 0 ? (dy > 0 ? -ρ * dy ** 2 : ρ * dy ** 2) : 0);
      dx += (dx !== 0 ? (dx > 0 ? -ρ * dx ** 2 : ρ * dx ** 2) : 0);
    }
    x += dx;
    y += dy;
    if (x < 0) {
      x = 0;
      dx = -dx * e;
    } else if (x + revFev.offsetWidth > window.innerWidth) {
      x = window.innerWidth - revFev.offsetWidth;
      dx = -dx * e;
    }
    if (y + revFev.offsetHeight > window.innerHeight) {
      y = window.innerHeight - revFev.offsetHeight;
      dy = -dy * e;
      dx = dx > 0 ? Math.max(0, dx - fr) : dx < 0 ? Math.min(0, dx + fr) : 0;
    }
    revFev.style.left = x + 'px';
    revFev.style.top = y + 'px';
    requestAnimationFrame(moveFev);
  }

revFev.addEventListener('dragstart', function(e) {
    e.preventDefault()
})

revFev.addEventListener('mousedown', function(e) {
    e.preventDefault()
    beingDragged = true
    dx = 0
    dy = 0
})

document.addEventListener('mousemove', function(e) {
    if (beingDragged) {
        let x1 = e.clientX - revFev.offsetWidth / 2
        let y1 = e.clientY - revFev.offsetHeight / 2
        ddx = x1 - x
        ddy = y1 - y
        x = x1
        y = y1
    }
})

document.addEventListener('mouseup', function() {
    if (beingDragged) {
        beingDragged = false
        dx = ddx
        dy = ddy
    }
})

revFev.addEventListener('touchstart', function(e) {
    e.preventDefault()
    beingDragged = true
    dx,dy = 0
})

revFev.addEventListener('touchmove', function(e) {
    e.preventDefault()
    if (beingDragged) {
        let touch = e.touches[0]
        let x1 = touch.clientX - revFev.offsetWidth / 2
        let y1 = touch.clientY - revFev.offsetHeight / 2
        ddx = x1 - x
        ddy = y1 - y
        x = x1
        y = y1
    }
})

revFev.addEventListener('touchend', function() {
    beingDragged = false
    dx = ddx
    dy = ddy
})

moveFev()