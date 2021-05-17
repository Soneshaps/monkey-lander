class Banana{
    constructor(){
        this.position = [
            [
                {x:500,y:200},{x:800,y:300}
            ]    
        ]
        this.y = 100
        this.width = 50
        this.height = 50
        this.level = 0
    }
    update(ctx){
        if(game.state === 1){
            for (let index = 0; index < this.position[this.level]?.length; index++) {
                ctx.beginPath();
                ctx.fillStyle = "#66cc00";
                ctx.rect(this.position[this.level][index].x,this.position[this.level][index].y,this.width,this.height);
                ctx.fill()
                ctx.closePath()
            }
        }
    }

}

