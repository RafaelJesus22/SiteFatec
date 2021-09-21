import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface PrimaryButtonProps {
  title: string;
  to: string;
  containerStyle?: any;
}

export const PrimaryButton = (props: PrimaryButtonProps): JSX.Element => {
	const { title, to, containerStyle } = props;
	return (
		<Link to={to} className='link'>
			<div className='primary-button' style={containerStyle}>
				<p>{title}</p>
			</div>
		</Link>
	);
}; 