import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './Login';
import Logout from './Logout';
import Dashboard from './Dashboard';
import AddEvent from './AddEvents';
import Home from './Home';
import Signup from './Signup';

const ErrorPage = () => <div>Error 404</div>;

class App extends Component {

    render() {
		return (
      <BrowserRouter>
				<Switch>
					<Route exact path="/" component={ Home } />
					<Route exact path="/dashboard" component={ Dashboard } />
					<Route exact path="/addEvent" component={ AddEvent} />
					<Route exact path="/login" component={ Login } />
					<Route exact path="/signup" component={ Signup } />
					<Route exact path="/logout" component={ Logout } />
					<Route exact path="*" component={ ErrorPage } />
				</Switch>
			</BrowserRouter>
        )

    }
}

export default App;