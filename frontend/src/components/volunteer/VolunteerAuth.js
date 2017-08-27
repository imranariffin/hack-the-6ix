import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../basecomponents/Login';
import VolunteerSignup from './VolunteerSignup';
import URLS from '../../constants/urls';

class VolunteerAuth extends Component {
	render() {
		console.log('VolunteerAuth.render()');
		console.log(URLS.V_AUTH);
		console.log(URLS.V_AUTH_SIGNUP);

		return (
			<div>
				<Switch>
					<Route exact path={URLS.V_AUTH} render={ () => <Login {...this.props} whichUser={'v'} /> } />
					<Route path={URLS.V_AUTH_SIGNUP} render={ () => <VolunteerSignup {...this.props} /> } />
				</Switch>
			</div>
		);
	}
}

export default VolunteerAuth;