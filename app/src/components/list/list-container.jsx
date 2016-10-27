import React from 'react';
import List from './list.jsx';
import Relay from 'react-relay';

const ListContainer = React.createClass({

	render() {

		return (
			<Relay.RootContainer
				Component={List}
				route={ ListRoute }
				/>
		);

	}

});

var ListRoute = {
	name: 'ListQuery',
	params: {},
	queries: {
		pokemonAll: (Component) => Relay.QL`
			query List {
				pokemonAll {
					${Component.getFragment('pokemonAll')},
				}
			}
		`
	},
};

export default ListContainer;
