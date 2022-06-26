import { Fragment, useContext, useEffect } from "react";
import { Redirect, Route } from 'react-router-dom';

import { PortalLogin } from '../../pages/Portal/Login';
import { PortalDashboard } from '../../pages/Portal/Dashboard';
import { PortalProfessores } from '../../pages/Portal/Professores';
import { ProffessorsForm } from '../../pages/Portal/Professores/FormProfessor';
import { ProffessorDetails } from '../../pages/Portal/Professores/DetalhesProfessor';
import { PortalSubjects } from '../../pages/Portal/Disciplinas';
import { SubjectsForm } from '../../pages/Portal/Disciplinas/FormDisciplina';
import { SubjectDetails } from '../../pages/Portal/Disciplinas/DetalhesDisciplina';
import { PortalCourses } from '../../pages/Portal/Cursos';
import { CoursesForm } from '../../pages/Portal/Cursos/FormCurso';
import { CourseDetails } from '../../pages/Portal/Cursos/DetalhesCurso';

import { PortalDocuments } from '../../pages/Portal/Documentos';
import { DocumentsForm } from '../../pages/Portal/Documentos/FormDocument';
import { PortalEvents } from '../../pages/Portal/Eventos';
import { EventForm } from '../../pages/Portal/Eventos/FormEvento';
import { EventDetails } from '../../pages/Portal/Eventos/DetalhesEvento';
import { PortalInternships } from '../../pages/Portal/Estagios';
import { InternshipsForm } from '../../pages/Portal/Estagios/FormInternship';
import { AuthContext } from "../../contexts/authContext";

export const PortalRoutes: React.FC = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
  }, [user]);
  
  return (
    <Fragment>
      <Route path="/portal" exact component={PortalLogin} />
      <Route path="/portal/dashboard" exact>
        {!!user ? <PortalDashboard /> : <Redirect to="/portal" />}
      </Route>
      <Route path="/portal/dashboard/professores" exact component={PortalProfessores} />
      <Route path="/portal/dashboard/professores/adicionar" exact component={ProffessorsForm} />
      <Route path="/portal/dashboard/professores/editar/:proffessorId" exact component={ProffessorsForm} />
      <Route path="/portal/dashboard/professor/:proffessorId" exact component={ProffessorDetails} />

      <Route path="/portal/dashboard/disciplinas" exact component={PortalSubjects} />
      <Route path="/portal/dashboard/disciplinas/adicionar" exact component={SubjectsForm} />
      <Route path="/portal/dashboard/disciplinas/editar/:disciplinaId" exact component={SubjectsForm} />
      <Route path="/portal/dashboard/disciplina/:disciplinaId" exact component={SubjectDetails} />

      <Route path="/portal/dashboard/cursos" exact component={PortalCourses} />
      <Route path="/portal/dashboard/cursos/adicionar" exact component={CoursesForm} />
      <Route path="/portal/dashboard/cursos/editar/:cursoId" exact component={CoursesForm} />
      <Route path="/portal/dashboard/curso/:cursoId" exact component={CourseDetails} />

      <Route path="/portal/dashboard/documentos" exact component={PortalDocuments} />
      <Route path="/portal/dashboard/documentos/adicionar" exact component={DocumentsForm} />

      <Route path="/portal/dashboard/estagios" exact component={PortalInternships} />
      <Route path="/portal/dashboard/estagios/adicionar" exact component={InternshipsForm} />

      <Route path="/portal/dashboard/eventos" exact component={PortalEvents} />
      <Route path="/portal/dashboard/eventos/adicionar" exact component={EventForm} />
      <Route path="/portal/dashboard/eventos/editar/:eventoId" exact component={EventForm} />
      <Route path="/portal/dashboard/evento/:eventoId" exact component={EventDetails} />
    </Fragment>
  )
}