import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import LayoutContainer from './components/layout/layout-container.jsx';

const Locales = ['en', 'pt', 'es'];

ReactDOM.render((
	<Router history={browserHistory}>
		{
			Locales.map( function(locale) {
				return (
					<Route key={locale} path={'/'+ locale} component={LayoutContainer} locale={locale}/>
				);
			})
		}	
	</Router>
), document.getElementById('root'));