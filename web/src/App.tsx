import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { Header } from './components/Header/header';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
    </div>
  );
}
