class HeadOnSpike{
  constructor(){
    this.image = new Image()
    this.image.src = 'images/head-on-spike.png'
    this.x = 500
    this.y = 324
    this.sX = 0 
    this.sY = 222
    this.width = 492
    this.height = 207
  }
  update(ctx){
    ctx.drawImage(this.image,this.sX,this.sY,this.width,this.height,this.x,this.y,this.width,this.height);    
    // drawing polygon
    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.moveTo(this.x+90,this.y)
    ctx.lineTo(this.x+105,this.y+6)
    ctx.lineTo(this.x+113,this.y+17)
    ctx.lineTo(this.x+122,this.y+12)
    ctx.lineTo(this.x+130,this.y+21)
    ctx.lineTo(this.x+124,this.y+30)
    ctx.lineTo(this.x+110,this.y+28)
    ctx.lineTo(this.x+105,this.y+38)
    ctx.lineTo(this.x+93,this.y+41)
    ctx.lineTo(this.x+88,this.y+145)
    ctx.lineTo(this.x+165,this.y+168)
    ctx.lineTo(this.x+230,this.y+173)
    ctx.lineTo(this.x+340,this.y+172)
    ctx.lineTo(this.x+370,this.y+163)
    ctx.lineTo(this.x+420,this.y+167)
    ctx.lineTo(this.x+488,this.y+186)
    ctx.lineTo(this.x+491,this.y+199)
    ctx.lineTo(this.x+488,this.y+207)
    ctx.lineTo(this.x+18,this.y+207)
    ctx.lineTo(this.x+10,this.y+185)
    ctx.lineTo(this.x+2,this.y+168)
    ctx.lineTo(this.x+2,this.y+148)
    ctx.lineTo(this.x+10,this.y+138)
    ctx.lineTo(this.x+30,this.y+135)
    ctx.lineTo(this.x+15,this.y+122)
    ctx.lineTo(this.x+35,this.y+122)
    ctx.lineTo(this.x+32,this.y+112)
    ctx.lineTo(this.x+38,this.y+107)
    ctx.lineTo(this.x+48,this.y+128)
    ctx.lineTo(this.x+57,this.y+103)
    ctx.lineTo(this.x+55,this.y+95)
    ctx.lineTo(this.x+58,this.y+85)
    ctx.lineTo(this.x+64,this.y+83)
    ctx.lineTo(this.x+73,this.y+52)
    ctx.lineTo(this.x+70,this.y+43)
    ctx.lineTo(this.x+75,this.y+38)
    ctx.lineTo(this.x+68,this.y+25)
    ctx.lineTo(this.x+72,this.y+12)
    ctx.lineTo(this.x+65,this.y+14)
    ctx.lineTo(this.x+60,this.y+8)
    ctx.lineTo(this.x+62,this.y+2)
    ctx.lineTo(this.x+66,this.y+2)
    ctx.lineTo(this.x+75,this.y+8)
    ctx.lineTo(this.x+90,this.y)
    ctx.closePath()

    if(game.collision.collide(game.monkey.monkeyPoly(),this.headOnSpikePoly())){
      game.dead()
    }
  }

  headOnSpikePoly(){
    var points =[
      {x:this.x+90,y:this.y},
      {x:this.x+105,y:this.y+6},
      {x:this.x+113,y:this.y+17},
      {x:this.x+122,y:this.y+12},
      {x:this.x+130,y:this.y+21},
      {x:this.x+124,y:this.y+30},
      {x:this.x+110,y:this.y+28},
      {x:this.x+105,y:this.y+38},
      {x:this.x+93,y:this.y+41},
      {x:this.x+88,y:this.y+145},
      {x:this.x+165,y:this.y+168},
      {x:this.x+230,y:this.y+173},
      {x:this.x+340,y:this.y+172},
      {x:this.x+370,y:this.y+163},
      {x:this.x+420,y:this.y+167},
      {x:this.x+488,y:this.y+186},
      {x:this.x+491,y:this.y+199},
      {x:this.x+488,y:this.y+207},
      {x:this.x+18,y:this.y+207},
      {x:this.x+10,y:this.y+185},
      {x:this.x+2,y:this.y+168},
      {x:this.x+2,y:this.y+148},
      {x:this.x+10,y:this.y+138},
      {x:this.x+30,y:this.y+135},
      {x:this.x+15,y:this.y+122},
      {x:this.x+35,y:this.y+122},
      {x:this.x+32,y:this.y+112},
      {x:this.x+38,y:this.y+107},
      {x:this.x+48,y:this.y+128},
      {x:this.x+57,y:this.y+103},
      {x:this.x+55,y:this.y+95},
      {x:this.x+58,y:this.y+85},
      {x:this.x+64,y:this.y+83},
      {x:this.x+73,y:this.y+52},
      {x:this.x+70,y:this.y+43},
      {x:this.x+75,y:this.y+38},
      {x:this.x+68,y:this.y+25},
      {x:this.x+72,y:this.y+12},
      {x:this.x+65,y:this.y+14},
      {x:this.x+60,y:this.y+8},
      {x:this.x+62,y:this.y+2},
      {x:this.x+66,y:this.y+2},
      {x:this.x+75,y:this.y+8},
      {x:this.x+90,y:this.y},
    ]
    var sides = game.collision.pointToSide(points)
    
    points.pop()
    
    return{p:points ,s:sides}
  }
}