import React, {Component} from 'react';

const dimensions = [
{
	label: '3*3',
	value: 3
},
{
	label: '4*4',
	value: 4
},
{
	label: '5*5',
	value: 5
},
{
	label: '6*6',
	value: 6
},
]


class GameHome extends Component {

	selectionBox = () => {
		let options = [<option>choose a dimension</option>]
		for(let dim of dimensions) {
			options.push(<option value={dim.value}>{dim.label}</option>)
		}
		return (<select onSubmit={this.handleChange} onChange={this.handleChange}>{options}</select>)
	}

	handleChange = (e) => {
		e.preventDefault();
		this.props.setDimension(e.target.value)
	}

	render() {

		return(
		<div>
		<label>Select Game Dimension</label><br/>
		{this.selectionBox()}
		</div>
		)
	}
}

export default GameHome;