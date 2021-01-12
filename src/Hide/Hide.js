import React, { Component } from 'react';
import './Hide.scss';

class Hide extends Component {

	state = {
		isActive:true
	}

	handleShow = ()=>{
		this.setState({
			isActive: true
		})
	}
  
	handleHide = () =>{
		this.setState({
			isActive: false
		})
	}

	render() {
		return (
		<div className="Hide">
				<button onClick={this.handleHide}>Hide text!</button>
				<button onClick={this.handleShow}>Show text!</button>
				{this.state.isActive ? <p>
					You can read this text,
					but if you click the button it should disappear. Forever.
				</p> : null}
		</div>
		)
	}
}

export default Hide;
