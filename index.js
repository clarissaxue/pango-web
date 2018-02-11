const IMAGES = [
    'home',
    'about',
    'fineapple',
    'mangno',
    'loading'
]

let changeImageButtonEl;
//let centerImageEl;
let changeToCameraButtonEl;
let changeToAboutButtonEl;
let checkMatchButtonEl;
let activeImageIndex = 0;

function changeImage(e) {
    const imageName = IMAGES[++activeImageIndex % IMAGES.length];

    centerImageEl.src = `./images/${imageName}.jpg`
}

function init() {
//    changeImageButtonEl = document.querySelector('#change-image-button');

 //  centerImageEl = document.querySelector('#center-image');
   changeToAboutButtonEl = document.querySelector('#logo-area');
   changeToCameraButtonEl = document.querySelector('#startbutton');

   changeToCameraButtonEl.addEventListener('click', changeImage);
   //changeToCameraButtonEl.addEventListener('click', cameraStartup)
   
}



window.addEventListener('load', init)