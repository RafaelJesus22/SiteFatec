import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FormInput } from "../../../components/atoms/FormInput";
import { FormSelect } from "../../../components/atoms/FormSelect";
import { DashboardContainer } from "../../../components/containers/DashboardContainer";
import { useAuth } from "../../../contexts/authContext";
import { useLoading } from "../../../contexts/loadingContent";
import { proffessorsService } from "../../../services";
import { DbProffessor } from "../../../types/IProfessor";
import { ProffessorParams } from "../Professores"; 

import './styles.css';

export const ProffessorsForm = () => {
  const { hideLoading, showLoading } = useLoading();
  const { proffessorId } = useParams() as ProffessorParams;
  const [proffessor, setProffessor] = useState<DbProffessor>({} as DbProffessor);
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

  useEffect(() => {
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
        <FormSelect
          style={{ marginBottom: '1.5rem' }}
          value={proffessor.classes}
          name="Cursos *"
          options={[
            { value: 'ADS', label: 'Análise e desenvolvimento de sistemas' },
            { value: 'SEGINFO', label: 'Segurança da informação' },
            { value: 'DATASCIENCE', label: 'Ciência de dados' },
            { value: 'GCOM', label: 'Gestão comercial' },
          ]}
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
          <button onClick={handleSubmit} >
            Salvar
          </button>
        </div>
      </form>
    </DashboardContainer>
  );
};