let playButton = document.getElementById('play')
let levelButton = document.getElementById('level')
let howButton = document.getElementById('how')
let backButton = document.getElementById('back-button')

let levelDiv = document.getElementById('level-area')
let menuDiv = document.getElementById('menu')
let menuArea = document.getElementById('menu-area')


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
  menuArea.style.display = 'block'

}

function levelTwo(){
  game.level = 1
  game.state = 1
  levelDiv.style.display = 'none'
  menuArea.style.display = 'block'

}
function levelThree(){
  game.level = 2
  game.state = 1
  levelDiv.style.display = 'none'
  menuArea.style.display = 'block'

}
function levelFour(){
  game.level = 3
  game.state = 1
  levelDiv.style.display = 'none'
  menuArea.style.display = 'block'

}