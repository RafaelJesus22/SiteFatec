/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import './styles.css';

export interface CursoCardProps {
  title: string;
  image: string;
}

export const CursoCard = (props: CursoCardProps): JSX.Element => {
	const {  title } = props;
	return (
		<div className="curso-card">
			<div className="curso-card__image">
				<img src={'https://images.unsplash.com/photo-1616004673271-d45d9d856715?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'} alt="Curso de React" className='c' />
			</div>
			<div className="curso-card__content">
				<h3
					className="curso-card__title"
					onClick={(): void => {}}>
					{title}
				</h3>
			</div>
		</div>
	);
};