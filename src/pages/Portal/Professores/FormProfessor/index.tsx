/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FormInput } from "../../../../components/atoms/FormInput";
import { FormMultiSelect, Option } from "../../../../components/atoms/FormSelect";
import { DashboardContainer } from "../../../../components/containers/DashboardContainer";
import { useAuth } from "../../../../contexts/authContext";
import { useLoading } from "../../../../contexts/loadingContent";
import { cursosService, proffessorsService } from "../../../../services";
import { DbProffessor } from "../../../../types/IProfessor";
import { ProffessorParams } from "..";

import './styles.css';
import { FormButton } from "../../../../components/atoms/PortalButton";
import { PortalContent } from "../../../../components/containers/PortalContent";

export const ProffessorsForm = () => {
  const { hideLoading, showLoading } = useLoading();
  const { proffessorId } = useParams() as ProffessorParams;
  const [proffessor, setProffessor] = useState<DbProffessor>({} as DbProffessor);
  const [courses, setCourses] = useState<Option[]>([]);
  const history = useHistory();
  const { user } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { classes, email, name, lattes } = proffessor;
    if (!classes || classes.length === 0 || !email || !name || !lattes) {
      return window.alert('Preencha todos os campos obrigatórios');
    };

    if (!email.includes('@')) {
      return window.alert('Email inválido');
    }

    showLoading({ message: 'Salvando informações' });

    if (proffessorId) {
      await proffessorsService.updateProffessor(proffessor);
    } else {
      await proffessorsService.createProffessor(proffessor);
    }

    await proffessorsService.getProffessors(true);
    hideLoading();
    history.goBack();
  }

  const getCourses = async () => {
    showLoading({ message: 'Carregando cursos' });
    const courses = await cursosService.getCourses(true);
    setCourses(courses.map(c =>{
      return {
        label: c.name,
        value: c.id
      }
    }));
    hideLoading();
  };

  useEffect(() => {
    getCourses();
    if (proffessorId) {
      proffessorsService.getOneProfessor(proffessorId)
        .then(res => {
          if (res) {
            setProffessor(res);
          }
        });
    }
  }, [proffessorId]);

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
            {proffessorId && proffessor.name
              ? `Editar dados do professor: ${proffessor.name.split(' ')[0]} ${proffessor.name.split(' ')[1]}`
              : "Adicionar Professor"
            }
          </h1>
          <FormInput
            style={{ marginBottom: '1.5rem' }}
            required
            name="Nome *"
            value={proffessor.name}
            onChange={e => setProffessor({ ...proffessor, name: e.target.value })}
          />
          <FormInput
            style={{ marginBottom: '1.5rem' }}
            required
            name="Título *"
            placeholder="Ex: Prof. Dr."
            value={proffessor.title}
            onChange={e => setProffessor({ ...proffessor, title: e.target.value })}
          />
          <FormInput
            style={{ marginBottom: '1.5rem' }}
            type="email"
            required
            name="E-Mail *"
            value={proffessor.email}
            onChange={e => setProffessor({ ...proffessor, email: e.target.value })}
          />
          <FormInput
            style={{ marginBottom: '1.5rem' }}
            type="url"
            required
            name="Lattes *"
            value={proffessor.lattes}
            onChange={e => setProffessor({ ...proffessor, lattes: e.target.value })}
          />
          <FormMultiSelect
            style={{ marginBottom: '1.5rem' }}
            value={proffessor.classes}
            name="Cursos *"
            options={courses}
            onChange={(options) => setProffessor({ ...proffessor, classes: options })}
          />
          <div className="row">
            <FormInput
              type="url"
              name="URL da imagem"
              value={proffessor.imgUrl}
              onChange={e => setProffessor({ ...proffessor, imgUrl: e.target.value })}
            />
            <div style={{ width: '2rem' }} />
            <FormInput
              type="tel"
              name="WhatsApp"
              value={proffessor.whatsapp}
              onChange={e => setProffessor({ ...proffessor, whatsapp: e.target.value })}
            />
          </div>
          <div className="row">
            <FormInput
              type="url"
              name="LinkedIn"
              value={proffessor.linkedin}
              onChange={e => setProffessor({ ...proffessor, linkedin: e.target.value })}
            />
            <div style={{ width: '2rem' }} />
            <FormInput
              type="url"
              name="Github"
              value={proffessor.github}
              onChange={e => setProffessor({ ...proffessor, github: e.target.value })}
            />
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