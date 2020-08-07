import React from 'react';

function Square(props) {
	return(
		<div style={{cursor:"pointer"}} onClick={props.onClick}>{props.value}</div>
		)
	}

	export default Square;