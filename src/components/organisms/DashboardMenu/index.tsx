import { signOut } from 'firebase/auth';

import { Link, useHistory } from "react-router-dom";
import { FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';
import { CgFeed } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';

import LogoFatec from "../../../assets/icons/logo.svg";
import './styles.css';
import { auth } from '../../../firebase';
import { useState } from 'react';

const ICON_SIZE = 24;
const MENU_ITENS = [
  {
    label: 'Professores',
    icon: <FaChalkboardTeacher size={ICON_SIZE} color={"#415462"} />,
    route: '#',
  },
  {
    label: 'Eventos',
    icon: <CgFeed size={ICON_SIZE} color={"#415462"} />,
    route: '#',
  },
  {
    label: 'Cursos',
    icon: <FaGraduationCap size={ICON_SIZE} color={"#415462"} />,
    route: '#',
  },
]


export const DashboardMenu: React.FC = () => {
  const [activeItem, setActiveItem] = useState('');
  const history = useHistory();

  const logOut = async () => {
    await signOut(auth);
    history.push('/portal');
  }

  return (
    <div className="dashbard-menu">
      <header>
        <Link to="/portal/dashboard">
          <img src={LogoFatec} alt="Logotipo da Fatec Santana de Parnaíba" />
        </Link>
      </header>

      <section className="dashboard-menu_itens">
        <h3>Conteúdo</h3>
        <div className="dashboard-menu_itens_container">
          {MENU_ITENS.map(({ label, icon, route }) => (
            <div className={`dashboard-menu_item`} onClick={() => setActiveItem(label)}>
              <Link to={route} className={activeItem === label ? 'active' : ''}>
                {icon}
                <p>{label}</p>
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