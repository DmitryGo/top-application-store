// @flow
import React from 'react';
import './assets/index.css';
import TypeDevice from './generic/TypeDevice';

const
	App = (props: {
		children: mixed,
	}) => <div>
		<TypeDevice />
		{props.children}
		</div>;

export default App;
