import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood, score } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
let add = 5
let speed = 5

let username1= "";
function main(currentTime) {
    if (gameOver) {
        if (confirm(
            
            'Your snake length was ' + score +
            ' You lost. Press ok to go to main menu.')) {
           username1 =  prompt("username :", "username")
           insertScore()
        }
        else {
            window.location = '../Menu2.html'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / speed) {
        return
    }

    if (score >= add) {
        speed += 1
        add += 5
    }

    lastRenderTime = currentTime
    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
    updateScore()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

function updateScore() {
    console.log(score)
}

function insertScore(){
    var jsondata = {"username": username1,"score": score};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://snakegame-a973.restdb.io/rest/username",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "620fab4534fd6215658587dd",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  
  console.log(response);
  window.location.href="../Menu2.html";
});
}
