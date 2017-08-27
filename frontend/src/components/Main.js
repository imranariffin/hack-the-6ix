import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Volunteer from './volunteer/Volunteer';
import Senior from './senior/Senior';
import ThankYou from './basecomponents/ThankYou';
import URLS from '../constants/urls';


class Main extends Component {
	render() {
		console.log('Main.render()');

		return (
			<div>
				<Switch>
					<Route exact path={URLS.ROOT} render={() => <Home {...this.props}/>}/>
					<Route path={URLS.V} render={() => <Volunteer {...this.props}/>}/>
					<Route path={URLS.S} render={() => <Senior {...this.props}/>}/>
					<Route path={URLS.THANKYOU} render={ () => <ThankYou {...this.props} /> } />
				</Switch>
			</div>
		);
	}
}

export default Main;