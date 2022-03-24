import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Sobre } from './pages/Sobre/Sobre';
import { Cursos } from './pages/Cursos/Cursos';
import { DetalhesCurso } from './pages/Cursos/DetalhesCurso';
import { Departamentos } from './pages/Departamentos/Departamentos';
import { Noticias } from './pages/Noticias/Noticias';
import { Alunos } from './pages/Alunos/Alunos';
import { Professores } from './pages/Professores/Professores';
import { PortalLogin } from './pages/Portal/Login';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" exact component={Sobre} />
        <Route path="/cursos" exact component={Cursos} />
        <Route path="/cursos/:curso" exact component={DetalhesCurso} />
        <Route path="/departamentos" exact component={Departamentos} />
        <Route path="/noticias" exact component={Noticias} />
        <Route path="/aluno" exact component={Alunos} />
        <Route path="/professores" exact component={Professores} />
        <Route path="/portal" exact component={PortalLogin} />
      </Router>
    </div>
  );
}
