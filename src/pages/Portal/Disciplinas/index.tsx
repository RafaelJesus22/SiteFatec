/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../../contexts/authContext";
import { DashboardContainer } from "../../../components/containers/DashboardContainer";
import { PortalListContainer } from "../../../components/containers/PortalListContainer";
import { Modal } from "../../../components/molecules/Modal";
import { PortalListFilter } from "../../../components/molecules/PortalListFilter";
import { FiTrash2, FiEdit2 } from 'react-icons/fi'

import './styles.css';
import { subjectService } from "../../../services";
import { useLoading } from "../../../contexts/loadingContent";
import { DbSubject } from "../../../types/ICurso";

export type SubjectParams = {
  disciplinaId: string;
};

export const PortalSubjects: React.FC = () => {
  const [subjects, setSubjects] = useState<DbSubject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<DbSubject>({} as DbSubject);
  const [listItems, setListItems] = useState<DbSubject[]>([]);
  const [modalDelete, setModalDelete] = useState(false);
  const [search, setSearch] = useState('');
  const history = useHistory();
  const { user } = useAuth();
  const { hideLoading, showLoading } = useLoading()

  const handlePressAdd = () => {
    history.push("disciplinas/adicionar")
  }

  const handlePressEdit = (id: string) => {
    history.push(`disciplinas/editar/${id}`)
  }

  const performDelete = async () => {
    setModalDelete(false);
    showLoading();

    await subjectService.deleteSubject(selectedSubject.id || '');
    await getSubjects(true);

    hideLoading();
  };

  const getSubjects = useCallback(async (storaged?: boolean) => {
    showLoading();
    const subjects = await subjectService.getSubjects(storaged);
    console.log('subjects', subjects);

    setSubjects(subjects as DbSubject[]);
    hideLoading();
  }, [hideLoading, showLoading]);

  const handleSubjectDetails = (disciplinaId: string) => {
    history.push(`disciplina/${disciplinaId}`)
  }

  useEffect(() => {
    if (!user) {
      history.push("/portal");
    }

    getSubjects();
  }, [history, user]);

  useEffect(() => {
    if (search === '') {
      setListItems(subjects);
    }

    const filtered = subjects.filter(subject => {
      return subject.name.toLowerCase().startsWith(search.toLowerCase())
    });

    setListItems(filtered);
  }, [subjects, search]);

  return (
    <DashboardContainer hasPadding>
      <header className="portal-page_header">
        <h1 className="title">Disciplinas</h1>
      </header>

      <PortalListFilter
        onPressButton={handlePressAdd}
        inputValue={search}
        onChangeInput={setSearch}
        inputStyle={{ minWidth: '50%' }}
      />

      <PortalListContainer>
        <div className="portal-list_header">
          <p style={{ width: '55%' }}>
            Nome
          </p>
          <p style={{ width: '35%' }}>
            Aulas Semanais
          </p>
          <p style={{ width: '10%' }}>
            Ações
          </p>
        </div>
        <div className="portal-list_items">
          {listItems.length === 0 && (
            <h2>Nenhum disciplina encontrada</h2>
          )}
          {listItems.map(subject => (
            <div className="portal-list_item" key={subject.id}>
              <div style={{ width: '55%' }} onClick={() => handleSubjectDetails(subject.id || '')}>
                <p title={subject.name} className="list-link">
                  {subject.name}
                </p>
              </div>
              <div style={{ width: '35%' }}>
                <p title={String(subject.weeklyClasses)}>
                  {subject.weeklyClasses}
                </p>
              </div>
              <div className="actions" style={{ width: '10%' }}>
                <FiEdit2
                  size={24}
                  className="icon"
                  onClick={() =>handlePressEdit(subject.id || '')}
                />
                <FiTrash2
                  size={24}
                  className="icon delete"
                  onClick={() => {
                    setSelectedSubject(subject);
                    setModalDelete(true);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <Modal
            visible={modalDelete}
            title="Excluir disciplina"
            text="Tem certeza que deseja excluir esta disciplina?"
            onClick={performDelete}
            onCancel={() => setModalDelete(false)}
            confirmButtonText="Excluir"
          />
      </PortalListContainer>
    </DashboardContainer>
  );
};
