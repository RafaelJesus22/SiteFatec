import React from 'react';
import { Facebook, LinkedIn } from '../../../assets/icons/icons';
import './styles.css';

const FATEC_LINKEDIN_URL = 'https://www.linkedin.com/in/fatec-santana-de-parna%C3%ADba-fatecsdp-5baa86198/';
const FATEC_FACEBOOK_URL = 'https://www.facebook.com/fatecsdpoficial';

const MATHEUS_LINKEDIN_URL = 'https://www.linkedin.com/in/matheuslimar/';
const RAFAEL_LINKEDIN_URL = 'https://www.linkedin.com/in/rafaeljesuscm/';


export const Footer = (): JSX.Element => {
  return (
    <>
      <footer id="footer">
        <div className="footer-container">
          <div className="info">
            <p className="title">LOCALIZAÇÃO</p>
            <p>Fatec - Faculdade de Tecnologia de Santana de Parnaíba</p>
            <p>
              Av. Tenente Marques, 5.136 - Fazendinha - Santana de Parnaíba/SP
            </p>
            <p>CEP: 06529-001 </p>
          </div>

          <div className="info">
            <p className="title">CONTATO</p>
            <p>Tel: (11) 2424-2757</p>
            <p>WhatsApp: (11) 99386-8094</p>
            <p>E-mail: fatec.santana@fatec.sp.gov.br</p>
          </div>

          <div className="social">
            <p>Siga nos:</p>
            <div className="icons">
              <a href={FATEC_FACEBOOK_URL} target="_blank" rel="noreferrer">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href={FATEC_LINKEDIN_URL} target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <Devs />
    </>
  );
};

export const Devs: React.FC = () => (
  <div className="devs">
    <p className="grid name">
      © Desenvolvido por{' '}
      <a href={MATHEUS_LINKEDIN_URL} target="_blank" rel="noreferrer">Matheus Lima</a>{' e '}
      <a href={RAFAEL_LINKEDIN_URL} target="_blank" rel="noreferrer">Rafael Jesus</a>
    </p>
  </div>
);
