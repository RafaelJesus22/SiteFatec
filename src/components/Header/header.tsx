import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import './styles.css';

import { Logo, Menu } from '../../assets/icons/icons';

export const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { link: '/sobre', title: 'Sobre' },
    { link: '/cursos', title: 'Cursos' },
    { link: '/departamentos', title: 'Departamentos' },
    { link: '/noticias', title: 'Noticias' },
    { link: '/aluno', title: 'Aluno' },
    { link: '/professores', title: 'Professores' },
  ]

  return (
    <header className='header-container'>
      <div className='header-content grid'>
        <div className='home-icon'>
          <Link to={'/'}>
            <img src={Logo} alt='Fatec Santana de Parnaíba' />
          </Link>
        </div>

        <nav>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link className='link header-link' to={link.link}>
                  <p>{link.title}</p>
                </Link>
              </li>
            ))}
            <div className='cta'>
              <PrimaryButton to={'/'} title={'Quero ser Fatec'} />
            </div>
          </ul>
        </nav>
        <div className='menu' onClick={handleMenuClick}>
          <img src={Menu} alt='menu' />
        </div>
      </div>
    </header>
  );
};
