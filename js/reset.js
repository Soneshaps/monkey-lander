class Reset{
  constructor(){

  }
  update(){
    game.level = 0
    game.monkey.position = [
      {x:90,y:0},{x:90,y:0},{x:90,y:0},{x:190,y:0},{x:150,y:0},{}
    ]
    game.banana.position = [
      [
          {x:500,y:200},{x:800,y:200}
      ],
      [
          {x:100,y:250},{x:800,y:250}
      ] ,  
      [
        {x:60,y:295},{x:900,y:160},{x:650,y:360}
      ],
      [
        {x:60,y:120},{x:300,y:300},{x:610,y:380}
      ],
      [
        {x:60,y:120},{x:300,y:300},{x:610,y:380}
      ]      
    ]
    game.fruit.position = [
      [
        {x:500,y:250}
      ],
      [
        {x:500,y:250}
      ] ,  
      [
        {x:500,y:250}
      ],
      [
        {x:500,y:250}
      ],
      [
        {x:500,y:250}
      ]      
  ]

    game.monkeyLife.monkeyLeft = 3
    game.fuel.fuelHealth = 300;
    game.monkey.gravitySpeed = 0;
    game.monkey.horizontalSpeed = 0;
    game.monkey.verticalSpeed = 0;
    game.monkey.verticalSpeedFactor = 0.05
    game.monkey.horizontalSpeedFactor = 0.2
    game.monkey.canPlay = true
    paused = false
  }
}