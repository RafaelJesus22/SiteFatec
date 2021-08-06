import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/Header/header";

import { Home } from './pages/Home/Home';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path='/' exact component={ Home }/>
      </Router>
    </div>
  );
}
