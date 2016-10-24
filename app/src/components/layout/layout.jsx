import React from 'react';
import { IntlProvider } from 'react-intl';
import List from '../list/list.jsx';
import listPokemon from '../../data'
	
const Layout = (props) => {

	const Locale = props.locale || 'en';
	const localeData = require(`./../../../public/locales/${Locale}.json`);
	
	return (
		<IntlProvider locale={Locale} messages={localeData}>
			<List list={ listPokemon } />
		</IntlProvider>	
	);
	
};

export default Layout;