import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Switch} from 'react-router-dom';

// v COMPONENTS v
import App from './app.js';
import Main from './Index/main.js';
import ErrorPage from './page-not-found.js';
import Recipe from './Recipes/recipe.js';
import RecipeNav from './Recipes/recipe-nav.js';

// ^ COMPONENTS ^

export default class Root extends Component{


	


	render(){

		return(
			<Provider store={this.props.store}>
				<Router>
					<Switch>
						<Route exact path="/" component={Main} />

						<Route exact path="/Recipes" component={RecipeNav} />
						<Route path="/Recipes/:name" component={Recipe} />
						<Route path="*" component={ErrorPage} />
					</Switch>
				</Router>
			  </Provider>
			)

	}

}
