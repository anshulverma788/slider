const menuBar = document.querySelector(".menu-bar");
const baricon = document.querySelector("#bare-icon");

baricon.onclick = function (){
    menuBar.classList.toggle("open");
    if(menuBar.classList.contains("open")) {
       menuBar.style.display = "block";
       baricon.classList.add("fa-xmark");
       baricon.classList.remove("fa-bars");

    }else{
       menuBar.style.display = "none";
       baricon.classList.add("fa-bars");
       baricon.classList.remove("fa-xmark"); 
    }
}

//slider start

const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".main-img")

let slideNumber = 1;
 arrowRight.addEventListener('click', () =>{
if (slideNumber < images.length){
    slider.style.transform = `translateX(-${slideNumber*1350}px)`;
    slideNumber++;
}else{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;

}
 });

 arrowLeft.addEventListener('click', () =>{
    if(slideNumber > 1){
        slideNumber--;
         slider.style.transform = `translateX(-${(slideNumber-1)*1350}px)`;
    }else{
        slideNumber = images.length;
         slider.style.transform = `translateX(-${slideNumber-1})800px)`;
    }
 });
