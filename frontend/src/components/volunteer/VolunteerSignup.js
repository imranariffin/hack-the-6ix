import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import URLS from '../../constants/urls.js';

const USER = {
	email: 'user@gmail.com',
	type: 'v',
	name: 'Bruce Wayne',
};

class VolunteerSignup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			loggedin: false,
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		console.log('VolunteerSignup.render()');

		if (this.props.authenticated()) {
			return <Redirect to={URLS.THANKYOU} />;
		}

		return (
			<div>
				<h2>Signup as a volunteer</h2>
				<form onSubmit={this.onSubmit}>
					<input 
						type='email' 
						name='email' 
						value={this.state.email} 
						onChange={this.handleChange} 
					/>
					<input 
						type='password' 
						name='password' 
						value={this.state.password} 
						onChange={this.handleChange} 
					/>
					<input type='submit' />
				</form>
			</div>
		);
	}

	onSubmit(event) {
		event.preventDefault();
		console.log('VolunteerSignup.onSubmit()');

		const email = this.state.email;
		const password = this.state.password;
		const firstName = this.state.firstName;
		const lastName = this.state.lastName;
		const phone = this.state.phone;
		const address = this.state.address;
		const languages = this.state.languages;

		if (true) {
			this.props.onSuccessSignup();
			return;
		}
	}

	handleChange(event) {
		const whichInput = event.target.name;
		this.setState({
			[whichInput]: event.target.value,
		});
	}
}

export default VolunteerSignup;