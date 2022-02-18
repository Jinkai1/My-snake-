import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood, score } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
let add = 20
let speed = 4


function main(currentTime) {
    if (gameOver) {
        if (confirm(
            'Your snake length was ' + score +
            ' You lost. Press ok to restart. Press cancel to go to main menu.')) {
            window.location = './Easy.html'
        }
        else {
            window.location = './Menu.html'
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
        add += 20
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