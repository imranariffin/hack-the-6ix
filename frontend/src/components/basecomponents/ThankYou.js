import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import URLS from '../../constants/urls';

const volunteerThankyouMsg = "Thank you for joining us as vounteers";
const seniorThankyouMsg = "Thank you for choosing to use our service. We'll provide you with volunteers available to be at service";

class ThankYou extends Component {
	render() {
		if (!this.props.authenticated()) {
			return <Redirect to={URLS.ROOT} />
		}

		console.log('ThankYou.render()');
		const thankyouMsg = this.props.isV()
			? volunteerThankyouMsg
			: seniorThankyouMsg;

		return (
			<h2>
				{thankyouMsg}
			</h2>
		);
	}
}

export default ThankYou;