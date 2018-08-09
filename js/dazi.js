class Game{
    constructor(){
        //构造函数
        this.screen="";
        this.letterBox=[];
        this.hp="";
        this.flag="";
        this.point="";
        this.bgmusic="";
        this.letterWidth=0.53;
        this.sudu=0.1;
        this.death="";
        // this.pointNum=0;
        // this.hpNum=10; 
        // this.replay="";
        // this.start=start;
        // this.key="";
    }
    createLetter(num=1){
        for(let i=0;i<num;i++){
            let obj={};
            let letter="";
            do{let asc=Math.floor(Math.random()*26+65);
                 letter=String.fromCharCode(asc);}while(this.isHas(letter));   //this.isHas作用判断是否重复
            obj.name=letter;
            let div=document.createElement("div");
            div.className="letter";
            div.style.backgroundImage=`url(img/A_Z/${letter}.png)`;
            let left='';
            do{left=Math.random()*5.7+0.6;}while(this.isRepeat(left)); 
            obj.left=left;
            div.style.left=left+"rem";
            obj.top=0.9;
            obj.node=div;
            this.screen.appendChild(div);
            this.letterBox.push(obj);
        }
    }
    init(){
        this.hp.innerText="10";
        this.point.innerText="0"; 
        this.flag.className="end";
        this.letterBox=[];
        this.sudu=0.1;
        this.bgmusic.className="Astart";
        this.screen.innerText=""; 
        // this.hp.innerText=this.hpNum;
        // this.point.innerText=this.pointNum;
        // this.death.style.display="none";   
    }
    isHas(letter){
            for (let item of this.letterBox){
                if(letter==item.name){
                    return true;        //  如果名字重复，则继续执行，直到找到不一样的才跳出循环
                }              
            }
            return false;
        }
    isRepeat(left){
        for (let item of this.letterBox){
            if(Math.abs(left-item.left)<this.letterWidth){
                return true;       
            }  
        }            
        return false;
     }
     run(){
         this.t=setInterval(()=>{
             this.letterBox.forEach((item,index) => {
                 item.top += this.sudu;
                 if(item.top>=7.8){
                    this.addhp();
                     this.screen.removeChild(item.node);
                     this.letterBox.splice(index,1);
                     this.createLetter();
                 }
                 item.node.style.top=item.top+"rem";
             });
         },200)
     }
     delkey(name){
        this.letterBox.forEach((item,index) => {
            if(item.name==name){
                this.addpoint();
                this.screen.removeChild(item.node);
                this.letterBox.splice(index,1);
                this.createLetter(1);
            }
        })
    }
    addpoint(){
        this.point.innerText++;
        // this.pointNum++;
        // this.point.innerText=this.pointNum;
        this.sudu=this.point.innerText<10?0.1:this.point.innerText/100+0.1;
    }
    addhp(){
        this.hp.innerText--;
            // this.hpNum--;
            // this.hp.innerText=this.hpNum;
            let death=document.querySelector(".death");
            if(this.hp.innerText<=0){
                clearInterval(this.t);
                this.death.style.display="block";
                this.death.childNodes[1].childNodes[1].innerText=this.point.innerText;
            }
    }
   replay(){
    this.death.style.display="none";
    this.init();
    this.createLetter(5);
   }
}        