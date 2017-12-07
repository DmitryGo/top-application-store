import React from 'react';
import { Button, Container, Divider } from 'semantic-ui-react';
import {Link} from 'react-router';
import {compose, withHandlers} from 'recompose';
import {connect} from 'react-redux';

const
	TypeDevice = (props: {
		getIphone: Function,
		getIpad: Function,
	}) => <div>
		<Divider />

		<Container textAlign='center'>
			<Button.Group>
				{/*<Link to="/iphone">*/}
					<Button primary onClick={props.getIphone}>iPhone</Button>
				{/*</Link>*/}
				<Button.Or />
				{/*<Link to="/ipad">*/}
					<Button onClick={props.getIpad}>iPad</Button>
				{/*</Link>*/}
			</Button.Group>
		</Container>

		<Divider />
	</div>;

export default compose(

)(TypeDevice);
