import _  from 'lodash';
import React  from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import Item from '../Item';
import {Grid} from 'semantic-ui-react';
import ModalCategory from '../ModalCategory';

const
	ListClassicApplication = (props:{
		name: string,
		items: {},
	}) => <Grid>
		<Grid.Row>
			<Grid.Column textAlign='left' width={14}>
				<h1>{props.name}</h1>
			</Grid.Column>
			<Grid.Column textAlign='right' width={2}>
				<ModalCategory items={props.items} name={props.name}/>
			</Grid.Column>
		</Grid.Row>

		<Grid.Row columns={7}>
			{_.map(props.items, item => <Item key={item.id} item={item} />).slice(0, 7)}
		</Grid.Row>
	</Grid>;

export default compose(
	connect(
		state => ({
			name : state.iphoneApp.classic.name,
			items: state.iphoneApp.classic.data,
		})
	)
)(ListClassicApplication);
