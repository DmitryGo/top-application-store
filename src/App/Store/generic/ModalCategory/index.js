import _  from 'lodash';
import React  from 'react';
import Item from '../Item';
import {Modal, Grid} from 'semantic-ui-react';

const
	ModalCategory = (props:{
		name: string,
		items: {},
	}) => <Modal trigger={<p>См. все ></p>} className='modal'>
		<Modal.Header>{props.name}</Modal.Header>
		<Modal.Content>
			<Modal.Description>
				<Grid divided='vertically'>
					<Grid.Row columns={5} className='modal__grid'>
						{_.map(props.items, item => <Item
							key={item.id}
							item={item}
							isAmount={true}
						/>)}
					</Grid.Row>
				</Grid>
			</Modal.Description>
		</Modal.Content>
	</Modal>;

export default ModalCategory;
