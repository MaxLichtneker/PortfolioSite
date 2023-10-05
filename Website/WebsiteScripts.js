
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


const ProjectPages = ["Malaga jam", "Switch", "Overgrown", "Examen Project", "Endless Runner"];

var Grid;

function AddPages(){

    //loops the array of projectpages to add a slide div for each one
    for(i = 0; i < ProjectPages.length; i++){

        const PageDivs = document.createElement("div");
        PageDivs.className = "mySlides";
        PageDivs.id = "Slide";

        document.getElementById("Grid").appendChild(PageDivs);
    }

    const Slides = document.getElementsByClassName("mySlides")
    const arr = Array.from(Slides);

    //adds a grid div to each of the created slide divs
    arr.forEach((n) => {

        const PageDivsGrid = document.createElement("div");
        PageDivsGrid.className = "GridContainer";
        PageDivsGrid.id = "SlideGrid"; 

        n.appendChild(PageDivsGrid);
    });
}

function ProjectPage(ProjectIndex, ProjectTitle, ProjectVideo, ProjectInfoText, ProjectCodeSnippet){
}

window.onload = function(){
    AddPages();

    ProjectPage()
}


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

function ShowDropDown(DropDownId, RotateId){

    if(document.getElementById(DropDownId).style.display == "none"){
        document.getElementById(DropDownId).style.display = "block";
        
        //rotate + symbol
        document.getElementById(RotateId).style.transform = "rotate(45deg)";
    }
    else{
        document.getElementById(DropDownId).style.display = "none";

        //rotate x symbol
        document.getElementById(RotateId).style.transform = "rotate(0)";
    }
}
