const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;


document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 6000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length -1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex)
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex)

}

gsap.to(".saleheading", {
    text: "15% discount when ordering from $70!",
    duration: 5,
    repeat: -1,
    repeatDelay: .5,
})

gsap.from(".aboutshef", {
    scrollTrigger: {
        trigger: ".animation",
        start: "top top",
        scrub: true,
    }, 
    xPercent: -100,
    opacity: 0,
})

gsap.from(".horizontal1", {
    scrollTrigger: {
        trigger: "#discount",
        start: "top top",
        scrub: true,
    }, 
    xPercent: -60,
    opacity: 0,
})

gsap.from(".horizontal2", {
    scrollTrigger: {
        trigger: "#discount",
        start: "top top",
        scrub: true,
    }, 
    xPercent: 60,
    opacity: 0,
})


gsap.from(".sushi1", {y: "-35vh",repeat: -1, duration: 7})

gsap.to(".sushi2", {y: "-35vh",repeat: -1, duration: 7})

gsap.from(".sushi3", {y: "-35vh",repeat: -1, duration: 7})




function countDown() {
    const saleDate = new Date ("December 25, 2025 00:00");
    const now = new Date();
    const diff = saleDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 1000 * 60;
    
    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;
    
    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;
    
    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;
    
    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;
    
    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        discountEnd();
    }

}
let timerID = setInterval(countDown, 1000);


function discountEnd() {
    gsap.to(".saleheading", {
        text: "Oh,it seems the discount has passed...",
        duration: 5,
        repeat: -1,
        repeatDelay: .5,
    })
}


countDown();




