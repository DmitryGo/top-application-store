import _  from 'lodash';
import React  from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {Image} from 'semantic-ui-react';
import ItemBanner from '../ItemBanner';

const
	ListPopularApplication = (props:{
		items: {},
		itemType: string,
		name: string,
	}) => <div>
		<h1>{props.name}</h1>

		<div className='listPopularApplication'>
			<Image.Group size='small' className='listPopularApplication__imageGroup'>
				{_.map(props.items, item => <ItemBanner
					key={item.id}
					item={item}
				/>).slice(0, 7)}
			</Image.Group>

			<Image.Group size='small' className='listPopularApplication__imageGroup'>
				{_.map(props.items, item => <ItemBanner
					key={item.id}
					item={item}
				/>).slice(8, 14)}
			</Image.Group>
		</div>
	</div>;

export default compose(
	connect(
		(state, props) => ({
			name : _.get(state, `${props.itemType}.popular.name`),
			items: _.get(state, `${props.itemType}.popular.data`),
		})
	)
)(ListPopularApplication);
