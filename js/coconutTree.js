class CoconutTree{
  constructor(){
    this.image = new Image()
    this.image.src = 'images/coconut-tree.png'
    this.position = [
      {},{},{x:-70 ,y:100},{x:480 ,y:140},{}
    ]
    this.sX = 0 
    this.sY = 0
    this.width = 278
    this.height = 437

  }
  update(ctx){
    ctx.drawImage(this.image,this.sX,this.sY,this.width,this.height,this.position[game.level].x,this.position[game.level].y,this.width,this.height);    


    //drawing Polygon 
    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.moveTo(this.position[game.level].x+100 ,this.position[game.level].y)
    ctx.lineTo(this.position[game.level].x +130 ,this.position[game.level].y+7)
    ctx.lineTo(this.position[game.level].x +162 ,this.position[game.level].y+31)
    ctx.lineTo(this.position[game.level].x +220 ,this.position[game.level].y+36)
    ctx.lineTo(this.position[game.level].x +180 ,this.position[game.level].y+52)
    ctx.lineTo(this.position[game.level].x +230 ,this.position[game.level].y+70)
    ctx.lineTo(this.position[game.level].x +260 ,this.position[game.level].y+100)
    ctx.lineTo(this.position[game.level].x +275 ,this.position[game.level].y+125)
    ctx.lineTo(this.position[game.level].x +220 ,this.position[game.level].y+105)
    ctx.lineTo(this.position[game.level].x +190 ,this.position[game.level].y+105)
    ctx.lineTo(this.position[game.level].x +220 ,this.position[game.level].y+145)
    ctx.lineTo(this.position[game.level].x +225 ,this.position[game.level].y+175)
    ctx.lineTo(this.position[game.level].x +200 ,this.position[game.level].y+145)
    ctx.lineTo(this.position[game.level].x +173 ,this.position[game.level].y+140)
    ctx.lineTo(this.position[game.level].x +173 ,this.position[game.level].y+180)
    ctx.lineTo(this.position[game.level].x +166 ,this.position[game.level].y+195)
    ctx.lineTo(this.position[game.level].x +136 ,this.position[game.level].y+128)
    ctx.lineTo(this.position[game.level].x +100 ,this.position[game.level].y+200)
    ctx.lineTo(this.position[game.level].x +88 ,this.position[game.level].y+250)
    ctx.lineTo(this.position[game.level].x +87 ,this.position[game.level].y+315)
    ctx.lineTo(this.position[game.level].x +102 ,this.position[game.level].y+380)
    ctx.lineTo(this.position[game.level].x +130 ,this.position[game.level].y+435)
    ctx.lineTo(this.position[game.level].x +77 ,this.position[game.level].y+435)
    ctx.lineTo(this.position[game.level].x +63 ,this.position[game.level].y+300)
    ctx.lineTo(this.position[game.level].x +70 ,this.position[game.level].y+220)
    ctx.lineTo(this.position[game.level].x +78 ,this.position[game.level].y+189)
    ctx.lineTo(this.position[game.level].x +57 ,this.position[game.level].y+189)
    ctx.lineTo(this.position[game.level].x +57 ,this.position[game.level].y+210)
    ctx.lineTo(this.position[game.level].x +47 ,this.position[game.level].y+180)
    ctx.lineTo(this.position[game.level].x +52 ,this.position[game.level].y+150)
    ctx.lineTo(this.position[game.level].x +25 ,this.position[game.level].y+150)
    ctx.lineTo(this.position[game.level].x +5 ,this.position[game.level].y+180)
    ctx.lineTo(this.position[game.level].x +10 ,this.position[game.level].y+140)
    ctx.lineTo(this.position[game.level].x +30 ,this.position[game.level].y+103)
    ctx.lineTo(this.position[game.level].x +70 ,this.position[game.level].y+68)
    ctx.lineTo(this.position[game.level].x+1  ,this.position[game.level].y+72)
    ctx.lineTo(this.position[game.level].x+38  ,this.position[game.level].y+43)
    ctx.lineTo(this.position[game.level].x+90  ,this.position[game.level].y+31)
    ctx.lineTo(this.position[game.level].x+120  ,this.position[game.level].y+31)
    ctx.lineTo(this.position[game.level].x+113  ,this.position[game.level].y+10)
    ctx.lineTo(this.position[game.level].x+100  ,this.position[game.level].y)
    ctx.closePath()
    if(game.collision.collide(game.monkey.monkeyPoly(),this.coconutPoly())){
      game.dead()
    }

  }
  coconutPoly(){
    var points =[
      {x:this.position[game.level].x+100 ,y:this.position[game.level].y},
      {x:this.position[game.level].x +130 ,y:this.position[game.level].y+7},
      {x:this.position[game.level].x +162 ,y:this.position[game.level].y+31},
      {x:this.position[game.level].x +220 ,y:this.position[game.level].y+36},
      {x:this.position[game.level].x +180 ,y:this.position[game.level].y+52},
      {x:this.position[game.level].x +230 ,y:this.position[game.level].y+70},
      {x:this.position[game.level].x +260 ,y:this.position[game.level].y+100},
      {x:this.position[game.level].x +275 ,y:this.position[game.level].y+125},
      {x:this.position[game.level].x +220 ,y:this.position[game.level].y+105},
      {x:this.position[game.level].x +190 ,y:this.position[game.level].y+105},
      {x:this.position[game.level].x +220 ,y:this.position[game.level].y+145},
      {x:this.position[game.level].x +225 ,y:this.position[game.level].y+175},
      {x:this.position[game.level].x +200 ,y:this.position[game.level].y+145},
      {x:this.position[game.level].x +173 ,y:this.position[game.level].y+140},
      {x:this.position[game.level].x +173 ,y:this.position[game.level].y+180},
      {x:this.position[game.level].x +166 ,y:this.position[game.level].y+195},
      {x:this.position[game.level].x +136 ,y:this.position[game.level].y+128},
      {x:this.position[game.level].x +100 ,y:this.position[game.level].y+200},
      {x:this.position[game.level].x +88 ,y:this.position[game.level].y+250},
      {x:this.position[game.level].x +87 ,y:this.position[game.level].y+315},
      {x:this.position[game.level].x +102 ,y:this.position[game.level].y+380},
      {x:this.position[game.level].x +130 ,y:this.position[game.level].y+435},
      {x:this.position[game.level].x +77 ,y:this.position[game.level].y+435},
      {x:this.position[game.level].x +63 ,y:this.position[game.level].y+300},
      {x:this.position[game.level].x +70 ,y:this.position[game.level].y+220},
      {x:this.position[game.level].x +78 ,y:this.position[game.level].y+189},
      {x:this.position[game.level].x +57 ,y:this.position[game.level].y+189},
      {x:this.position[game.level].x +57 ,y:this.position[game.level].y+210},
      {x:this.position[game.level].x +47 ,y:this.position[game.level].y+180},
      {x:this.position[game.level].x +52 ,y:this.position[game.level].y+150},
      {x:this.position[game.level].x +25 ,y:this.position[game.level].y+150},
      {x:this.position[game.level].x +5 ,y:this.position[game.level].y+180},
      {x:this.position[game.level].x +10 ,y:this.position[game.level].y+140},
      {x:this.position[game.level].x +30 ,y:this.position[game.level].y+103},
      {x:this.position[game.level].x +70 ,y:this.position[game.level].y+68},
      {x:this.position[game.level].x+1  ,y:this.position[game.level].y+72},
      {x:this.position[game.level].x+38  ,y:this.position[game.level].y+43},
      {x:this.position[game.level].x+90  ,y:this.position[game.level].y+31},
      {x:this.position[game.level].x+120  ,y:this.position[game.level].y+31},
      {x:this.position[game.level].x+113  ,y:this.position[game.level].y+10},
      {x:this.position[game.level].x+100  ,y:this.position[game.level].y},
    ]
    var sides = []
    for (let i = 0; i < points.length-1 ; i++) {
      sides.push([{x : points[i].x , y: points[i].y},{x : points[i+1].x , y: points[i+1].y}])
    }
    points.pop()

    return {p:points,s:sides}
  }

}