import React from 'react';
import './assets/index.css';
import {compose, withHandlers, withState} from 'recompose';
import Device from './Device';
import { Button, Container } from 'semantic-ui-react';

const
	App = (props: {
		itemType: string,
		getIphone: Function,
		getIpad: Function,
		setItemType: Function,
		setActiveIphone: Function,
		activeIphone: boolean,
		setActiveIpad: Function,
		activeIpad: boolean,
	}) => <div>
		<Container className='deviceType' textAlign='center'>
			<Button.Group>
				<Button toggle active={props.activeIphone} onClick={props.getIphone}>iPhone</Button>
				<Button.Or />
				<Button toggle active={props.activeIpad} onClick={props.getIpad}>iPad</Button>
			</Button.Group>
		</Container>

		<Device itemType={props.itemType}/>
	</div>;

export default compose(
	withState('itemType', 'setItemType', 'iphoneApp'),
	withState('activeIphone', 'setActiveIphone', true),
	withState('activeIpad', 'setActiveIpad', false),

	withHandlers({
		getIphone: props => () => {
			props.setItemType('iphoneApp');
			props.setActiveIpad(!props.activeIpad);
			props.setActiveIphone(!props.activeIphone);
		},

		getIpad: props => () => {
			props.setItemType('ipadApp');
			props.setActiveIphone(!props.activeIphone);
			props.setActiveIpad(!props.activeIpad);
		},
	}),
)(App);
