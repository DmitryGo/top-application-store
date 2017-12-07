import React  from 'react';
import {Link} from 'react-router';
import {Divider, Grid, Icon} from 'semantic-ui-react';

const
  TopBlock = () => <div className="urlBlock">
		<h1>ТОП ПЛАТНЫХ ПРИЛОЖЕНИЙ<Icon name="chevron right"/></h1>
		<Divider />
		<Link to="#" className="urlBlock__link">Лучшие бесплатные приложения</Link><br/>

		<h1>ТОП БЕСПЛАТНЫХ ПРИЛОЖЕНИЙ<Icon name="chevron right"/></h1>
		<Divider />
		<Link to="#" className="urlBlock__link">Лучшие бесплатные приложения</Link><br/>
	</div>;

export default (TopBlock);
