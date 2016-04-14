import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import Main from './app/main'
import Home from './app/home'
import Dashboard from './app/dashboard'
import Student from './app/student'
import Signin from './app/signin'

render((
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<Route path="/home" component={Home}/>
			<Route path="/dashboard" component={Dashboard}/>			
			<Route path="/student" component={Student}/>
			
		</Route>
		
		<Route path="/signin" component={Signin}/>
	</Router>

 ),document.getElementById('app'))