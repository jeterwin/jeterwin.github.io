function showSlides(carousel, n) {
    let i;
    let slides = carousel.getElementsByClassName("mySlides");
    let dots = carousel.getElementsByClassName("demo");
    let captionText = carousel.querySelector(".caption-container p");
    let slideIndex = carousel.slideIndex + n || 1;
    carousel.slideIndex += n;

    if (carousel.slideIndex > slides.length) { carousel.slideIndex = 1; }
    if (carousel.slideIndex < 1) { carousel.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[carousel.slideIndex - 1].style.display = "block";
    dots[carousel.slideIndex - 1].className += " active";
    captionText.innerHTML = dots[carousel.slideIndex - 1].alt;
  }

  function displaySlides(carousel, n) {
    let i;
    let slides = carousel.getElementsByClassName("mySlides");
    let dots = carousel.getElementsByClassName("demo");
    let captionText = carousel.querySelector(".caption-container p");
    carousel.slideIndex = n;

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[carousel.slideIndex - 1].style.display = "block";
    dots[carousel.slideIndex - 1].className += " active";
    captionText.innerHTML = dots[carousel.slideIndex - 1].alt;
  }
  
  function plusSlides(carousel, n) {
    showSlides(carousel, n);
  }

  function currentSlide(carousel, n) {
    displaySlides(carousel, n);
  }
  
  // Initialize all carousels
  function initializeCarousels() {
    let carousels = document.getElementsByClassName('carousel');
    for (let i = 0; i < carousels.length; i++) {
      carousels[i].slideIndex = 1;
      showSlides(carousels[i], 0);
    }
  }
  
  // Call initializeCarousels when the document is ready
  document.addEventListener('DOMContentLoaded', initializeCarousels);