import React from 'react';
import './App.css';
import Wrapper from "./components/UI/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/Main/HomePage/HomePage";
import About from "./components/Main/About/About";

const App = () => {
	return (
		<div className={ 'App' }>

			<Header/>

			<Wrapper className={'main'}>

				<Switch>
					<Route path={'/about'} render={() => <About/> }/>
					<Route exact path={'/'} render={() => <HomePage/> }/>
				</Switch>

			</Wrapper>

		</div>
	);
}

export default App;
