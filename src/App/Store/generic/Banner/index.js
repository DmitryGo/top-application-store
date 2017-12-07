import _ from 'lodash'
import React  from 'react';
import Slider  from 'react-slick';
import {connect}  from 'react-redux';

const
  Banner = (props: {
  	images: {},
		itemType: string,
	}) => <div className='banner'>
		<Slider
			infinitie='true'
			autoplay='true'
			autoplaySpeed={5000}
			speed={500}
			slidesToShow={2}
			slidesToScroll={1}
		>

			{_.map(props.images, i => <div key={i.url}>
				<img alt={i.url} src={i.url} className="banner__image" size='big'/>
			</div>)}
		</Slider>
  </div>;

export default connect(
	(state, props) => ({
		images: _.get(state, `${props.itemType}.banner_image`),
	})
)(Banner);