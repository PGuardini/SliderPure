//slide with pure js

var x;
x=0;
var imgs =new Array('img/1.png','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.png','img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg','img/15.jpg','img/16.jpg','img/17.jpg','img/18.jpg');
var length = imgs.length;
var img = document.getElementById("slide");
function slide(){
    x++;
    if(x<length){
        img.src = imgs[x];
    }else if(x>=length){
        x = 0;
        img.src = imgs[x];
    }
}

function slideback(){
    x--;
    if(x>=0){
        img.src = imgs[x];
    }else if(x <= length){
        x = 8;
        img.src = imgs[x];
    }
}

function autoslide(){
    if(x<length){
        img.src = imgs[x];
    }else if(x>=length){
        x = 0;
        img.src = imgs[x];
    }
    x++;
}
setInterval(autoslide, 5000);