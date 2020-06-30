import React from "react";

const Cell = (props) => {
    return (
        <button className="Cell" onClick={props.playTurn}>
            {props.value}
        </button>
    );
};

export default Cell;
