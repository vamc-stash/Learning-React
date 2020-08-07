import React, {Component} from 'react';
import Board from './Board';
import GameHome from './GameHome';

function calculateWinner(matrix, size) {
	const arr = matrix.filter((a) => {
		return a;
	});

	let length = size*size-1;
	let array = Array(length).fill(0).map((_,index) => {
		return index+1;
	});

	if(JSON.stringify(arr) === JSON.stringify(array)){
		return true;
	}
	return false;
}

const shuffleArray = (size) => {
	let length = size*size-1;
	let myArray = Array(length).fill(0).map((_,index) => {
		return index+1;
	});
	myArray[length] = null; 
	myArray = myArray.sort(() => Math.random()-0.5)
	return myArray;
}

function Winner(props) {
	return(
		<div>
		<p>Game Over</p>
		<p>Score: {props.score}</p>
		<button onClick={props.onClick}>Restart</button>
		</div>
		)
}

const initialState = {
	size: null,
	matrix: null,
	noOfSteps: 0,
	gameStarted: false,
	gameStatus: false
}

class Game extends Component {

	state = initialState;

	componentDidUpdate() {
		if(this.state.gameStarted === false || this.state.gameStatus === true) 
			return;

		const winner = calculateWinner(this.state.matrix, this.state.size)
		if(winner) {
			this.setState({
				gameStatus: true
			});
		}
	}

	setDimension = (dimension) => {
		const size = parseInt(dimension)
		this.setState({
			size: size,
			matrix: shuffleArray(size),
			gameStarted: true
		})
	}

	handleClick = (i) => {
		const matrix = this.state.matrix;
		const size = this.state.size;

		if(matrix[i]==null)
			return;

		const row = Math.floor(i/size);
		const col = i%size; 

		if(col>0 && matrix[i-1]==null){
			[matrix[i],matrix[i-1]] = [matrix[i-1], matrix[i]]
		} else if(col<size-1 && matrix[i+1]==null) {
			[matrix[i],matrix[i+1]] = [matrix[i+1], matrix[i]]
		} else if(row>0 && matrix[i-size]==null) {
			[matrix[i],matrix[i-size]] = [matrix[i-size], matrix[i]]
		} else if(row<size-1 && matrix[i+size]==null) {
			[matrix[i],matrix[i+size]] = [matrix[i+size], matrix[i]]
		}


		this.setState({
			noOfSteps: this.state.noOfSteps + 1,
			matrix: matrix
		});		
	}

	restart = () => {
		this.setState(initialState)
	}

	render(){
		const matrix = this.state.matrix;

		return(
			<div>
			{!this.state.gameStarted && (<GameHome setDimension={this.setDimension} />)}

			{!this.state.gameStatus && (<Board size={this.state.size} matrix={matrix} onClick={this.handleClick}/>)}

			{this.state.gameStatus && (<Winner onClick={this.restart} score={this.state.noOfSteps}/>)}
			</div>
			)
		}
	}

	export default Game;