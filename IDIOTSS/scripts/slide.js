let slideIndex = randomIntFromInterval(0, 7);
let numSlides = 7;
showSlides();

const background = document.getElementById("background");
// background.style = "background-image: url('/images/backgrounds/"+slideIndex+".png');";

function showSlides() {
    if (slideIndex > numSlides) {slideIndex = 0}

    $("#background").stop().animate({opacity: 0},500,function(){
        $(this).css({'background-image': "url('/images/backgrounds/"+slideIndex+".png')"})
                   .animate({opacity: 1},{duration:500});
     });
    // background.style = "background-image: url('/images/backgrounds/"+slideIndex+".png');"
    
    slideIndex++;
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }