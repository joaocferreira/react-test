import React from 'react';
import { addLocaleData } from 'react-intl';

import Layout from './layout.jsx';

const LayoutContainer = React.createClass({

	render() {

		const Locale = this.props.route.locale || 'en';
		const LocalData = require(`react-intl/locale-data/${Locale}`);

		addLocaleData([...LocalData]);

		if (!window.Intl && typeof window.Intl !== "object") {

			require('intl');
			require(`intl/locale-data/jsonp/${Locale}.js`);

		}

		return (
			<Layout locale={Locale} children={this.props.children}/>
		);

	}

});

export default LayoutContainer;
