import React  from 'react';
import {Image, Card}  from 'semantic-ui-react';
import {Link} from 'react-router';
import {Grid, Button} from 'semantic-ui-react';
import {defaultProps} from 'recompose';

const
	Item = (props:{
		isAmount?: boolean,

		item: {
			name: string,
			icon: string,
			description: string,
			url: string,
			category: string,
			amount: number,
		}
	}) => <Grid.Column>
				<Card className='card'>
					<Link to={props.item.url} className='card__link'>
						<Image src={props.item.icon} className='card__image'/>
					</Link>

					<Card.Content>
						<Card.Header>
							{props.item.name}
						</Card.Header>

						<Card.Description>
							{props.item.category}
							{props.isAmount && (props.item.amount > 0
								? <p>{props.item.amount} руб.</p>
								: <p>Бесплатно</p>)}
						</Card.Description>
					</Card.Content>

					{props.isAmount && <Card.Content extra>
						{props.item.amount > 0
							? <Button className='card__button' basic color='green'>Купить</Button>
							: <Button className='card__button' basic color='green'>Загрузить</Button>}
					</Card.Content>}
				</Card>
			</Grid.Column>;

export default defaultProps({
	isAmount: false,
})(Item);
