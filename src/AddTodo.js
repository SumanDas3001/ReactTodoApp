import React, { Component } from 'react';

class AddTodo extends Component {
 	 
 	hadleChange = (e) => {
 		console.log(e)
 	}

 	handleSubmit = (e) => {
 		e.preventDefault();
 	}


	render(){
		return(
			<div>
				<form>
					<label htmlFor="content">Content:</label>
					<input type="text" id="content" onChange={this.hadleChange}/>
					<button className='btn'>Submit</button>
				</form>
			</div>
		)
	}
}

export default AddTodo;
