var slideIndex = 0;
window.addEventListener("load",showSlides,true);


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("ImageSlide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 6000); 
}



var slideIndexA = 0;
window.addEventListener("load",showSlidess,true);
showSlidess();

function showSlidess() {
    var i;
    var slides = document.getElementsByClassName("ImageSlide1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndexA++;
    if (slideIndexA > slides.length) {slideIndexA = 1} 
    slides[slideIndexA-1].style.display = "block"; 
    setTimeout(showSlidess, 6000); 
}