import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../../components/atoms/Button";
import { SearchInput } from "../../../components/atoms/SearchInput";
import { DashboardContainer } from "../../../components/containers/DashboardContainer";
import { PortalListContainer } from "../../../components/containers/PortalListContainer";
import { useAuth } from "../../../contexts/authContext";
import { db } from "../../../firebase";
import { DbProffessor } from "../../../types/IProfessor";

import { FiTrash2, FiEdit2 } from 'react-icons/fi'

import './styles.css';
import { CollectionsEnum } from "../../../enums/collections";
import { PortalListFilter } from "../../../components/molecules/PortalListFilter";

export const PortalProfessores: React.FC = () => {
  const [professores, setProfessores] = useState<DbProffessor[]>([]);
  const [search, setSearch] = useState('');
  const history = useHistory();
  const { user } = useAuth();

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
        onPressButton={() => history.push("professores/adicionar")}
        inputValue={search}
        onChangeInput={(value) => setSearch(value)}
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
