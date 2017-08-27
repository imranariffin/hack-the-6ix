import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import VolunteerMain from './VolunteerMain';
import VolunteerAuth from './VolunteerAuth';

class Volunteer extends Component {
	render() {
		console.log('Volunteer.render()');
		
		return (
			<div>
				<Switch>
					<Route exact path='/v' render={ () => <VolunteerMain {...this.props} /> } />
					<Route path='/v/auth' render={ () => <VolunteerAuth {...this.props} /> } />
				</Switch>
			</div>
		);
	}
}

export default Volunteer;