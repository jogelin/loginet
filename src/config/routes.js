import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from '../components/App';
import AppBar from '../components/AppBar';
import Home from '../components/Home';

const routes  = (
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute components={{appbar:AppBar, main:Home}}/>
		</Route>
	</Router>
);

export default routes;
