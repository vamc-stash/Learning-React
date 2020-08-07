import React, {Component} from 'react';
import Square from './Square'

class Board extends Component {


	renderSquare = (i) => {
		return(
			<Square value={this.props.matrix[i]} onClick={()=>this.props.onClick(i)}/>
			)
	}

	createBoard = () => {
		const size = this.props.size;

		let board = [];
		for(let i=0; i<size*size; i+=size) {
			let row = [];
			for(let j=i; j<i+size; j++) {
				row.push(<td>{this.renderSquare(j)}</td>)
			}
			board.push(<tr>{row}</tr>)
		}
		return board;
	}


	render() {
		return(
		<table>
		{this.createBoard()}
		</table>
		)
	}
}

export default Board;