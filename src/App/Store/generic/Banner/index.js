import _ from 'lodash'
import React  from 'react';
import Slider  from 'react-slick';

const images = [
	'http://is1.mzstatic.com/image/thumb/Features111/v4/a5/da/02/a5da022a-b058-bf4e-dd3d-a9719dd14be4/source/1360x520fa.jpg',
	'http://is2.mzstatic.com/image/thumb/Features111/v4/92/6a/b2/926ab2f9-0aab-f9b6-1225-bf7f4e4fb86d/source/1360x520fa.jpg',
	'http://a2.mzstatic.com/us/r30/Features122/v4/b8/6a/64/b86a646e-aca5-3fe0-225d-41f8ee1abb86/flowcase_1360_520_2x.jpeg',
]

const
  Banner = () => <div className='banner'>
		<Slider
			infinitie='true'
			autoplay='true'
			autoplaySpeed={5000}
			speed={500}
			slidesToShow={2}
			slidesToScroll={1}
		>
			{_.map(images, i => <div key={i}>
				<img alt={i} src={i} className="banner__image" size='big'/>
			</div>)}
		</Slider>
  </div>;

export default Banner;