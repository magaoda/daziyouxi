window.onload=function(){
    let keyCon=document.querySelector(".keyCon");
    let bgmusic=document.querySelector("#bgmusic");
    let flag=document.querySelector("#flag");
    let death=document.querySelector(".death");
    let replay=document.querySelector(".replay");
    let key = document.querySelector(".key");
    let audio=document.querySelector("#audio");
    let screen=document.querySelector(".screen");
    let hp=document.querySelector(".hp");
    let point=document.querySelector(".point");
    // let start=document.querySelector(".start");
    // let end=document.querySelector(".end");
   
    let flg=true;
    keyCon.ontouchstart=function(e){
        if(flg==false){
            return;
        }
        if(e.target.className=="btn"){
            e.target.style.transform="scale(0.8)";
            gameobj.delkey(e.target.innerText);
        }
        
    }
    keyCon.ontouchend=function(e){
        if(e.target.className=="btn"){
            e.target.style.transform="scale(1)";  
        } 
    }
    bgmusic.ontouchstart=function(){
        if(bgmusic.className=="Astart"){
            bgmusic.className="Aend";
            audio.pause();
        }else{
            bgmusic.className="Astart";
            audio.play();
        }
    }
    flag.ontouchstart=function(e){
        if(e.target.className=="end"){
            gameobj.run();
            e.target.className="start";
            key.style.opacity=0.2;
            flg=true;
        }else{
            e.target.className="end";
            clearInterval(gameobj.t)
            key.style.opacity=1;
            flg=false;
        }
        
    }
    replay.ontouchstart=function(){
        gameobj.replay();
        flg=false;
        key.style.opacity=1;
    }
    let gameobj= new Game();
    gameobj.screen=screen;
    gameobj.hp=hp;
    gameobj.flag=flag;
    gameobj.point=point;
    gameobj.bgmusic=bgmusic;
    gameobj.init();
    gameobj.death=death;
    gameobj.createLetter(5);
    //gameobj.run();
}