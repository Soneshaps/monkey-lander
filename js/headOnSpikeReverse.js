class HeadOnSpikeReverse{
  constructor(){
    this.image = new Image()
    this.image.src = 'images/head-on-spike.png'
    this.x = 300
    this.y = 325
    this.sX = 0 
    this.sY = 0
    this.width = 492
    this.height = 207
  }
  update(ctx){
    ctx.drawImage(this.image,this.sX,this.sY,this.width,this.height,this.x,this.y,this.width,this.height);    
    // drawing polygon
    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.moveTo(this.x+2,this.y+190)
    ctx.lineTo(this.x+4,this.y+206)
    ctx.lineTo(this.x+473,this.y+206)
    ctx.lineTo(this.x+481,this.y+185)
    ctx.lineTo(this.x+488,this.y+175)
    ctx.lineTo(this.x+491,this.y+155)
    ctx.lineTo(this.x+486,this.y+142)
    ctx.lineTo(this.x+470,this.y+134)
    ctx.lineTo(this.x+476,this.y+122)
    ctx.lineTo(this.x+460,this.y+125)
    ctx.lineTo(this.x+463,this.y+120)
    ctx.lineTo(this.x+463,this.y+120)
    ctx.lineTo(this.x+455,this.y+125)
    ctx.lineTo(this.x+459,this.y+110)
    ctx.lineTo(this.x+455,this.y+107)
    ctx.lineTo(this.x+445,this.y+125)
    ctx.lineTo(this.x+440,this.y+125)
    ctx.lineTo(this.x+433,this.y+103)
    ctx.lineTo(this.x+433,this.y+103)
    ctx.lineTo(this.x+436,this.y+93)
    ctx.lineTo(this.x+432,this.y+85)
    ctx.lineTo(this.x+427,this.y+83)
    ctx.lineTo(this.x+418,this.y+50)
    ctx.lineTo(this.x+421,this.y+42)
    ctx.lineTo(this.x+415,this.y+39)
    ctx.lineTo(this.x+425,this.y+25)
    ctx.lineTo(this.x+422,this.y+13)
    ctx.lineTo(this.x+428,this.y+13)
    ctx.lineTo(this.x+431,this.y+10)
    ctx.lineTo(this.x+430,this.y+3)
    ctx.lineTo(this.x+425,this.y+3)
    ctx.lineTo(this.x+417,this.y+8)
    ctx.lineTo(this.x+408,this.y+2)
    ctx.lineTo(this.x+400,this.y+0)
    ctx.lineTo(this.x+391,this.y+4)
    ctx.lineTo(this.x+379,this.y+16)
    ctx.lineTo(this.x+372,this.y+13)
    ctx.lineTo(this.x+366,this.y+13)
    ctx.lineTo(this.x+362,this.y+21)
    ctx.lineTo(this.x+368,this.y+30)
    ctx.lineTo(this.x+373,this.y+30)
    ctx.lineTo(this.x+380,this.y+25)
    ctx.lineTo(this.x+386,this.y+36)
    ctx.lineTo(this.x+400,this.y+42)
    ctx.lineTo(this.x+403,this.y+103)
    ctx.lineTo(this.x+416,this.y+136)
    ctx.lineTo(this.x+409,this.y+136)
    ctx.lineTo(this.x+409,this.y+140)
    ctx.lineTo(this.x+398,this.y+142)
    ctx.lineTo(this.x+398,this.y+147)
    ctx.lineTo(this.x+350,this.y+162)
    ctx.lineTo(this.x+310,this.y+170)
    ctx.lineTo(this.x+220,this.y+173)
    ctx.lineTo(this.x+150,this.y+170)
    ctx.lineTo(this.x+125,this.y+164)
    ctx.lineTo(this.x+85,this.y+165)
    ctx.lineTo(this.x+35,this.y+175)
    ctx.lineTo(this.x+4,this.y+186)
    ctx.lineTo(this.x+2,this.y+190)
    ctx.closePath()

    if(game.collision.collide(game.monkey.monkeyPoly(),this.headOnSpikePoly())){
      game.dead()
    }
  }

  headOnSpikePoly(){
    var points =[
      {x:this.x+2,y:this.y+190},
      {x:this.x+4,y:this.y+206},
      {x:this.x+473,y:this.y+206},
      {x:this.x+481,y:this.y+185},
      {x:this.x+488,y:this.y+175},
      {x:this.x+491,y:this.y+155},
      {x:this.x+486,y:this.y+142},
      {x:this.x+470,y:this.y+134},
      {x:this.x+476,y:this.y+122},
      {x:this.x+460,y:this.y+125},
      {x:this.x+463,y:this.y+120},
      {x:this.x+463,y:this.y+120},
      {x:this.x+455,y:this.y+125},
      {x:this.x+459,y:this.y+110},
      {x:this.x+455,y:this.y+107},
      {x:this.x+445,y:this.y+125},
      {x:this.x+440,y:this.y+125},
      {x:this.x+433,y:this.y+103},
      {x:this.x+433,y:this.y+103},
      {x:this.x+436,y:this.y+93},
      {x:this.x+432,y:this.y+85},
      {x:this.x+427,y:this.y+83},
      {x:this.x+418,y:this.y+50},
      {x:this.x+421,y:this.y+42},
      {x:this.x+415,y:this.y+39},
      {x:this.x+425,y:this.y+25},
      {x:this.x+422,y:this.y+13},
      {x:this.x+428,y:this.y+13},
      {x:this.x+431,y:this.y+10},
      {x:this.x+430,y:this.y+3},
      {x:this.x+425,y:this.y+3},
      {x:this.x+417,y:this.y+8},
      {x:this.x+408,y:this.y+2},
      {x:this.x+400,y:this.y+0},
      {x:this.x+391,y:this.y+4},
      {x:this.x+379,y:this.y+16},
      {x:this.x+372,y:this.y+13},
      {x:this.x+366,y:this.y+13},
      {x:this.x+362,y:this.y+21},
      {x:this.x+368,y:this.y+30},
      {x:this.x+373,y:this.y+30},
      {x:this.x+380,y:this.y+25},
      {x:this.x+386,y:this.y+36},
      {x:this.x+400,y:this.y+42},
      {x:this.x+403,y:this.y+103},
      {x:this.x+416,y:this.y+136},
      {x:this.x+409,y:this.y+136},
      {x:this.x+409,y:this.y+140},
      {x:this.x+398,y:this.y+142},
      {x:this.x+398,y:this.y+147},
      {x:this.x+350,y:this.y+162},
      {x:this.x+310,y:this.y+170},
      {x:this.x+220,y:this.y+173},
      {x:this.x+150,y:this.y+170},
      {x:this.x+125,y:this.y+164},
      {x:this.x+85,y:this.y+165},
      {x:this.x+35,y:this.y+175},
      {x:this.x+4,y:this.y+186},
      {x:this.x+2,y:this.y+190}
    ]
    var sides = game.collision.pointToSide(points)
    
    points.pop()
    
    return{p:points ,s:sides}
  }
}