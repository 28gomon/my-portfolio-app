import React from 'react';
import './App.css';
import Wrapper from "./components/UI/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import { Switch, Route, withRouter, } from "react-router-dom";
import routes from "./app/routes/routes";
import Footer from "./components/Footer/Footer";

const App = (props) => {

	return (
		<div className={ 'App' }>

			<Header/>

			<Wrapper className={'main'}>

				<Switch>
					{
						routes.map((route, index) => {
							return (
								<Route
									key={index}
									path={route.path}
									component={route.component}
									exact={route.exact}
								/>
							)
						})
					}
				</Switch>

			</Wrapper>

			{ props.location.pathname !== '/' && <Footer/> }
		</div>
	);
}

export default withRouter(App);
