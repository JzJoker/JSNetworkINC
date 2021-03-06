const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to one another
if (screen.width > 450) {
    const setSlidePosition = (slide, index) => {
        slide.style.left = (slideWidth + slideWidth * 0.146) * index + 'px'  ;
    }
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left +')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    }
    slides.forEach(setSlidePosition);
    
    // when I click right, move slides to the right
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide')
        const nextSlide = currentSlide.nextElementSibling;
    
        moveToSlide(track, currentSlide, nextSlide);
    })
    
    // when I click left, move slides to the left
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide')
        const prevSlide = currentSlide.previousElementSibling;
    
        moveToSlide(track, currentSlide, prevSlide)
    })
}
if (screen.width < 450) {
    const setSlidePosition = (slide, index) => {
        slide.style.left = (slideWidth + slideWidth * 0.06) * index + 'px'  ;
    }
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left +')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    }
    slides.forEach(setSlidePosition);
    
    // when I click right, move slides to the right
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide')
        const nextSlide = currentSlide.nextElementSibling;
    
        moveToSlide(track, currentSlide, nextSlide);
    })
    
    // when I click left, move slides to the left
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide')
        const prevSlide = currentSlide.previousElementSibling;
    
        moveToSlide(track, currentSlide, prevSlide)
    })
}
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';



