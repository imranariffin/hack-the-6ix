import React, {Component} from 'react';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	render() {
		console.log('Signup.render()');
		return (
			<div>
				<form onSubmit={() => { console.log('submitting'); }}>
					<input type='email' value={this.state.email} />
					<input type='password' value={this.state.password} />
					<input type='submit' />
				</form>
			</div>
		);
	}
}

export default Signup;