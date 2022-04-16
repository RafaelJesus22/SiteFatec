/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../../contexts/authContext";
import { DashboardContainer } from "../../../components/containers/DashboardContainer";
import { PortalListContainer } from "../../../components/containers/PortalListContainer";
import { PortalListFilter } from "../../../components/molecules/PortalListFilter";
import { FiTrash2, FiEdit2 } from 'react-icons/fi'
import { DbProffessor } from "../../../types/IProfessor";

import './styles.css';
import { proffessorsService } from "../../../services";
import { useLoading } from "../../../contexts/loadingContent";

export type ProffessorParams = {
  proffessorId: string;
};

export const PortalProfessores: React.FC = () => {
  const [professores, setProfessores] = useState<DbProffessor[]>([]);
  const [listItems, setListItems] = useState<DbProffessor[]>([]);
  const [search, setSearch] = useState('');
  const history = useHistory();
  const { user } = useAuth();
  const { hideLoading, showLoading } = useLoading()

  const handlePressAdd = () => {
    history.push("professores/adicionar")
  }

  const handlePressEdit = (id: string) => {
    history.push(`professores/editar/${id}`)
  }

  const handlePressDelete = async (id: string) => {
    await proffessorsService.deleteProffessor(id);
    await getProffessors(true);
  }

  const getProffessors = useCallback(async (storaged?: boolean) => {
    showLoading();
    const proffesors = await proffessorsService.getProffessors(storaged);
    console.log('proffesors', proffesors);

    setProfessores(proffesors as DbProffessor[]);
    hideLoading();
  }, [hideLoading, showLoading]);

  const getClasses = (proffessor: DbProffessor) => {
    if (!proffessor.classes) {
      return;
    }
    return proffessor.classes.map(classe => classe.label).join(', ');
  };

  const handleProffessorDetails = (proffessorId: string) => {
    history.push(`professor/${proffessorId}`)
  }

  useEffect(() => {
    if (!user) {
      history.push("/portal");
    }

    getProffessors();
  }, [history, user]);

  useEffect(() => {
    if (search === '') {
      setListItems(professores);
    }

    const filtered = professores.filter(professor => {
      return professor.name.toLowerCase().startsWith(search.toLowerCase())
    });

    setListItems(filtered);
  }, [professores, search]);

  return (
    <DashboardContainer hasPadding>
      <header className="portal-page_header">
        <h1 className="title">Professores</h1>
      </header>

      <PortalListFilter
        onPressButton={handlePressAdd}
        inputValue={search}
        onChangeInput={setSearch}
        inputStyle={{ minWidth: '50%' }}
      />

      <PortalListContainer>
        <div className="portal-list_header">
          <p style={{ width: '35%' }}>
            Nome
          </p>
          <p style={{ width: '35%' }}>
            Email
          </p>
          <p style={{ width: '30%' }}>
            Cursos
          </p>
          <p style={{ width: '10%' }}>
            Ações
          </p>
        </div>
        <div className="portal-list_items">
          {listItems.length === 0 && (
            <h2>Nenhum professos encontrado</h2>
          )}
          {listItems.map(proffessor => (
            <div className="portal-list_item" key={proffessor.id}>
              <div style={{ width: '35%' }} onClick={() => handleProffessorDetails(proffessor.id || '')}>
                <p title={proffessor.name}>
                  {proffessor.name}
                </p>
              </div>
              <div style={{ width: '35%' }}>
                <p title={proffessor.email}>
                  {proffessor.email}
                </p>
              </div>
              <div style={{ width: '30%' }}>
                <p>
                  {getClasses(proffessor)}
                </p>
              </div>
              <div className="actions" style={{ width: '10%' }}>
                <FiEdit2
                  size={24}
                  className="icon"
                  onClick={() =>handlePressEdit(proffessor.id || '')}
                />
                <FiTrash2
                  size={24}
                  className="icon delete"
                  onClick={() => handlePressDelete(proffessor.id || '')}
                />
              </div>
            </div>
          ))}
        </div>
      </PortalListContainer>
    </DashboardContainer>
  );
};
