import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import List from './components/list/list-container.jsx';
import LayoutContainer from './components/layout/layout-container.jsx';
import Relay from 'react-relay';

Relay.injectNetworkLayer(
	new Relay.DefaultNetworkLayer('http://localhost:8080/graphql')
);

const Locales = ['en', 'pt', 'es'];

ReactDOM.render((
	<Router history={browserHistory}>
		{
			Locales.map( function(locale) {
				return (
					<Route key={locale} path={'/'+ locale} component={LayoutContainer} locale={locale}>
						<IndexRoute component={List}/>
						{/*<Route path="pokemon/:id" component={pokemon}/>*/}
					</Route>
				);
			})
		}
	</Router>
), document.getElementById('root'));
