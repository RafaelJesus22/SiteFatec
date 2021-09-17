import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/Header/header';

import { Home } from './pages/Home/Home';
import { Footer, Devs } from './components/Footer/Footer';

export default function App(): JSX.Element {
	return (
		<div className="App">
			<Router>
				<Header />
				<Route path='/' exact component={ Home }/>
				<Footer />
				<Devs />
			</Router>
		</div>
	);
}
