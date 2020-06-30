import React, { Component } from "react";

class Board extends Component {
    constructor(props) {
        super(props);
        this.boardSize = props.match.params.boardSize;
    }

    render() {
        return (
            <div>
                {this.boardSize}
            </div>
        )
    }
}

export default Board;