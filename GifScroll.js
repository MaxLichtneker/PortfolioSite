let gifs = ["../ImagesProjects/MalagaJam/MalagaJam_Gif_2.gif", "../ImagesProjects/Switch/SwitchGif_1.gif", "../ImagesProjects/OverGrown/OvergrownGif_1.gif", "../ImagesProjects/EndlessRunner/EndlessRunner_gif_2.gif"];

let index = 0;

//loops the gifs
function VideoLoop(){
    document.getElementById("ParralaxId").style.backgroundImage ="url("+gifs[index]+")";
    index > gifs.length - 1 ? index = 0 : index++;
}

window.onload = function(){
    document.getElementById("ParralaxId").style.backgroundImage ="url("+gifs[0]+")";
    setInterval(VideoLoop, 3000);
}