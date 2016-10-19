import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

const Layout = (props) => {

	const Locale = props.locale || 'en';
	const localeData = require(`./../../../public/locales/${Locale}.json`);
	
	return (
		<IntlProvider locale={Locale} messages={localeData}>
			<FormattedMessage
				id={ 'header' }
				defaultMessage={ 'Merhaba {name}!' }
				values={{name: 'Joao'}}
			/>
		</IntlProvider>	
	);
	
};

export default Layout;