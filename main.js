//Carrossel _______________________________________________
function slide1(){
    document.getElementById("hpbCarousel").style.backgroundImage = "url('img/carrossel1.PNG')";
    setTimeout("slide2()",3000);
}
function slide2(){
    document.getElementById("hpbCarousel").style.backgroundImage = "url('img/carrossel2.png')";
    setTimeout("slide3()",3000);
}
function slide3(){
    document.getElementById("hpbCarousel").style.backgroundImage = "url('img/carrossel3.jpg')";
    setTimeout("slide4()",3000);
}
function slide4(){
    document.getElementById("hpbCarousel").style.backgroundImage = "url('img/carrossel4.png')";
    setTimeout("slide5()",3000);
}
function slide5(){
    document.getElementById("hpbCarousel").style.backgroundImage = "url('img/carrossel5.PNG')";
    setTimeout("slide6()",3000);
}
function slide6(){
    document.getElementById("hpbCarousel").style.backgroundImage = "url('img/carrossel6.png')";
    setTimeout("slide7()",3000);
}
function slide7(){
    document.getElementById("hpbCarousel").style.backgroundImage = "url('img/carrossel7.jpg')";
    setTimeout("slide8()",3000);
}
function slide8(){
    document.getElementById("hpbCarousel").style.backgroundImage = "url('img/carrossel8.png')";
    setTimeout("slide9()",3000);
}
function slide9(){
    document.getElementById("hpbCarousel").style.backgroundImage = "url('img/carrossel9.jpg')";
    setTimeout("slide1()",3000);
}

//Iniciar funções site___________________________________________________

function start(){

    slide1();
}