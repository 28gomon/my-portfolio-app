import React from 'react';
import './App.css';
import Wrapper from "./components/UI/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/Main/HomePage/HomePage";

const App = () => {
	return (
		<div className={ 'App' }>

			<Header/>

			<Wrapper className={'main'}>

				<Switch>
					<Route path={'/'} render={() => <HomePage/> }/>
				</Switch>

			</Wrapper>

		</div>
	);
}

export default App;
