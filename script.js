const container = document.querySelector('.container')
const hide = document.getElementById('hide')
const show = document.getElementById('show')

// Clicking the hide icon hides the container and reveals the show icon
hide.addEventListener('click', () => {
    container.style.display = "none"
    show.style.display = "block"
})

// Clicking the show icon shows the container and hides itself
show.addEventListener('click', () => {
    container.style.display = "flex"  // using flex per the container's original display
    show.style.display = "none"
})