import React from 'react';
import { IntlProvider } from 'react-intl';

const Layout = (props) => {

	const Locale = props.locale || 'en';
	const localeData = require(`./../../../public/locales/${Locale}.json`);

	return (
		<IntlProvider locale={Locale} messages={localeData}>
			{props.children}
		</IntlProvider>
	);

};

export default Layout;
