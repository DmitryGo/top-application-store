import React  from 'react';
import {Image}  from 'semantic-ui-react';
import {Link} from 'react-router'

const
	ItemBanner = (props:{
		item: {
			name: string,
			icon: string,
			url: string,
		}
	}) => <Link to="#">
		<Image className='listPopularApplication__image' src={props.item.icon}/>
	</Link>;

export default ItemBanner;
