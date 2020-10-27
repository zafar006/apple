const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
// SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');
// SCROLL

const controller = new ScrollMagic.Controller();

// Scenes
let scene = new ScrollMagic.Scene({
    duration: 17000,
    triggerElement: intro,
    triggerHook: 0
})
.setPin(intro)
.addTo(controller);

// Text animation 
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 } );

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

// VIDEO ANIMATION

let accelAmount = 0.1;
let Scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelAmount;

    video.currentTime = scrollpos;
}, 33.3);