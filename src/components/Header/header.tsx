import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import "./styles.css";

import { Logo, Menu } from "../../assets/icons/icons";

export const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="header-content grid">
        <div className="home-icon">
          <Link to={"/"}>
            <img src={Logo} alt="Fatec Santana de Parnaíba" />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link className="link header-link" to="/sobre">
                <p>Sobre</p>
              </Link>
            </li>
            <li>
              <Link className="link header-link" to="/cursos">
                <p>Cursos</p>
              </Link>
            </li>
            <li>
              <Link className="link header-link" to="/departamentos">
                <p>Departamentos</p>
              </Link>
            </li>
            <li>
              <Link className="link header-link" to="/noticias">
                <p>Noticias</p>
              </Link>
            </li>
            <li>
              <Link className="link header-link" to="/aluno">
                <p>Aluno</p>
              </Link>
            </li>
            <li>
              <Link className="link header-link" to="/professores">
                <p>Professor</p>
              </Link>
            </li>
            <div className="cta">
              <PrimaryButton to={"/"} title={"Quero ser Fatec"} />
            </div>
          </ul>
        </nav>
        <div className="menu" onClick={handleMenuClick}>
          <img src={Menu} alt="menu" />
        </div>
      </div>
    </header>
  );
};
