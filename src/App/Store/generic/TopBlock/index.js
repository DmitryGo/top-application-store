import _  from 'lodash';
import React  from 'react';
import {Divider, Icon, List} from 'semantic-ui-react';
import {connect} from 'react-redux';
import ItemTop from '../ItemTop';

const
  TopBlock = (props: {
		itemsFree: {},
		itemsPay: {},
	}) => <div className="urlBlock">
		<h1>ТОП ПЛАТНЫХ ПРИЛОЖЕНИЙ<Icon name="chevron right"/></h1>
		<Divider />

		<List as='ol' bulleted>
			{_.map(props.itemsPay, item => <ItemTop isFirst key={item.id} item={item} />).slice(0, 1)}
			{_.map(props.itemsPay, item => <ItemTop key={item.id} item={item} />).slice(1, 9)}
		</List>

		<h1>ТОП БЕСПЛАТНЫХ ПРИЛОЖЕНИЙ<Icon name="chevron right"/></h1>
		<Divider />

		<List as='ol' bulleted>
			{_.map(props.itemsFree, item => <ItemTop isFirst key={item.id} item={item} />).slice(0, 1)}
			{_.map(props.itemsFree, item => <ItemTop key={item.id} item={item} />).slice(1, 9)}
		</List>

	</div>;

export default connect(
	state => ({
		itemsFree: state.topApp.free,
		itemsPay: state.topApp.pay,
	})
)(TopBlock);
