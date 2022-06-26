import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Sobre } from '../pages/Sobre';
import { Cursos } from '../pages/Cursos/Cursos';
import { DetalhesCurso } from '../pages/Cursos/DetalhesCurso';
import { Departamentos } from '../pages/Departamentos/Departamentos';
import { Noticias } from '../pages/Noticias';
import { Alunos } from '../pages/Alunos';
import { Professores } from '../pages/Professores/Professores';
import { PerguntasFrequentes } from '../pages/PerguntasFrequentes';
import { Documentos } from '../pages/Documentos';
import { NewsDetail } from '../pages/Noticias/DetalhesNoticial';
import { PortalRoutes } from './PortalRoutes';


export default function Routes(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sobre" exact component={Sobre} />
          <Route path="/cursos" exact component={Cursos} />
          <Route path="/cursos/:curso" exact component={DetalhesCurso} />
          <Route path="/departamentos" exact component={Departamentos} />
          <Route path="/noticias" exact component={Noticias} />
          <Route path="/noticias/:noticiaId" exact component={NewsDetail} />
          <Route path="/alunos" exact component={Alunos} />
          <Route path="/professores" exact component={Professores} />
          <Route path="/documentos" exact component={Documentos} />
          <Route path="/quero_ser_fatec" exact component={PerguntasFrequentes} />
          <PortalRoutes />
        </Switch>
      </Router>
    </div>
  );
}
