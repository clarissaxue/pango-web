const IMAGES = [
    'home',
    'about',
    'fineapple',
    'mangno',
    'loading'
]

let changeImageButtonEl;
//let centerImageEl;
let changeToCamera
let activeImageIndex = 0;

function changeImage(e) {
    const imageName = IMAGES[++activeImageIndex % IMAGES.length];

    centerImageEl.src = `./images/${imageName}.jpg`
}

function init() {
//    changeImageButtonEl = document.querySelector('#change-image-button');

   centerImageEl = document.querySelector('#center-image');

   centerImageEl.addEventListener('click', changeImage)
}



window.addEventListener('load', init)