import React from 'react';

import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import './styles.css';

import LogoFatec from '../../assets/logo.svg';


export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content grid">
        <div className="home-icon">
          <img src={LogoFatec} alt="Fatec Santana de Parnaíba" />
        </div>

        <nav>
          <ul>
            <li>
              <a className='link' href="/">
                <p>Sobre</p>
              </a>
            </li>
            <li>
              <a className='link' href="/">
                <p>Cursos</p>
              </a>
            </li>
            <li>
              <a className='link' href="/">
                <p>Departamentos</p>
              </a>
            </li>
            <li>
              <a className='link' href="/">
                <p>Noticias</p>
              </a>
            </li>
            <li>
              <a className='link' href="/">
                <p>Aluno</p>
              </a>
            </li>
            <li>
              <a className='link' href="/">
                <p>Professor</p>
              </a>
            </li>
            <PrimaryButton 
              to={'/'}
              title={'Quero ser Fatec'}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}
