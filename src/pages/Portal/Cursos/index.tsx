import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiTrash2, FiEdit2 } from 'react-icons/fi';

import { useAuth } from "../../../contexts/authContext";
import { useLoading } from "../../../contexts/loadingContent";
import { cursosService } from "../../../services";
import { DbCurso } from "../../../types/ICurso";

import { DashboardContainer } from "../../../components/containers/DashboardContainer";
import { PortalListContainer } from "../../../components/containers/PortalListContainer";
import { Modal } from "../../../components/molecules/Modal";
import { PortalListFilter } from "../../../components/molecules/PortalListFilter";

import './styles.css';

export type CursoParams = {
  cursoId: string;
};

export const PortalCourses: React.FC = () => {
  const [courses, setCourses] = useState<DbCurso[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<DbCurso>({} as DbCurso);
  const [listItems, setListItems] = useState<DbCurso[]>([]);
  const [modalDelete, setModalDelete] = useState(false);
  const [search, setSearch] = useState('');
  const history = useHistory();
  const { user } = useAuth();
  const { hideLoading, showLoading } = useLoading();

  const handlePressAdd = () => {
    history.push("cursos/adicionar")
  }

  const handlePressEdit = (id: string) => {
    history.push(`cursos/editar/${id}`)
  }

  const performDelete = async () => {
    setModalDelete(false);
    showLoading();

    await cursosService.deleteCourse(selectedCourse.id || '');

    hideLoading();
  };

  const getCourses = useCallback(async (storaged?: boolean) => {
    showLoading();
    const courses = await cursosService.getCourses(storaged);

    setCourses(courses as DbCurso[]);
    hideLoading();
  }, [hideLoading, showLoading]);

  const handleCourseDetails = (courseId: string) => {
    history.push(`curso/${courseId}`)
  }

  useEffect(() => {
    if (!user) {
      history.push("/portal");
    }

    getCourses();
  }, [history, user]);

  useEffect(() => {
    if (search === '') {
      setListItems(courses);
    }

    const filtered = courses.filter(course => {
      return course.name.toLowerCase().startsWith(search.toLowerCase())
    });

    setListItems(filtered);
  }, [courses, search]);

  return (
    <DashboardContainer hasPadding>
      <header className="portal-page_header">
        <h1 className="title">Cursos</h1>
      </header>

      <PortalListFilter
        onPressButton={handlePressAdd}
        inputValue={search}
        onChangeInput={setSearch}
        inputStyle={{ minWidth: '50%' }}
      />

      <PortalListContainer>
        <div className="portal-list_header">
          <p style={{ width: '60%' }}>
            Curso
          </p>
          <p style={{ width: '30%' }}>
            Período
          </p>
          <p style={{ width: '10%' }}>
            Ações
          </p>
        </div>
        <div className="portal-list_items">
          {listItems.length === 0 && (
            <h2>Nenhum curso encontrado</h2>
          )}
          {listItems.map(course => (
            <div className="portal-list_item" key={course.id}>
              <div style={{ width: '60%' }} onClick={() => handleCourseDetails(course.id || '')}>
                <p title={course.name} className="list-link">
                  {course.name}
                </p>
              </div>
              <div style={{ width: '30%' }}>
                <p>
                  {course.technicalDetails.timeCourse}
                </p>
              </div>
              <div className="actions" style={{ width: '10%' }}>
                <FiEdit2
                  size={24}
                  className="icon"
                  onClick={() => handlePressEdit(course.id || '')}
                />
                <FiTrash2
                  size={24}
                  className="icon delete"
                  onClick={() => {
                    setSelectedCourse(course);
                    setModalDelete(true);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <Modal
          visible={modalDelete}
          title="Excluir Curso"
          text="Tem certeza que deseja excluir este curso?"
          onClick={performDelete}
          onCancel={() => setModalDelete(false)}
          confirmButtonText="Excluir"
        />
      </PortalListContainer>
    </DashboardContainer>
  );
};
