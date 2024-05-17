const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = Array.from(slider.querySelectorAll('.slider-item'));
const slideCount = slides.length;
const slideInterval = setInterval(test,4000);
let slideIndex = 0;
const offsetWidth1 = document.querySelector('.slider-item').clientWidth;



function test(){
    slideIndex = (slideIndex + 1) % slideCount;
    slide();
}

prevButton.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;  
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {          
  
  const slideOffset = -slideIndex * (offsetWidth1+17);
  slider.style.transform = `translateX(${slideOffset}px)`;
  document.querySelector('.count').innerHTML = `${slideIndex}`;
}

window.addEventListener('load', () => {
    document.querySelector('.vsego').innerHTML = `${slideCount}`;
  slide();  
});

const slider1 = document.querySelector('.etapy-slider');
const prevButton1 = document.querySelector('.etapy-prev');
const nextButton1 = document.querySelector('.etapy-next');
const slides1 = Array.from(slider1.querySelectorAll('.etapy-slider-item'));
const slideCount1 = slides1.length;
let slideIndex1 = 0;

const offsetWidth = document.querySelector('.etapy-slider-item').clientWidth;

function test1(){
    slideIndex1 = (slideIndex1 + 1) % slideCount1;
    slide1();
}

prevButton1.addEventListener('click', () => {
    slideIndex1 = (slideIndex1 - 1 + slideCount1) % slideCount1;  
  slide1();
});

nextButton1.addEventListener('click', () => {
  slideIndex1 = (slideIndex1 + 1) % slideCount1;
  slide1();
});

const slide1 = () => {   
    const slideOffset1 = -slideIndex1 * (offsetWidth+15)
    slider1.style.transform = `translateX(${slideOffset1}px)`;         
     }
    
