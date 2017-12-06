import React from 'react';
import { Button, Container, Divider } from 'semantic-ui-react';
import { Link } from 'react-router';

const
	TypeDevice = () => <div>
		<Divider />

		<Container textAlign='center'>
			<Button.Group>
				<Link to="/iphone">
					<Button primary>iPhone</Button>
				</Link>
				<Button.Or />
				<Link to="/ipad">
					<Button>iPad</Button>
				</Link>
			</Button.Group>
		</Container>

		<Divider />
	</div>;

export default (TypeDevice);
