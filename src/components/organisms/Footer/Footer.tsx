import React from 'react';
// import { Facebook, LinkedIn } from '../../../assets/icons/icons';
import { FaYoutube, FaFacebookSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import './styles.css';

const FATEC_LINKEDIN_URL = 'https://www.linkedin.com/in/fatec-santana-de-parna%C3%ADba-fatecsdp-5baa86198/';
const FATEC_FACEBOOK_URL = 'https://www.facebook.com/fatecsdpoficial';
const FATEC_YOUTUBE = 'https://www.youtube.com/channel/UCC9ZtMbAw--P4zyWY0YUgfQ';
const FATEC_LINK_WHATSAPP = 'https://api.whatsapp.com/send?phone=5511993868094'

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
            <p>WhatsApp: <a href={FATEC_LINK_WHATSAPP} target="_blank">(11) 99386-8094</a></p>
            <p>E-mail: <a href="mailto:fatec.santana@fatec.sp.gov.br">fatec.santana@fatec.sp.gov.br</a></p>
          </div>

          <div className="social">
            <p>Siga nos:</p>
            <div className="icons">
              <a href={FATEC_FACEBOOK_URL} target="_blank" rel="noreferrer">
                {/* <img src={Facebook} alt="Facebook" /> */}
                <FaFacebookSquare fill={'#fff'} size={'3rem'} className="facebook-icon" />
              </a>
              <a href={FATEC_LINKEDIN_URL} target="_blank" rel="noreferrer">
                {/* <img src={LinkedIn} alt="LinkedIn" /> */}
                <BsLinkedin fill={'#fff'} size={'3rem'} className="linkedin-icon" />
              </a>
              <a href={FATEC_YOUTUBE} target="_blank" rel="noreferrer">
                <FaYoutube fill={'#fff'} size={'3rem'} className="youtube-icon" />
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
