import React, { Component } from "react";
import Cell from "./Cell";

import "./Board.css";

class Board extends Component {
    constructor(props) {
        super(props);
        this.boardSize = props.match.params.boardSize;
        this.state = {
            player: 1,
            gameState: Array(parseInt(this.boardSize))
                .fill()
                .map((row) => new Array(parseInt(this.boardSize)).fill()),
        };
    }

    handlePlayTurn = () => {
        // this.setState({player: })
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
        return (
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${parseInt(this.boardSize)}, 1fr)`,
                    gridGap: '0',
                    width: '100px'
                }}
            >
                {this.state.gameState.map((t, i) =>
                    t.map((u, j) => <Cell playTurn={this.handlePlayTurn} />)
                )}
            </div>
        );
    }
}

export default Board;
