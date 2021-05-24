let playButton = document.getElementById('play')
let levelButton = document.getElementById('level')
let howButton = document.getElementById('how')
let backButton = document.getElementById('back-button')

let levelDiv = document.getElementById('level-area')
let menuDiv = document.getElementById('menu')
let menuArea = document.getElementById('menu-area')
playButton.addEventListener('mouseover',function(){
  menuDiv.style.background = "url('../images/menu2.png')";

})
playButton.addEventListener('mouseout',function(){
  menuDiv.style.background = "url('../images/menu1.png')";

})


levelButton.addEventListener('mouseover',function(){
  menuDiv.style.background = "url('../images/menu3.png')";

})
levelButton.addEventListener('mouseout',function(){
  menuDiv.style.background = "url('../images/menu1.png')";

})
howButton.addEventListener('mouseover',function(){
  menuDiv.style.background = "url('../images/menu4.png')";

})
howButton.addEventListener('mouseout',function(){
  menuDiv.style.background = "url('../images/menu1.png')";

})

backButton.addEventListener('click',function(){
  levelDiv.style.display = 'none'
  menuArea.style.display = 'block'
})

levelButton.addEventListener('click',function(){
  levelDiv.style.display = 'block'
  menuArea.style.display = 'none'
})


function levelOne(){
  game.level = 0
  game.state = 1
  levelDiv.style.display = 'none'
}

function levelTwo(){
  game.level = 1
  game.state = 1
  levelDiv.style.display = 'none'
}
function levelThree(){
  game.level = 2
  game.state = 1
  levelDiv.style.display = 'none'
}
function levelFour(){
  game.level = 3
  game.state = 1
  levelDiv.style.display = 'none'
}