import React  from 'react';
import {Image, Card, List}  from 'semantic-ui-react';
import {defaultProps} from 'recompose';

const
	ItemTop = (props:{
		isFirst?: boolean,

		item: {
			name: string,
			icon: string,
			url: string,
			category: string,
		}
	}) => <List.Item as='li' className='itemTop'>
		<Card>
			<Card.Content>
				{props.isFirst &&
					<Image floated='left' src={props.item.icon} className='itemTop__image'/>
				}

				<Card.Header>{props.item.name}</Card.Header>
				<Card.Meta>{props.item.category}</Card.Meta>
			</Card.Content>
		</Card>
	</List.Item>;

export default defaultProps({
	isFirst: false,
})(ItemTop);
