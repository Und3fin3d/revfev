revFev = document.getElementById('revFev')
quackSound = new Audio('quack.mp3')
let beingDragged = false
let e = 1
let x = (window.innerWidth - revFev.offsetWidth) / 2
let y = (window.innerHeight - revFev.offsetHeight) / 2
let momx = 0
let momy = 0
let dx = 0
let dy = 0

// Set initial position
revFev.style.left = x+'px'
revFev.style.top = y+'px'

function border(x,y){
    if (x + revFev.offsetWidth > window.innerWidth || x < 0) {
        console.log('hitx')
        return 0
    }
    if (y + revFev.offsetHeight > window.innerHeight || y < 0) {
        console.log('hity')
        return 1
    }
    return 2

}

function moveFev() {
    x += dx
    y += dy

    // Bounce off walls
    if (border(x,y)==0) {
        dx = -dx*e
    }
    if (border(x,y)==1) {
        dy = -dy*e
    }

    // Update position
    revFev.style.left = x+'px'
    revFev.style.top = y+'px'

    requestAnimationFrame(moveFev)
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
        x1 = e.clientX - revFev.offsetWidth / 2
        y1 = e.clientY - revFev.offsetHeight / 2
        if (border(x1,y1)==2){
            momx = x1 - x
            momy = y1 - y
            x = x1
            y = y1
        }
    }
})

document.addEventListener('mouseup', function() {
    if (beingDragged) {
        beingDragged = false
        dx = momx
        dy = momy
    }
})
revFev.addEventListener('touchstart', function(e) {
    e.preventDefault()
    beingDragged = true
    dx = 0
    dy = 0
    touch = e.touches[0]
})

revFev.addEventListener('touchmove', function(e) {
    e.preventDefault()
    if (beingDragged) {
        touch = e.touches[0]
        x1 = touch.clientX - revFev.offsetWidth / 2
        y1 = touch.clientY - revFev.offsetHeight / 2
        if (border(x1,y1)==2){
            momx = x1 - x
            momy = y1 - y
            x = x1
            y = y1
        }
    }
})

revFev.addEventListener('touchend', function(e) {
    beingDragged = false
    dx = momx
    dy = momy
})
moveFev()

