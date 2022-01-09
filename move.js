canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
car1height=100;
car1width=140;
car1x=10;
car1y=10;
car1image="car1.jpg";
backgroundimage="racing track.jpg";


car2height=100;
car2width=140;
car2x=10;
car2y=100;
car2image="car2.jpg";

function add(){
    background_imagetag=new Image();
    background_imagetag.onload=uploadBackground;
    background_imagetag.src=backgroundimage;

    car1_imagetag=new Image();
    car1_imagetag.onload=uploadCar1;
    car1_imagetag.src=car1image;

    car2_imagetag=new Image();
    car2_imagetag.onload=uploadCar2;
    car2_imagetag.src=car2image;
}
function uploadBackground(){
 ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);   
}
function uploadCar1(){
    ctx.drawImage(car1_imagetag,car1x,car1y,car1width,car1height);
}

function uploadCar2(){
    ctx.drawImage(car2_imagetag,car2x,car2y,car2width,car2height);
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypress=e.keyCode;
console.log(keypress);
if(keypress=='38'){
    car1up();
    console.log("up arrow key presed");
}
if(keypress=='40'){
    car1down();
    console.log("down arrow key presed");
}
if(keypress=='37'){
    car1left();
    console.log("left arrow key presed");
}
if(keypress=='39'){
    car1right();
    console.log("right arrow key presed");
}
if(keypress=='87'){
    car2up();
    console.log("w key pressed");
}
if(keypress=='83'){
    car2down();
    console.log("s key pressed");
}
if(keypress=='65'){
    car2left();
    console.log("a key pressed");
}
if(keypress=='68'){
    car2right();
    console.log("d key pressed");
}
}
function car1up(){
    if(car1y>=0){
   car1y=car1y-10;
   console.log("when up arrow is pressed x = "+car1x+" y= "+car1y);
   uploadBackground();
   uploadCar1();
   uploadCar2();
    }
}
function car1down(){
    if(car1y<=500){
        car1y=car1y+10;
      console.log("when down aarow is presed x= "+car1x+" y= "+car1y);
      uploadBackground();
      uploadCar1();
      uploadCar2();
    }
}
function car1left(){
    if(car1x>=0){
        car1x=car1x-10;
        console.log("when left aarow is presed x= "+car1x+" y= "+car1y);
      uploadBackground();
      uploadCar1();
      uploadCar2();
    }
}
function car1right(){
    if(car1x<=700){
        car1x=car1x+10;
        console.log("when righi aarow is presed x= "+car1x+" y= "+car1y);
      uploadBackground();
      uploadCar1();
      uploadCar2();
    }
}





function car2up(){
    if(car2y>=0){
   car2y=car2y-10;
   console.log("when up arrow is pressed x = "+car2x+" y= "+car2y);
   uploadBackground();
   uploadCar2();
   uploadCar1();
    }
}
function car2down(){
    if(car2y<=500){
        car2y=car2y+10;
      console.log("when down aarow is presed x= "+car2x+" y= "+car2y);
      uploadBackground();
      uploadCar2();
      uploadCar1();
    }
}
function car2left(){
    if(car2x>=0){
        car2x=car2x-10;
        console.log("when left aarow is presed x= "+car2x+" y= "+car2y);
      uploadBackground();
      uploadCar2()
      uploadCar1();
    }
}
function car2right(){
    if(car2x<=700){
        car2x=car2x+10;
        console.log("when righi aarow is presed x= "+car2x+" y= "+car2y);
      uploadBackground();
      uploadCar2();
      uploadCar1();
    }
}
