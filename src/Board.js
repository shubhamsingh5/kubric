import React, { Component } from "react";
import Cell from "./Cell";

import "./Board.css";

class Board extends Component {
    constructor(props) {
        super(props);
        this.boardSize = props.match.params.boardSize;
        this.state = {
            isX: true,
            gameState: Array(parseInt(this.boardSize))
                .fill()
                .map((row) => new Array(parseInt(this.boardSize)).fill()),
        };
    }

    handlePlayTurn = (row, col) => {
        console.log(row, col);
        let newState = this.state.gameState;
        newState[row][col] = this.state.isX ? "X" : "O"
        this.setState({gameState: newState, isX: !this.state.isX})
    };

    getStyle = () => {
        return `{display: grid; grid-template-columns: repeat(${parseInt(
            this.boardSize
        )}, 1fr)}`;
    };

    render() {
        // let rows = this.state.gameState.map(
        //     function(row) {
        //         let columns = row.
        //     }
        // )
        let count = 0;
        return (
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${parseInt(
                        this.boardSize
                    )}, 1fr)`,
                    gridGap: "0",
                    width: "100px",
                }}
            >
                {this.state.gameState.map((t, i) =>
                    t.map((u, j) => (
                        <Cell
                            cellNum={count++}
                            playTurn={this.handlePlayTurn}
                            value={this.state.gameState[i][j]}
                            row={i}
                            col={j}
                        />
                    ))
                )}
            </div>
        );
    }
}

export default Board;
