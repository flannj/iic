import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import {
  HashRouter as Router,
  Route,
  Link,
	hashHistory
} from 'react-router-dom'
import './stylesheets/index.scss'

window.React = React

render(
	<Router>
     <div className="container">
       <Route exact path="/" component={App}/>
     </div>
   </Router>,
	document.getElementById('react-container')
)
