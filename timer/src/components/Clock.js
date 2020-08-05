import React, {Component} from 'react'
import ClockHand from './ClockHand'

class Clock extends Component {

	state = {
  date: new Date()
	}

 componentDidMount() {
  this.timerId = setInterval(() => {
   this.tick()
  }, 1000)
 }

 componentWillUnmount() {
  clearInterval(this.timerId)
 }

 tick = () => {
  this.setState({
   date: new Date()
  })
 }

	render(){

  const time = this.state.date.toLocaleTimeString().split(':')
  const hourHand = {
   rot: time[0]*30,
   length: 100,
   thickness: 6,
   color: '#006600'
  }
  const minuteHand = {
   rot: time[1]*6,
   length: 200,
   thickness: 4,
   color: '#003399'
  }
  const secondHand = {
   rot: time[2]*6,
   length: 250,
   thickness: 2,
   color: '#ff0066'
  }

		return(
			<div className="clock">
    <ClockHand hand={hourHand}/>
    <ClockHand hand={minuteHand}/>
    <ClockHand hand={secondHand}/>
   </div>
   )
  }
 }

export default Clock;