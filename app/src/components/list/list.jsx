import React from 'react';
import { FormattedMessage } from 'react-intl';
import Relay from 'relay';

let List = (props) => {
	
	let list = props.list;
	
	return (
		<div>
			<FormattedMessage
				id={ 'header' }
				defaultMessage={ 'Merhaba {name}!' }
				values={{name: 'Joao'}}
			/>
			<h1>List</h1>
			<ul>
				{ list.map((item) => <ListItem item={item} />) }
			</ul>
		</div>	
	);
	
};

List = Relay.createContainer(List, {
	fragments: {
		list: () => Relay.QL`
			fragment on Query {
				pokemonAll {
					id,
					name,
					type
				}
			}
		`,
	},
});

const ListItem = (props) => {
	
	let item = props.item;
	
	return (
		<li key={ item.id }>
			<p> name: { item.name } </p>
			<p> type: { item.type } </p>
		</li>
	);

};

export default List;