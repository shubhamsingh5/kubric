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
        const { gameState } = this.state;
        if (gameState[row][col]) return;
        let newState = gameState;
        newState[row][col] = this.state.isX ? "X" : "O";
        // checkWinner(newState)
        this.setState({ gameState: newState, isX: !this.state.isX });
    };

    // checkWinner = (gameState) => {
    //     for (let i = 0; i < parseInt(this.boardSize); i++) {
    //         let prev = gameState[i][]
    //         for (let j = 0; j < parseInt(this.boardSize); j++) {
    //             if (gameState[i][j])
    //         }
    //     }
    // }

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
            <div>
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
                <p>{this.state.isX ? "Player X's turn" : "Player O's turn"}</p>
            </div>
        );
    }
}

export default Board;
