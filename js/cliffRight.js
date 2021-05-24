class CliffRight{
  constructor(){
      this.image = new Image()
      this.image.src = 'images/cliff.png'
      this.sX = 0
      this.sY = 208 
      this.width = 302
      this.height = 202
      this.x = 694
      this.y = 328
  }
  update(ctx){
      ctx.drawImage(this.image,this.sX,this.sY,this.width,this.height,this.x,this.y,this.width,this.height);    

      //Drawing Polygon 
      ctx.beginPath()
      ctx.strokeStyle = "red"
      ctx.moveTo(this.x + 299 , this.y + 1)
      ctx.lineTo(this.x + 250 , this.y + 33)
      ctx.lineTo(this.x + 200 , this.y + 60)
      ctx.lineTo(this.x + 135 , this.y + 85)
      ctx.lineTo(this.x + 30 , this.y + 99)
      ctx.lineTo(this.x + 5 , this.y + 115)
      ctx.lineTo(this.x , this.y + 130)
      ctx.lineTo(this.x+10 , this.y + 160)
      ctx.lineTo(this.x+50 , this.y + 201)
      ctx.lineTo(this.x+299 , this.y + 201)
      ctx.lineTo(this.x+299 , this.y + 1)
      ctx.closePath()
      
      if(game.collision.collide(game.monkey.monkeyPoly(),this.cliffPolygon())){
        game.dead()
      }
  }
  
  cliffPolygon(){
        var points = [
          {x:this.x + 299 ,y:this.y+1},
          {x:this.x + 250 ,y:this.y+33},
          {x:this.x + 200 ,y:this.y+60},
          {x:this.x + 135 ,y:this.y+85},
          {x:this.x + 30 ,y:this.y+99},
          {x:this.x + 5 ,y:this.y+115},
          {x:this.x  ,y:this.y+130},
          {x:this.x + 10 ,y:this.y+160},
          {x:this.x + 50 ,y:this.y+201},
          {x:this.x + 299 ,y:this.y+201},
        ]

        var sides = []
        for (let i = 0; i < points.length-1 ; i++) {
          sides.push([{x : points[i].x , y: points[i].y},{x : points[i+1].x , y: points[i+1].y}])
        }

        points.pop()

        return {p:points,s:sides}
      }
  
}