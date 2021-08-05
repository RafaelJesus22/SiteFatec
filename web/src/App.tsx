import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CallToMore } from "./components/CallToMore/CallToMore";
import { SectionTitle } from "./components/SectionTitle/SectionTitle";

import { Header } from "./components/Header/header";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div style={{ marginTop: 200 }}>
          <SectionTitle
            title={"A faculdade"}
            subtitle={"porque estudar com a gente"}
          />
        </div>
      </Router>
    </div>
  );
}
