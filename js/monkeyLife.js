class MonkeyLife{
    constructor(){
        this.monkeyLeft = 3 
        this.monkeyLeftImg = new Image()
        this.monkeyLeftImg.src = 'images/monkey-left.png'
        this.x = 592
        this.y = 20
        this.height = 23.7
        this.width = 142
    }
    update(ctx){
        if(this.monkeyLeft ===3){
            ctx.drawImage(this.monkeyLeftImg,0,0,this.width,this.height,this.x,this.y,this.width,this.height)
        }
        if(this.monkeyLeft ===2){
            ctx.drawImage(this.monkeyLeftImg,0,48.1 ,this.width,this.height,this.x,this.y,this.width,this.height)
        }
        if(this.monkeyLeft ===1){
            ctx.drawImage(this.monkeyLeftImg,0,95.27,this.width,this.height,this.x,this.y,this.width,this.height)
        }
        if(this.monkeyLeft <= 0){
            ctx.drawImage(this.monkeyLeftImg,0,143.27,this.width,this.height,this.x,this.y,this.width,this.height)
        }
    }
}