import React, {Component} from 'react';
// import { Link } from 'react-router-dom';

const volunteerThankyouMsg = "Thank you for joining us as vounteers";
const seniorThankyouMsg = "Thank you for choosing to use our service. We'll provide you with volunteers available to be at service";

class ThankYou extends Component {
	render() {
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