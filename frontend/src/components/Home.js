import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
// import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const btnStyle = {
	// height: '100px',
	marginTop: '20px',
	marginBottom: '20px',
};

class Home extends Component {
	render() {
		console.log('Main.render()');
		return (
			<MuiThemeProvider>
				<div>
					<Row>
						<Col sm={12} md={12}>
							<Link to='/v'>
								<RaisedButton primary={true} style={btnStyle} label="Volunteer" fullWidth={true} />
							</Link>
						</Col>
						<Col sm={12} md={12}>
							<Link to='/s'>
								<RaisedButton primary={true} style={btnStyle} label="Senior" fullWidth={true} />
							</Link>
						</Col>
					</Row>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Home;