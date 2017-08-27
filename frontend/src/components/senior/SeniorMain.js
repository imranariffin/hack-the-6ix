import React, {Component} from 'react';

const volunteers = [1,2,3,4,5,6].map((e, i) => {
	return {
		id: i,
		name: `Vounteer ${i}`,
		help_offered: `Task ${i}`,
	};
});

class SeniorMain extends Component {
	render() {
		return (
			<ol>
				{
					volunteers.map((v) => { return (<li key={v.id}>{v.name}</li>); })
				}
			</ol>
		);
	}
}

export default SeniorMain;