
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

const ProjectVideos = ["/Videos/FixMyTattooGameplay.mp4", 
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

    document.getElementById(ProjectPages[0]).style.display = "block";

    //adds grid div
    AddDiv("mySlides","GridContainer","");
    //dynamically adds grid behind the page name to the id
    AddId("GridContainer","Grid");

    //adds video class with source to gridcontainer
    const Grids = document.getElementsByClassName("GridContainer");
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
     //dynamically adds grid behind the page name to the id
    AddId("GridText","Text");

    AddDiv("GridContainer", "GridContent", "");
    AddId("GridContent","ImageGrid");
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
//adds additional text to the id that already has the given page name added 
function AddId(ClassName, AdditionalText){
    for(i = 0; i < ProjectPages.length; i++){
        const textId = ProjectPages[i] + AdditionalText;

        const imageClass = document.getElementsByClassName(ClassName);
        imageClass[i].setAttribute("id", textId);
    }
}
//add html to the given element id
function AddElement(Text, ID){
    const textField = document.getElementById(ID);
    
    textField.innerHTML += Text;
}

function AddCodeSnippit(CodeSnippit, GridId, SnippitName){
    AddElement(`
    <div class='DropDown'>
        <button onclick="ShowDropDown('', '')" class="DownloadButton DropDownButton DownloadButton1">
        <div style="float: left;">&lt;/&gt; Code snippits</div>
        <div style="float: right; transition: .5s;" id="">+</div>
    </div>
    `,GridId);
}

window.onload = function(){
    AddPages();

    //text for malaga jam
    AddElement(
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
    //images for malaga jam
    AddElement("<img src='/ImagesProjects/MalagaJam/MalagaJam_Gif_2.gif' class = 'ProjectImage'>","Fix my tattooImageGrid");
    AddElement("<img src='/ImagesProjects/MalagaJam/MalagaJam_Screen_1.png' class = 'ProjectImage'>","Fix my tattooImageGrid");

    //text for switch
    AddElement(
    `<p2> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quibusdam sint ipsa id illo repellendus placeat veritatis, assumenda nobis voluptatem officiis tenetur aspernatur corporis vitae possimus facere odit ducimus exercitationem!
    </p2>
    `,"SwitchText");
    //Images for Switch
    AddElement("<img src='/ImagesProjects/Switch/SwitchScreenshot.png' class = 'ProjectImage'>","SwitchImageGrid");
    AddElement("<img src='/ImagesProjects/Switch/SwitchScreenshot2.png'class = 'ProjectImage'>","SwitchImageGrid");
    
    //text for overgrown
    AddElement(
    ` <p2>
    For this school project I worked with 3 others to make a game that we would publish on Itch.io. 
    </p2>
    &nbsp
    <p2>
        We came up with a simple farming game where the world was overgrown by plants, plants all grew faster so your crops would grow faster than they normally would. 
        I worked on the plant growth mechanics and collecting mechanics as well as adding animations to the player and the enemy character, 
        I also made the enemy mechanics and the punching mechanics for the player. 
    </p2>
    &nbsp
    <p2>
        Check out the game on Itch.io <a href="https://frozen-chicken-nuggies.itch.io/overgrown" target="_blank" style="color:antiquewhite;">here!</a>
    </p2>
    &nbsp
    <p2>
        I worked together with: Bouke Weel the other dev and 2 artists: Anne Roos Leeuwis and Floor van den Bank. 
    </p2>
    `,"OvergrownText");
    // AddElement(
    // `<div class='DropDown'>
    //     <button onclick="ShowDropDown('DropDown_Overgrown', 'RotatedOvergrown')" class="DownloadButton DropDownButton DownloadButton1">
    //         <div style="float: left;">&lt;/&gt; Code snippits</div>
    //         <div style="float: right; transition: .5s;" id="RotatedEndless">+</div>
    //     </button>

    //     <div id="DropDown_Overgrown" class="DropDownContent">
    //     <div class="GridContainerCodeSnippet">
    //         <p2 style="grid-row: 1; "><b>GrowPlant function:</b></p2>
    //         <textarea readonly rows="18"class="CodeBackground">
    //         1. //turns on the new sprite and turns the older one off
    //         2. private void GrowPlant()
    //         3. {
    //         4.     if(growthDuration <= 0 && fullyGrown == false)
    //         5.     {
    //         6.         plantSprite.sprite = null;
    //         7.
    //         8.         arrayIndex++;
    //         9. 
    //         10.         plantSprite.sprite = plantData.growthSprites[arrayIndex];
    //         11.     }
    //         12.     else if(arrayIndex == plantData.growthSprites.Length - 1)
    //         13.     {
    //         14.         cropState = CropState.dead;
    //         15.         fullyGrown = true;
    //         16.     }
    //         17. }
    //         </textarea>
    // </div>`,"OvergrownGrid");
    AddElement("<img src='/ImagesProjects/OverGrown/OvergownDay.png' class = 'ProjectImage'>","OvergrownImageGrid");
    AddElement("<img src='/ImagesProjects/OverGrown/OvergownNIght.png' class = 'ProjectImage'>","OvergrownImageGrid");

    //text for exam project
    AddElement(
    `<p2>
    This was the last project I worked on at the Grafisch Lyceum Utrecht. 
    </p2>
    &nbsp
    <p2>
        It was a solo project where we were given multiple different assets to make a game with.
        I chose a pack which had a bank heist theme so my game revolved around that aspect. We had to come up with 3 different mechanics and dynamics which we had to document thoroughly.
    </p2>  
    &nbsp
    <p2>
        The goal of my game was quite simple, rob the bank. You had about 2 minute's to get in and out, at the same time the police would be raiding the building and be an obstacle for the player. 
        The more money you were able to steal the higher the score at the end of the game.
    </p2>
    `
    ,"Examen ProjectText");
    //Images for Examen project
    AddElement("<img src='/ImagesProjects/ExamenProject/ExamenProjectScreen_1.png' class = 'ProjectImage'>","Examen ProjectImageGrid");
    AddElement("<img src='/ImagesProjects/ExamenProject/ExamenProjectScreen_2.png' class = 'ProjectImage'>","Examen ProjectImageGrid");

    //text for endless runner
    AddElement(
    `<p2>
        This is a solo project I had to work on at school where we had to build an endless runner. 
        The twist for this project is that we had to make all the art ourselves.
    </p2>
    &nbsp
    <p2>
        I chose for the theme of space cause I’m a big Sci-fi fan.
        I was really motivated for this project so I decided to add multiplayer to the game as well cause we were learning how to do that at the same time.
    </p2>
    `
    ,"Endless RunnerText");
    //Images for Endless runnner project
    AddElement("<img src='/ImagesProjects/EndlessRunner/EndlessRunner_gif_1.gif' class = 'ProjectImage'>","Endless RunnerImageGrid");
    AddElement("<img src='/ImagesProjects/EndlessRunner/EndlessRunner_gif_2.gif' class = 'ProjectImage'>","Endless RunnerImageGrid");
}


//handle slides
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
