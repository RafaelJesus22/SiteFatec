import React from 'react';
import './styles.css';

interface headerProps {

}

export const Header = (props: headerProps) => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="home-icon"></div>

        <nav>
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Cursos</a>
            </li>
            <li>
              <a href="#">Departamentos</a>
            </li>
            <li>
              <a href="#">Noticias</a>
            </li>
            <li>
              <a href="#">Aluno</a>
            </li>
            <li>
              <a href="#">Professor</a>
            </li>
            <li>
              <a href="#">Quero ser Fatec</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}