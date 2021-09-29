import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/Header/header';

import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Sobre } from './pages/Sobre/Sobre';
import { Cursos } from './pages/Cursos/Cursos';
import { Departamentos } from './pages/Departamentos/Departamentos';
import { Noticias } from './pages/Noticias/Noticias';
import { Alunos } from './pages/Alunos/Alunos';
import { Professores } from './pages/Professores/Professores';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/sobre" exact component={Sobre} />
        <Route path="/cursos" exact component={Cursos} />
        <Route path="/departamentos" exact component={Departamentos} />
        <Route path="/noticias" exact component={Noticias} />
        <Route path="/alunos" exact component={Alunos} />
        <Route path="/professores" exact component={Professores} />
        <Footer />
      </Router>
    </div>
  );
}
