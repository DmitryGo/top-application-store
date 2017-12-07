import React from 'react';
import Banner from '../generic/Banner';
import UrlBlock from '../generic/UrlBlock';
import TopBlock from '../generic/TopBlock';
import ListClassicApplication from '../generic/ListClassicApplication';
import ListNewApplication from '../generic/ListNewApplication';
import ListInterestingApplication from '../generic/ListInterestingApplication';
import ListPopularApplication from '../generic/ListPopularApplication';
import ListFavoritesApplication from '../generic/ListFavoritesApplication';
import {Grid, Divider} from 'semantic-ui-react';

const
	Device = (props: {
		itemType: string
	}) => <div>
		<Banner itemType={props.itemType}/>
		<div className='iphone'>
			<Grid>
				<Grid.Column width={12}>
					<ListNewApplication itemType={props.itemType}/>
					<ListClassicApplication itemType={props.itemType}/>
					<ListInterestingApplication itemType={props.itemType}/>
					<ListPopularApplication itemType={props.itemType}/>
					<ListFavoritesApplication itemType={props.itemType}/>
				</Grid.Column>
				<Grid.Column width={4}>
					<UrlBlock />
					<Divider />
					<TopBlock />
				</Grid.Column>
			</Grid>
		</div>
	</div>;

export default Device;