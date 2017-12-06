import React from 'react';
import Banner from '../generic/Banner';
import UrlBlock from '../generic/UrlBlock';
import ListClassicApplication from '../generic/ListClassicApplication';
import ListNewApplication from '../generic/ListNewApplication';
import {Grid} from 'semantic-ui-react';

const
	Iphone = () => <div>
		<Banner />
		<div className='iphone'>
			<Grid>
				<Grid.Column width={12}>
					<ListNewApplication />
					<ListClassicApplication />
				</Grid.Column>
				<Grid.Column width={4}>
					<UrlBlock />
				</Grid.Column>
			</Grid>
		</div>
	</div>;

export default Iphone;