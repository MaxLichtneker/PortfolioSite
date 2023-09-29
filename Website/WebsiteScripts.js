
var previousScrollPos = window.scrollY;

//function to have sub bar appear when scrolling back up
window.onscroll = function(){
    var currentScrollPos = window.scrollY;

    if(previousScrollPos > currentScrollPos){
        document.getElementById("SubBar").style.top = "75px"; 
    }else{
        document.getElementById("SubBar").style.top = "-80px";
    }
    previousScrollPos = currentScrollPos;
}   

//

let slideIndex = 1;

ShowSlides(slideIndex);

function CurrentSlide(n){
    ShowSlides(slideIndex = n);
}

function NextSlide(n){
    ShowSlides(slideIndex += n)
}

function ShowSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let buttons = document.getElementsByClassName("ButtonSubBar");

    if(n > slides.length){
        slideIndex = 1;
    }

    if(n < 1){
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++){

        slides[i].style.display = "none";
        buttons[i].style.textDecoration = "none";
    }

    
    slides[slideIndex-1].style.display = "Block";
    buttons[slideIndex-1].style.textDecoration = "underline";
}

function ShowDropDown(){

    if(document.getElementById("DropDown").style.display == "none"){
        document.getElementById("DropDown").style.display = "block";
        
        //rotate + symbol
        document.getElementById("Rotated").style.transform = "rotate(45deg)";
    }
    else{
        document.getElementById("DropDown").style.display = "none";

        //rotate x symbol
        document.getElementById("Rotated").style.transform = "rotate(0)";
    }
}