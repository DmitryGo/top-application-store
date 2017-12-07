// @flow
import React from 'react';
import './assets/index.css';
import {compose, withHandlers, withState} from 'recompose';
import Device from './Device';
import { Button, Container, Divider } from 'semantic-ui-react';

const
	App = (props: {
		itemType: string,
		getIphone: Function,
		getIpad: Function,
		setItemType: Function,
	}) => <div>
		<Divider />

		<Container textAlign='center'>
			<Button.Group>
				<Button primary onClick={props.getIphone}>iPhone</Button>
				<Button.Or />
				<Button onClick={props.getIpad}>iPad</Button>
			</Button.Group>
		</Container>

		<Divider />
		<Device itemType={props.itemType}/>
	</div>;

export default compose(
	withState('itemType', 'setItemType', 'iphoneApp'),

	withHandlers({
		getIphone: props => () => {
			props.setItemType('iphoneApp');
		},

		getIpad: props => () => {
			props.setItemType('ipadApp');
		},
	}),
)(App);
