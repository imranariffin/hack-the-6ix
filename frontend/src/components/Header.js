import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const btnStyle = {
	margin: '10px',
};

class Header extends Component {
	constructor(props) {
		super(props);

		this.logout = this.logout.bind(this);
	}

	render() {

		const LogoutButton = this.props.authenticated() 
			? (<Link to='#' onClick={this.logout}>
					<RaisedButton style={btnStyle} primary={true} label="Logout" />
				</Link>) 
			: null;

		return (
			<MuiThemeProvider>
				<Toolbar>
					<ToolbarGroup>
						<Link to='/' >
							<RaisedButton style={btnStyle} primary={true} label="Home" />
						</Link>
						{ LogoutButton }
					</ToolbarGroup>
				</Toolbar>
			</MuiThemeProvider>
		);
	}

	logout() {
		if (true) {
			this.props.onSuccessLogout();
		}
	}
}

export default Header;