import { signOut } from 'firebase/auth';

import { Link, useHistory } from "react-router-dom";
import { FaChalkboardTeacher, FaGraduationCap, FaUserGraduate } from 'react-icons/fa';
import { CgFeed } from 'react-icons/cg';
import { BiLogOut, BiHome,BiBuildings } from 'react-icons/bi';
import { ImFolderOpen } from 'react-icons/im';

import LogoFatec from "../../../assets/icons/logo.svg";
import './styles.css';
import { auth } from '../../../firebase';
import { useState } from 'react';

const ICON_SIZE = 24;
export const MENU_ITENS = [
  {
    label: 'Início',
    icon: <BiHome size={ICON_SIZE} color={"#415462"} />,
    route: '/portal/dashboard',
  },
  {
    label: 'Professores',
    icon: <FaChalkboardTeacher size={ICON_SIZE} color={"#415462"} />,
    route: '/portal/dashboard/professores',
  },
  {
    label: 'Eventos',
    icon: <CgFeed size={ICON_SIZE} color={"#415462"} />,
    route: '/portal/dashboard/eventos',
  },
  {
    label: 'Cursos',
    icon: <FaGraduationCap size={ICON_SIZE} color={"#415462"} />,
    route: '/portal/dashboard/cursos',
  },
  {
    label: 'Disciplinas',
    icon: <FaUserGraduate size={ICON_SIZE} color={"#415462"} />,
    route: '/portal/dashboard/disciplinas',
  },
  {
    label: 'Documentos',
    icon: <ImFolderOpen size={ICON_SIZE} color={"#415462"} />,
    route: '/portal/dashboard/documentos',
  },
  {
    label: 'Estágios',
    icon: <BiBuildings size={ICON_SIZE} color={"#415462"} />,
    route: '/portal/dashboard/estagios',
  },
]


export const DashboardMenu: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Início');
  const history = useHistory();

  const logOut = async () => {
    await signOut(auth);
    history.push('/portal');
  }

  return (
    <div className="dashbard-menu">
      <header>
        <Link to="/">
          <img src={LogoFatec} alt="Logotipo da Fatec Santana de Parnaíba" />
        </Link>
      </header>

      <section className="dashboard-menu_itens">
        <h3>Conteúdo</h3>
        <div className="dashboard-menu_itens_container">
          {MENU_ITENS.map(({ label, icon, route }) => (
            <div className={`dashboard-menu_item`} onClick={() => setActiveItem(label)}>
              <Link
                to={route}
                className={activeItem === label ? 'active' : ''}
                onClick={() => setActiveItem(label)}
              >
                <p>{label}</p>
                {icon}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <button onClick={logOut}>
          <BiLogOut size={ICON_SIZE * 0.75} color="#415462" />
          <p>Sair</p>
        </button>
      </footer>
    </div>
  );
}