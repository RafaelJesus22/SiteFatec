/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Facebook, LinkedIn } from '../../assets/icons/icons';
import './styles.css';

export const Footer = (): JSX.Element => {
  return (
    <>
		<footer id="footer">
      <div className="footer-container grid">
				<div className="info">
					<p className="title">LOCALIZAÇAO</p>
					<p>Fatec - Faculdade de Tecnologia de Santana de Parnaíba</p>
					<p>
						Av. Tenente Marques, 5.136 - Fazendinha - Santana de Parnaíba/SP
					</p>
					<p>CEP: 06529-001 </p>
				</div>
				
				<div className="info">
					<p className='title'>CONTATO</p>
					<p>Tel: (11) 2424-2757</p>
					<p>Wattsapp: (11) 99386-8094</p>
					<p>Fatec.santana@fatec.sp.gov.br</p>
				</div>

				<div className="social">
					<p>Siga nos:</p>
					<div className="icons">
						<a href="https://www.facebook.com/">
							<img src={Facebook} alt="Facebook" />
						</a>
						<a href="https://www.linkedin.com/">
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
		<p className='grid name'>
			© Desenvolvido por Matheus Lima e Rafael Jesus
		</p>
	</div>
);
