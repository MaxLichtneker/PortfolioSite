
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

const ProjectVideos = [null, 
                    "/Videos/Switchgameplay.mp4",
                    "/Videos/OvergrownTrailer-720p-1695042157.mp4", 
                    "/Videos/GameplayFilmpje(19-05-2022).mp4",
                    "/Videos/Buildv2.02022.11.19-19.01.37.04.mp4"];

function AddPages(){

    //loops the array of projectpages to add a slide div for each one
    for(i = 0; i < ProjectPages.length; i++){

        const PageDivs = document.createElement("div");
        PageDivs.className = "mySlides";
        PageDivs.id = ProjectPages[i];
        
        var gridElement = document.getElementById("Grid").appendChild(PageDivs);
        gridElement.innerHTML = "<h2 style='text-align: center; padding-top: 50px;'>"+ProjectPages[i]+"</h2>";
    }

    //adds grid div
    AddDiv("mySlides","GridContainer","SlideGrid")

    //adds video class with source to gridcontainer
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

    //adds text under the gridcontainer
    AddDiv("GridContainer","GridText","");

    //dynamically sets the name of the id
    for(i = 0; i < GridArray.length; i++){

        const textId = ProjectPages[i] + "Text";

        const imageClass = document.getElementsByClassName("GridText");
        imageClass[i].setAttribute("id", textId);
    }
}

//adds a new div class to the slide container with the given paramaters
function AddDiv(ParentDiv,DivClass, DivId){

    const Slides = document.getElementsByClassName(ParentDiv)
    const arr = Array.from(Slides);

    arr.forEach((n) => {

        const PageDivs = document.createElement("div");
        PageDivs.className = DivClass;

        PageDivs.id = DivId;

        n.appendChild(PageDivs);
    });
}

function AddText(Text, ID){
    const textField = document.getElementById(ID);
    
    textField.innerHTML = Text;
}

window.onload = function(){
    AddPages();

    AddText(
    `<p2> Whilst on an educational school trip which only a select few students were chosen for, 
    I participated in the global game jam in Malaga Spain. We had 3 days to make and develop a game with the theme repair. 
    </p2>
    &nbsp
    <p2>
    Together with my group we came up with the idea to create a game about fixing tattoos. 
    </p2>
    &nbsp
    <p2>
    In this game I manly worked on making the dialog mechanic at the start of the game where it chooses a random set of dialog which will then determine which tattoo you will be fixing. 
    I also added a fade to the screen and added the animations in game. 
    I also worked a bit on the timer and on the slider which measures how much you are hurting the customer. 
    </p2>
    `,"Fix my tattooText");
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
