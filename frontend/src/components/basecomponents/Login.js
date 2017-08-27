import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import URLS from '../../constants/urls.js';

const USER_EMAIL = 'user@gmail.com';
const PASSWORD = 'password';

const correctAuth = {
  email: USER_EMAIL,
  password: PASSWORD,
};

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleError = this.handleError.bind(this);
	}

	render() {
		console.log('Login.render()');

		if (this.state.errorMsg) {
			this.handleError(this.errorMsg);
		}

		const refUrl = this.props.whichUser === 'v'
			? URLS.V
			: URLS.S;
		const signupURl = this.props.whichUser === 'v'
			? URLS.V_AUTH_SIGNUP
			: URLS.S_AUTH_SIGNUP;

		if (this.props.authenticated()) {
			return (<Redirect to={refUrl} />);
		}

		return (
			<div>
				<h2>Login</h2>
				<Link to={signupURl} >signup</Link>
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
		console.log('Login.onSubmit()');

    const email = this.state.email;
		const password = this.state.password;

    if (email === correctAuth.email && password === correctAuth.password) {
      this.props.onSuccessLogin(correctAuth);
      return;
    }
	}

	handleChange(event) {
		const whichInput = event.target.name;
		this.setState({
			[whichInput]: event.target.value,
		});
	}

	/* error handling */
	handleError(errorMsg) {
		console.log(errorMsg);
		this.props.doneHandleError();
	}
}

export default Login;