import React from 'react'

function ClockHand(props) {
	
	const handStyle = {
		width: props.hand.length,
		height: props.hand.thickness,
		backgroundColor: props.hand.color,
		transformOrigin: 0,
		borderRadius: 25, 
		transform: `rotate(${props.hand.rot}deg)`
	}

	return(
		<div style={handStyle}></div>
		)
	}

	export default ClockHand;
