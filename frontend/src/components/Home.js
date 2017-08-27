import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		console.log('Main.render()');
		return (
			<div>
				<span>{'Are you senior or volunteer?'}</span>
				<Link to='/v'><button>Volunteer</button></Link>
				<Link to='/s'><button>Senior</button></Link>
			</div>
		);
	}
}

export default Home;