let subMenu=document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}


var btn=document.getElementsByClassName("btn");
var banner=document.getElementById("banner");

btn[0].onclick = function(){
    banner.src="images/310989351_470606058365614_3273433845605372790_n.png"

    animation();
    this.classList.add("active");

}

btn[1].onclick = function(){
    banner.src="images/337333064_168316249477231_6671827933773531326_n.png"
    animation();
    this.classList.add("active");
}

btn[2].onclick = function(){
    banner.src="images/Aid_Assistantlogo.png"
    animation();
    this.classList.add("active");
}

function animation(){
    banner.classList.add("zoom");
    setTimeout(function(){
        banner.classList.remove("zoom");
    },500);

    for(b of btn){
        b.classList.remove("active");
    }
}
