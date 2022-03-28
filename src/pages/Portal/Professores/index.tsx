import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

import { CollectionsEnum } from "../../../enums/collections";
import { useAuth } from "../../../contexts/authContext";
import { DashboardContainer } from "../../../components/containers/DashboardContainer";
import { PortalListContainer } from "../../../components/containers/PortalListContainer";
import { PortalListFilter } from "../../../components/molecules/PortalListFilter";
import { FiTrash2, FiEdit2 } from 'react-icons/fi'
import { DbProffessor } from "../../../types/IProfessor";

import './styles.css';

export const PortalProfessores: React.FC = () => {
  const [professores, setProfessores] = useState<DbProffessor[]>([]);
  const [search, setSearch] = useState('');
  const history = useHistory();
  const { user } = useAuth();

  const handlePressAdd = () => {
    history.push("professores/adicionar")
  }

  const getProffessors = async () => {
    const professorsCollectionRef = collection(db, CollectionsEnum.proffessors);
    const proffesorsSnapshot = await getDocs(professorsCollectionRef);

    const proffesorsData = proffesorsSnapshot?.docs?.map(doc => {
      return { id: doc.id, ...doc.data() };
    })

    return setProfessores(proffesorsData as DbProffessor[]);
  }

  useEffect(() => {
    if (!user) {
      // history.push("/");
    }

    getProffessors();
  }, [user]);

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
          {professores.map(professor => (
            <div className="portal-list_item" key={professor.id}>
              <div style={{ width: '35%' }}>
                <p title={professor.name}>
                  {professor.name}
                </p>
              </div>
              <div style={{ width: '35%' }}>
                <p title={professor.email}>
                  {professor.email}
                </p>
              </div>
              <div style={{ width: '30%' }}>
                <p>
                  {professor.classes?.join(', ')}
                </p>
              </div>
              <div className="actions" style={{ width: '10%' }}>
                <FiEdit2 size={24} className="icon" />
                <FiTrash2 size={24} className="icon delete" />
              </div>
            </div>
          ))}
        </div>
      </PortalListContainer>
    </DashboardContainer>
  );
};
