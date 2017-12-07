import React  from 'react';
import {Link} from 'react-router';
import {Divider, Grid, Icon} from 'semantic-ui-react';

const
  UrlBlock = () => <div className="urlBlock">
		<h1>App Store <Icon name="chevron down"/></h1>
		<Link to="#" className="urlBlock__link">Все категории <Icon name="chevron down"/></Link>
		<h1>БЫСТРЫЕ ССЫЛКИ</h1>

		<Grid>
			<Grid.Row>
				<Grid.Column textAlign='left' width={8}>
					<Link to="#" className="urlBlock__link">Ввести код</Link>
				</Grid.Column>
				<Grid.Column textAlign='left' width={8}>
					<Link to="#" className="urlBlock__link">Учетная запись</Link>
				</Grid.Column>
				<Grid.Column textAlign='left' width={8}>
					<Link to="#" className="urlBlock__link">Поддержка</Link>
				</Grid.Column>
				<Grid.Column textAlign='left' width={8}>
					<Link to="#" className="urlBlock__link">О персонализации</Link>
				</Grid.Column>
			</Grid.Row>
		</Grid>

		<Divider />
		<Link to="#" className="urlBlock__link">Лучшие бесплатные приложения</Link><br/>
		<Link to="#" className="urlBlock__link">Выбор редакции</Link><br/>
		<Link to="#" className="urlBlock__link">Коллекция приложений</Link><br/>
		<Link to="#" className="urlBlock__link">Коллекция игр</Link><br/>
		<Link to="#" className="urlBlock__link">Образовательные коллекции</Link><br/>
		<Link to="#" className="urlBlock__link">Подписка на рассылки</Link><br/>
	</div>;

export default (UrlBlock);
