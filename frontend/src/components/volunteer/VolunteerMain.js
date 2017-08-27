import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import URLS from '../../constants/urls.js';

const seniors = [1,2,3,4,5,6].map((e, i) => {
	return {
		id: i,
		name: `Senior ${i}`,
		help_needed: `Task ${i}`,
	};
});

class VolunteerMain extends Component {
	render() {
		console.log('VolunteerMain.render()');

		if (!this.props.authenticated()) {
			return <Redirect to={URLS.V_AUTH} />;
		}

		return (
			<ol>
				{
					seniors.map((senior) => { return (<li key={senior.id}>{senior.name}</li>); })
				}
			</ol>
		);
	}
}

export default VolunteerMain;