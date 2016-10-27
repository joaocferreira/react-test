import React from 'react';
import { FormattedMessage } from 'react-intl';
import Relay from 'react-relay';

let List = React.createClass({

	render() {
		let list = this.props.pokemonAll;

		return (
			<div>
				<FormattedMessage
					id={ 'header' }
					defaultMessage={ 'Merhaba {name}!' }
					values={{name: 'Joao'}}
				/>
				<h1>List</h1>
				<ul>
					{// list && list.map((item) => <ListItem item={item} />)
					}
						<li>{list.name}</li>
						<li>{list.type}</li>
				</ul>
			</div>
		);
	}
});

List = Relay.createContainer(List, {
	fragments: {
		pokemonAll: () => Relay.QL`
    	fragment on Pokemon @relay(plural: true) {
					id,
					name,
					type
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
