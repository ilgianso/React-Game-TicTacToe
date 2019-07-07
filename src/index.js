import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class TicTacToe extends React.Component {
  state = {
    board: ["", "", "", "", "", "", "", "", ""],
    last: "X",
    finish: undefined
  };

  moveElement(index) {
    this.setState(
      {
        board: this.state.board.map((el, i) => {
          if (i == index && el !== "") {
            return el;
          }
          if (i == index) {
            if (this.state.last == "O") {
              this.setLast();
              return "X";
            } else {
              this.setLast();
              return "O";
            }
          } else {
            return el;
          }
        })
        //  last: this.state.last === 'X' ? 'O' : 'X'
      },
      this.checkWin
    );
  }
  checkWin() {
    const matrix = this.getBoardAsMatrix();
    if (
      matrix[0][0] === matrix[0][1] &&
      matrix[0][0] === matrix[0][2] &&
      matrix[0][0] !== ""
    ) {
      this.setState({
        finish: "Win"
      });
    } else if (
      matrix[1][0] === matrix[1][1] &&
      matrix[1][0] === matrix[1][2] &&
      matrix[1][0] !== ""
    ) {
      this.setState({
        finish: "Win"
      });
    } else if (
      matrix[2][0] === matrix[2][1] &&
      matrix[2][0] === matrix[2][2] &&
      matrix[2][0] !== ""
    ) {
      this.setState({
        finish: "Win"
      });
    } else if (
      matrix[0][0] === matrix[1][0] &&
      matrix[0][0] === matrix[2][0] &&
      matrix[0][0] !== ""
    ) {
      this.setState({
        finish: "Win"
      });
    } else if (
      matrix[0][1] === matrix[1][1] &&
      matrix[0][1] === matrix[2][1] &&
      matrix[0][1] !== ""
    ) {
      this.setState({
        finish: "Win"
      });
    } else if (
      matrix[0][2] === matrix[1][2] &&
      matrix[0][2] === matrix[2][2] &&
      matrix[0][2] !== ""
    ) {
      this.setState({
        finish: "Win"
      });
    } else if (
      matrix[0][0] === matrix[1][1] &&
      matrix[0][0] === matrix[2][2] &&
      matrix[0][0] !== ""
    ) {
      this.setState({
        finish: "Win"
      });
    } else if (
      matrix[2][0] === matrix[1][1] &&
      matrix[0][2] === matrix[0][2] &&
      matrix[2][0] !== ""
    ) {
      this.setState({
        finish: "Win"
      });
    } else {
      return;
    }
  }

  setLast() {
    this.setState({
      last: this.state.last === "X" ? "O" : "X"
    });
  }

  getBoardAsMatrix() {
    let boardNew = [...this.state.board];
    let arr = [];
    for (let i = 0; i < 3; i++) {
      let cutted = boardNew.splice(0, 3);
      arr.push(cutted);
    }
    return arr;
  }

  cellClick(index) {
    console.log(index);
    this.moveElement(index);
  }

  render() {
    return (
      <div className="container-square">
        {this.getBoardAsMatrix().map((row, y) => (
          <div className="row-box" key={y}>
            {row.map((cell, x) => (
              <div
                key={cell + x + y}
                className="square"
                onClick={() => this.cellClick(x + y * 3)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
        <div>{this.state.finish && <h2>Vinto</h2>}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TicTacToe />, rootElement);
