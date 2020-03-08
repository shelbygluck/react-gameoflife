import React from 'react'
import './Game.css'

const CELL_SIZE = 20
const WIDTH = 800
const HEIGHT = 600

class Game extends React.Component {
    constructor() {
        super()
        this.rows = HEIGHT/CELL_SIZE
        this.columns = WIDTH/CELL_SIZE
        this.board = this.makeEmptyBoard()

        state = {
            cells: []
        }
    }

    makeEmptyBoard() {
        let board = []
        for (let y = 0; y < this.rows; y++) {
            board[y] = []
            for (let x = 0; x < this.columns; x++) {
                board[y][x] = false
            }
        }
        return board
    }

    makeCells() {
        let cells = []
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {
                if (this.board[y][x]) {
                    cells.push({x,y})
                }
            }
        }
    }

    render() {
        return (
            <div>
                <div className="Board" style={{ width: WIDTH, height: HEIGHT,
                backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px` }}>
                </div>
            </div>
        )
    }
}

export default Game