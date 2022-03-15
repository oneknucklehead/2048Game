import Grid from './Grid.js'
import Tile from './Tile.js'

const gameBoard = document.getElementById('board')

const grid = new Grid(gameBoard)
grid.randomEmptyCells().tile = new Tile(gameBoard)
grid.randomEmptyCells().tile = new Tile(gameBoard)
