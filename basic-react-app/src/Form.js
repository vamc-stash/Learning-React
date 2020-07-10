import React, {Component} from 'react'


class Form extends Component{

	initialState = {
		name : '',
		job : ''
	}

	state = this.initialState

	handleChange = (event) => {
		const {name, value} = event.target

		this.setState({
			[name]: value
		})
	}

	submitForm = () => {
		this.props.handleSubmit(this.state)
		this.setState(this.initialState)
	}

	afterSubmission = (event) => {
		event.preventDefault() //this method prevents default behaviour of form(Ex. Refreshing the page)
	}

	render(){
		const {name, job} = this.state

		return(
			<form onSubmit={this.afterSubmission}>
				<label htmlFor="name">Name</label><br/>
				<input type="text" name="name" id="name" value={name} onChange={this.handleChange}/><br/>
				<label htmlFor="job">Job</label><br/>
				<input type="text" name="job" id="job" value={job} onChange={this.handleChange}/><br/>
				<input type="submit" value="Submit" onClick={this.submitForm}/>
			</form>
			)
	}
}

export default Form;