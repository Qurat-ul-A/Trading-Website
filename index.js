//responsive navbar
const hamburger =document.querySelector('.hamburger')
const navMenu =document.querySelector('.nav-menu')

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})


//  testimonial slider
document.addEventListener('DOMContentLoaded', function(){
    const prevBtn = document.getElementById('prevBtn')
    const nextBtn = document.getElementById('nextBtn')
    const sliderWrapper = document.querySelector('.slider-wrapper')
    const sliderItems = document.querySelectorAll('.item')

    let currentIndex =0;
    const totalItems = sliderItems.length;

    function getItemsToShow(){
        const width =window.innerWidth;
        if(width <= 576){
            return 1;
        } else if(width <= 768){
            return 2;
        } else{
            return 3;
        }
    }


    function updateSliderPosition(){
        const itemsToShow = getItemsToShow();
        const percentage = -(100/itemsToShow) * currentIndex;
        sliderWrapper.style.transform =`translateX(${percentage}%)`;
    }

    function updateButtons(){
        const itemsToShow = getItemsToShow();
        const maxIndex =totalItems -itemsToShow;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === maxIndex;
    }

    prevBtn.addEventListener('click',()=>{
        if(currentIndex >0){
            currentIndex --;
            updateSliderPosition();
        }
        updateButtons();
    })

    nextBtn.addEventListener('click',()=>{
        const itemsToShow = getItemsToShow();
        const maxIndex = totalItems -itemsToShow;
        if(currentIndex < maxIndex){
            currentIndex++;
            updateSliderPosition();
        }
        updateButtons()
    });

    window.addEventListener('resize',()=>{
      updateSliderPosition();
    updateButtons();
    })
    updateSliderPosition();
    updateButtons();
})