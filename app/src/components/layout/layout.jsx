import React from 'react';
import { IntlProvider } from 'react-intl';
import List from '../list/list.jsx';
import listPokemon from '../../data'
import Relay from 'relay';

class ListRoute extends Relay.Route{
	static routeName = 'List';
  static queries = {
    list: (Component) => Relay.QL`
        list {
          ${Component.getFragment('list')},
        }
    `,
  };
}

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