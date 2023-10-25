let gifs = ["../ImagesProjects/MalagaJam/MalagaJam_Gif_2.gif", "../ImagesProjects/Switch/SwitchGif_1.gif", "../ImagesProjects/OverGrown/OvergrownGif_1.gif", "../ImagesProjects/EndlessRunner/EndlessRunner_gif_2.gif"];

let index = 1;

//loops the gifs
function VideoLoop(){

    document.getElementById("ParralaxId").style.backgroundImage ="url("+gifs[index]+")";
    index++;

    if(index > gifs.length){
        index = 0;
        document.getElementById("ParralaxId").style.backgroundImage ="url("+gifs[index]+")";
    }

    console.log(gifs[index]);
}

window.onload = function(){
    setInterval(VideoLoop, 3000);
} 