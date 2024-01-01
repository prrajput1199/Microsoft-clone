let menuIcon = document.querySelector("#menu-icon");
let navbar=document.querySelector("#navbar")


menuIcon.onclick=()=>{
    
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('hidden');


    
}


document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('myCarousel');
    const carouselInner = carousel.querySelector('.carousel-inner');

    let currentIndex = 0;

    function showSlide(index) {
      const translateValue = -index * 100 + '%';
      carouselInner.style.transform = 'translateX(' + translateValue + ')';
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselInner.children.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + carouselInner.children.length) % carouselInner.children.length;
      showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    carousel.addEventListener('mouseenter', () => clearInterval(intervalId));
    carousel.addEventListener('mouseleave', () => setInterval(nextSlide, 3000));

    showSlide(currentIndex);
  });
