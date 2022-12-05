score= 0;
cross=true;

audio=new Audio('music.mp3');
audiogo=new Audio('game over.mp3')
setTimeout(() => {
    audio.play()
}, 100);
document.onkeydown=function (e) {
    console.log(e.keyCode)
    if (e.keyCode==38) {
        diano=document.querySelector('.diano');
        diano.classList.add('jump')
        setTimeout(() => {
            diano.classList.remove('jump')
        }, 700);
    }
    if (e.keyCode==39) {
        diano=document.querySelector('.diano');
        dianox =parseInt(window.getComputedStyle(diano,null).getPropertyValue('left'));
        diano.style.left= dianox+112+"px"
    }
    if (e.keyCode==37) {
        diano=document.querySelector('.diano');
        dianox =parseInt(window.getComputedStyle(diano,null).getPropertyValue('left'));
        diano.style.left= (dianox-112)+"px"
    }
}


setInterval(() => {
    diano=document.querySelector('.diano')
    gameover=document.querySelector('.gameover')
    obstacle=document.querySelector('.obstacle')
    dx =parseInt(window.getComputedStyle(diano,null).getPropertyValue('left'));
    dy =parseInt(window.getComputedStyle(diano,null).getPropertyValue('top'));
    ox =parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy =parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetx =Math.abs(dx-ox);
    offsety =Math.abs(dy-oy);
    if(offsetx<76 && offsety<52){
        gameover.style.visibility='visible'
        obstacle.classList.remove('obstacleani')
        audiogo.play();
        setTimeout(() => {
            audio.pause();
        }, 1000);
        setTimeout(() => {
            audiogo.pause();
        }, 5000);
    }
    else if(offsetx<145 && cross){
        score+=1;
        updatescore(score)
        cross=false;
        setTimeout(() => {
            cross =true;
        }, 1000);
        setTimeout(() => {
            anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newdur=anidur-0.1;
            obstacles.style.animationDuration=newdur+'s';
        }, 500);
    }
}, 100);
function updatescore(score){
    scorecount.innerHTML="your score: "+score
}