let slideIndex = 0;
let numSlides = 5;
showSlides();

function showSlides() {
    // TODO: Animate transitions
    
    let body = document.getElementById("body");
    if (slideIndex > numSlides) {slideIndex = 0}
    body.style = "background-image: url('/images/backgrounds/"+slideIndex+".png');"
    
    slideIndex++;
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}