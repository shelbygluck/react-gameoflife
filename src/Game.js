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
        
        this.state = {
            cells: []
        }

        this.handleClick = this.handleClick.bind(this)
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

    handleClick(event) {
        //retrieve click position, convert to relative position, calculate rows/columns of cell being clicked
        const elemOffset = this.getElementOffset()
        const offsetX = event.clientX - elemOffset.x
        const offsetY = event.clientY - elemOffset.y
        const x = Math.floor(offsetX / CELL_SIZE)
        const y = Math.floor(offsetY / CELL_SIZE)

        //if the cell is within grid limits, reverse its boolean status
        if (x >= 0 && x <= this.columns && y >= 0 && y <= this.rows) {
            this.board[y][x] = !this.board[y][x]
        }

        this.setState({
            cells: this.makeCells()
        })
    }

    getElementOffset() {
        //calculate position of board element
        const rect = this.boardRef.getBoundingClientRect()
        //getBCR() returns size of element and its position relative to viewport
        const doc = document.documentElement

        return {
            x: (rect.left + window.pageXOffset) - doc.clientLeft,
            //element.clientLeft return width of left border of element in pixels
            y: (rect.top + window.pageYOffset) - doc.clientTop
        }
    }

    render() {
        const { cells } = this.state
        return (
            <div>
                <div className="Board" style={{ width: WIDTH, height: HEIGHT,
                backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}
                onClick={this.handleClick} ref={(n) => { this.boardRef = n}}>
                    {cells.map(cell => {
                        return <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`}/>
                    })}
                </div>
            </div>
        )
    }
}

class Cell extends React.Component {
    render() {
        const { x, y } = this.props
        return (
            <div className="Cell" style={{
                left: `${CELL_SIZE * x + 1}px`,
                top: `${CELL_SIZE * y + 1}px`,
                width: `${CELL_SIZE - 1}px`,
                height: `${CELL_SIZE - 1}px`
            }} />
        )
    }
}

export default Game