score=0;
cross = true;
audio = new Audio('m1.mp3')
audio2 = new Audio('m2.mp3')
setTimeout(()=>{
    audio.play()
},1000)
document.onkeydown = function(e){
    // console.log( "key code is ",e.keyCode);
    if (e.keyCode == 38) {
        car1 = document.querySelector(".car1");
        car1.classList.add("animatecar1");
        setTimeout(() => {
            car1.classList.remove("animatecar1");
        }, 700);
    }
    if (e.keyCode == 39) {
        car1 = document.querySelector(".car1");
        c1X = parseInt(
            window.getComputedStyle(car1, null).getPropertyValue("left")
        );
        car1.style.left = c1X + 20 + "px";
    }
    if (e.keyCode == 37) {
        car1 = document.querySelector(".car1");
        c1X = parseInt(
            window.getComputedStyle(car1, null).getPropertyValue("left")
        );
        car1.style.left = c1X - 20 + "px";
    }
}

setInterval(() => {
    car1=document.querySelector('.car1')
    gameover = document.querySelector('.gameover')
    car2=document.querySelector('.car2')
    car3=document.querySelector('.car3')
    // F1=document.querySelector('.F1')

    c1x= parseInt(window.getComputedStyle(car1,null).getPropertyValue('left'));
    c1r= parseInt(window.getComputedStyle(car1,null).getPropertyValue('right'));
    c1y= parseInt(window.getComputedStyle(car1,null).getPropertyValue('bottom'));

    c2x= parseInt(window.getComputedStyle(car2,null).getPropertyValue('left'));
    c2y= parseInt(window.getComputedStyle(car2,null).getPropertyValue('bottom'));

    c3x= parseInt(window.getComputedStyle(car3,null).getPropertyValue('left'));
    c3y= parseInt(window.getComputedStyle(car3,null).getPropertyValue('bottom'));
    
    // c4x= parseInt(window.getComputedStyle(F1,null).getPropertyValue('left'));
    // c4y= parseInt(window.getComputedStyle(F1,null).getPropertyValue('bottom'));

    offsetX1 = Math.abs(c1x-c2x);
    offsetY1 = Math.abs(c1y-c2y);
    offsetX2 = Math.abs(c1x-c3x);
    offsetY2 = Math.abs(c1y-c3y);
    // offsetX3 = Math.abs(c1x-c4x);
    // offsetY3 = Math.abs(c1y-c4y);
// console.log(offsetX1,offsetY1);
console.log(offsetY2);

    if(offsetX1<73 && offsetY1<152 || offsetX2<63 && offsetY2<100 ){
        gameover.style.visibility = 'visible';
        car2.classList.remove('animatecar2')
        car3.classList.remove('animatecar3')
        audio2.play();
        setTimeout(()=>{
            audio2.pause()
            audio.pause()
        },1000)
        // F1.classList.remove('animateF1')
    }
    else if(offsetY1<145  && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross= true;
        },1000);
        setTimeout(() => {
            aniDur = parseFloat(
                window
                    .getComputedStyle(car2, null)
                    .getPropertyValue("animation-duration")
            );
            newDur = aniDur - 0.1;
            car2.style.animationDuration = newDur + "s";
            console.log('new animation duration', newDur);
        }, 500);

    }
    else if(offsetY2<113  && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross= true;
        },2000);
        setTimeout(() => {
            aniDur2 = parseFloat(
                window
                    .getComputedStyle(car3, null)
                    .getPropertyValue("animation-duration")
            );
            newDur2 = aniDur2 - 0.1;
            car3.style.animationDuration = newDur2 + "s";
            console.log('new animation duration', newDur2);
        }, 1000);

    }
    // else if(offsetY3<113  && cross){
    //     score+=1;
    //     updateScore(score);
    //     cross=false;
    //     setTimeout(()=>{
    //         cross= true;
    //     },2000);
    //     setTimeout(() => {
    //         aniDur3 = parseFloat(
    //             window
    //                 .getComputedStyle(F1, null)
    //                 .getPropertyValue("animation-duration")
    //         );
    //         newDur3 = aniDur3 - 0.5;
    //         F1.style.animationDuration = newDur3 + "s";
    //         console.log('new animation duration', newDur3);
    //     }, 1000);

    // }
}, 10);

function updateScore(score){
    scorecont.innerHTML = "YOUR SCORE :" + score;
};
function updateBackground(){
   var background= document.getElementById("container");
   background.style.backgroundImage='';
   background.style.backgroundUrl='';
   background.style.background='';
   background.style.backgroundColor='red';
    
}
setTimeout(function(){
    background.remove;
},5000)