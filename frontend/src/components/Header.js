import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
	constructor(props) {
		super(props);

		this.logout = this.logout.bind(this);
	}

	render() {

		const LogoutButton = this.props.authenticated() 
			? (<Link to='#' onClick={this.logout}>Logout</Link>) 
			: null;

		return (
			<div>
				<Link to='/' >Home</Link>
				{ LogoutButton }
				<hr/>
			</div>
		);
	}

	logout() {
		if (true) {
			this.props.onSuccessLogout();
		}
	}
}

export default Header;