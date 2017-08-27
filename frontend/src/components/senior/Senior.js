import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import SeniorMain from './SeniorMain';
import SeniorSignup from './SeniorSignup';

class Volunteer extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={SeniorMain}/>
					<Route path='/signup' component={SeniorSignup}/>
				</Switch>
			</div>
		);
	}
}

export default Volunteer;