/*
const carouselSlide = document.querySelector('.carousel_slide');
const carouselImages = document.querySelectorAll('.carousel_slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=> {
    if (carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
    }
})
*/


const innerCursor = document.querySelector('.cursor_dot1')
const outerCursor = document.querySelector('.cursor_dot2')

document.addEventListener('mousemove',moveCursor)

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    //innerCursor.style.left = `${x}px`;
    //innerCursor.style.top = `${y}px`;
    //innerCursor.style.transformOrigin=`${x} ${y}`
    innerCursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    //innerCursor.style.transform = `translateY(${y})px`;
    //innerCursor.style.transform = `translateX(${x})px`;

    //outerCursor.style.left = `${x}px`;
    //outerCursor.style.top = `${y}px`;
    //outerCursor.style.transformOrigin=`${x} ${y}`
    outerCursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    //outerCursor.style.transform = `translateY(${y})px`;
    //outerCursor.style.transform = `translateX(${x})px`;
}

$('.splide__list').hover(function(){
    $('.cursor_dot1').toggleClass("is__larger1");
    $('.cursor_dot2').toggleClass("is__larger");
});


