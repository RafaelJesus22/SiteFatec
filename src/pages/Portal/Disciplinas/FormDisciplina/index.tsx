import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FormInput } from "../../../../components/atoms/FormInput";
import { DashboardContainer } from "../../../../components/containers/DashboardContainer";
import { useAuth } from "../../../../contexts/authContext";
import { useLoading } from "../../../../contexts/loadingContent";
import { subjectService } from "../../../../services";
import { DbSubject, SubjectTheme } from "../../../../types/ICurso";
import { SubjectParams } from "..";
import { subjectTheme } from "../../../../config/styles";

import './styles.css';
import { SubjectThemeMarker } from "../../../../components/atoms/SubjectThemeMarker";
import { PortalContent } from "../../../../components/containers/PortalContent";
import { FormButton } from "../../../../components/atoms/PortalButton";

export const SubjectsForm = () => {
  const { hideLoading, showLoading } = useLoading();
  const { disciplinaId } = useParams() as SubjectParams;
  const [subject, setSubject] = useState<DbSubject>({} as DbSubject);
  const [theme, setTheme] = useState<SubjectTheme>({} as SubjectTheme);
  const history = useHistory();
  const { user } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { name, theme, weeklyClasses } = subject;
    if (!name || !weeklyClasses) {
      return window.alert('Preencha todos os campos obrigatórios!');
    };

    if (!theme) {
      return window.alert('Selecione a cor da disciplina no card da grade!');
    }

    showLoading({ message: 'Salvando informações' });

    if (disciplinaId) {
      await subjectService.updateSubject(subject);
    } else {
      await subjectService.createSubject(subject);
    }

    await subjectService.getSubjects(true);
    hideLoading();
    history.goBack();
  }

  const handleSelectTheme = (theme: SubjectTheme) => {
    setTheme(theme);
    setSubject({ ...subject, theme });
  }

  useEffect(() => {
    if (disciplinaId) {
      subjectService.getOneSubject(disciplinaId)
        .then(res => {
          setSubject(res as DbSubject);
          setTheme(res?.theme as SubjectTheme);
        });
    }
  }, [disciplinaId]);

  useEffect(() => {
    if (!user) {
      history.push("/portal");
    }
  }, [history, user]);

  return (
    <DashboardContainer hasPadding>
      <PortalContent showsBack>
        <form className="dashboard-form">
          <h1>
            {disciplinaId ? "Editar" : "Adicionar"} Disciplina
          </h1>
          <FormInput
            style={{ marginBottom: '1.5rem' }}
            required
            name="Nome *"
            value={subject.name}
            onChange={e => setSubject({ ...subject, name: e.target.value })}
          />
          <FormInput
            style={{ marginBottom: '1.5rem' }}
            required
            name="Aulas semanais *"
            type="number"
            value={subject.weeklyClasses}
            onChange={e => setSubject({ ...subject, weeklyClasses: e.target.value })}
          />

          <div className="form-input">
            <label>Cor do card na grade</label>
            <div style={{
              display: 'flex',
              marginTop: '0.5rem',
            }}>
              {subjectTheme.map((item) => (
                <SubjectThemeMarker
                  key={item.background}
                  cursorPointer
                  theme={item}
                  size={44}
                  onPress={handleSelectTheme}
                  selected={item === theme}
                />
              ))}
            </div>
          </div>

          <div className="form-button">
            <FormButton
              onClick={handleSubmit}
              title="Salvar"
            />
          </div>
        </form>
      </PortalContent>
    </DashboardContainer>
  );
};