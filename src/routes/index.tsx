import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Sobre } from '../pages/Sobre/Sobre';
import { Cursos } from '../pages/Cursos/Cursos';
import { DetalhesCurso } from '../pages/Cursos/DetalhesCurso';
import { Departamentos } from '../pages/Departamentos/Departamentos';
import { Noticias } from '../pages/Noticias/Noticias';
import { Alunos } from '../pages/Alunos/Alunos';
import { Professores } from '../pages/Professores/Professores';
import { PortalLogin } from '../pages/Portal/Login';
import { PortalDashboard } from '../pages/Portal/Dashboard';
import { AuthContext } from '../contexts/authContext';
import { PortalProfessores } from '../pages/Portal/Professores';
import { ProffessorsForm } from '../pages/Portal/FormProfessor';

export default function Routes(): JSX.Element {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log('user no routes', user);
  }, [user]);

  console.log(user);

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
        <Route path="/portal/dashboard" exact>
          {!!user ? <PortalDashboard /> : <Redirect to="/" />}
          <PortalDashboard />
        </Route>
        <Route path="/portal/dashboard/professores" exact component={PortalProfessores} />
        <Route path="/portal/dashboard/professores/adicionar" exact component={ProffessorsForm} />
        <Route path="/portal/dashboard/professores/editar/:proffessorId" exact component={ProffessorsForm} />
      </Router>
    </div>
  );
}
