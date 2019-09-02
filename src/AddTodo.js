import React, { Component } from 'react';

class AddTodo extends Component {

	state = {
		content: ''
	}
 	 
 	hadleChange = (e) => {
 		this.setState({
 			content: e.target.value
 		})
 	}

 	handleSubmit = (e) => {
 		e.preventDefault();
 		this.props.addTodos(this.state);
 		this.setState({
 			content: ''
 		})
 	}


	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="content">Content:</label>
					<input type="text" id="content" onChange={this.hadleChange} value={this.state.content} />
					<button className='btn'>Submit</button>
				</form>
			</div>
		)
	}
}

export default AddTodo;
