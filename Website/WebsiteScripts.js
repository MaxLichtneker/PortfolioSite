
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


const ProjectPages = ["Fix my tattoo", "Switch", "Overgrown", "Examen Project", "Endless Runner"];

const ProjectVideos = [null, "/Videos/Switchgameplay.mp4",
                    "/Videos/OvergrownTrailer-720p-1695042157.mp4", 
                    "/Videos/GameplayFilmpje(19-05-2022).mp4","/Videos/Buildv2.02022.11.19-19.01.37.04.mp4"];

function AddPages(){

    //loops the array of projectpages to add a slide div for each one
    for(i = 0; i < ProjectPages.length; i++){

        const PageDivs = document.createElement("div");
        PageDivs.className = "mySlides";
        PageDivs.id = ProjectPages[i];
        
        var gridElement = document.getElementById("Grid").appendChild(PageDivs);
        gridElement.innerHTML = "<h2 style='text-align: center; padding-top: 50px;'>"+ProjectPages[i]+"</h2>";
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

    const Grids = document.getElementsByClassName("GridContainer")
    const GridArray = Array.from(Grids);

    for(i = 0; i < GridArray.length; i++){
        var gridId = ProjectPages[i] + "Vid"

        GridArray[i].innerHTML =  "<video class='image' controls>"
        "</video>"

        const imageClass = document.getElementsByClassName("image");
        imageClass[i].setAttribute("id", gridId);

        const videoClass = document.getElementById(gridId);

        if(videoClass){
            videoClass.innerHTML = "<source src = "+ProjectVideos[i]+"></source>";
        }
    }
}

function ProjectPage(ProjectTitle, ProjectVideo, ProjectInfoText, ProjectCodeSnippet){

    var Page = document.getElementById(ProjectTitle);
    
    var pageChild = document.querySelector('.GridContainer');
    const addOn = ProjectTitle + "video";

    pageChild.innerHTML =  "<video class='image' controls id = "+addOn+">"
    "</video>"

    var PageVideo = document.getElementsByClassName("image")
    if(PageVideo){
        PageVideo.innerHTML = "<source src = "+ProjectVideo+"></source>";
    }
}

window.onload = function(){
    AddPages();

    // //malaga page
    // ProjectPage("Malaga jam","../Videos/Switch gameplay.mp4",null,null);

    // //switch page
    // ProjectPage("Switch","/Videos/Switchgameplay.mp4",null,null);

    // //Overgrown page
    // ProjectPage("Overgrown",'../Videos/OvergrownTrailer-720p-1695042157.mp4',null,null);
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
