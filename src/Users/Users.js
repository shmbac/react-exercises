import React, { Component } from 'react';
import './Users.scss';

class Users extends Component {

	render() {
		return (
			<div className="Users">
				<h3>Users:</h3>
				<p>
					Use the following API to make a list of user names:<br />
					<code>https://my-json-server.typicode.com/evyros/react-exercises/users</code>
				</p>
				<ul>

				</ul>
			</div>
		)
	}
}

export default Users;
