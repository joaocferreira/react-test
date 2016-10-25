import React from 'react';
import { IntlProvider } from 'react-intl';
import List from '../list/list.jsx';
import listPokemon from '../../data'
import Relay from 'relay';

var ListRoute = {
  queries: {
    list: () => Relay.QL`
      query { pokemonAll }
    `,
  },
  name: 'List',
};

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:8080')
);

const Layout = (props) => {

	const Locale = props.locale || 'en';
	const localeData = require(`./../../../public/locales/${Locale}.json`);
	
	return (
		<IntlProvider locale={Locale} messages={localeData}>
			<Relay.RootContainer
				Component={List}
				route={new ListRoute()}
			/>
		</IntlProvider>	
	);
	
};

export default Layout;