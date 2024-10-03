
let indexHeader = document.querySelector('.header')

const toggleIndexHeaderBackground = () => {
    let scrollY = window.scrollY
    indexHeader.style.background = scrollY > 704 ? 'white' : 'inherit'
}


/** ATTACH EVENT LISTNER */
window.addEventListener('scroll', toggleIndexHeaderBackground)

