import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/Header/header';

import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Professores } from './pages/Professores/Professores';

export default function App(): JSX.Element {
	return (
		<div className="App">
			<Router>
				<Header />
				<Route path='/professores' exact component={ Professores }/>
				<Route path='/' exact component={ Home }/>
				<Footer />
			</Router>
		</div>
	);
}
