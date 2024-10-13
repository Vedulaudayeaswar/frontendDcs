const Menu = document.getElementById('menu');
const Nav = document.querySelector('nav');

Menu.addEventListener('click', () => {
    Nav.classList.toggle('active');
});


const carousel = document.querySelector('.carousel');
let scrollPosition = 0;
const cardWidth = document.querySelector('.card').offsetWidth;
const visibleCards = 4; 

document.querySelector('.next-button').addEventListener('click', () => {
    const maxScroll = (carousel.children.length - visibleCards) * cardWidth;
    if (scrollPosition < maxScroll) {
        scrollPosition += cardWidth;
        carousel.style.transform = `translateX(-${scrollPosition}px)`;
    }
});

document.querySelector('.prev-button').addEventListener('click', () => {
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        carousel.style.transform = `translateX(-${scrollPosition}px)`;
    }
});

const bookingForm = document.querySelector('.booking-form form');
bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your booking request has been submitted successfully!');
});

const testimonialCards = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

testimonialCards[currentIndex].classList.add('active');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');


function showTestimonial(index) {
  
    testimonialCards[currentIndex].classList.remove('active');
    
    currentIndex = index;

    testimonialCards[currentIndex].classList.add('active');
}


prevBtn.addEventListener('click', function() {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
        newIndex = testimonialCards.length - 1; 
    }
    showTestimonial(newIndex);
});

nextBtn.addEventListener('click', function() {
    let newIndex = currentIndex + 1;
    if (newIndex >= testimonialCards.length) {
        newIndex = 0; 
    }
    showTestimonial(newIndex);
});







