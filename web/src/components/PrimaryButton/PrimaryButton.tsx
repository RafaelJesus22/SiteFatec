import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface PrimaryButtonProps {
  title: string;
  to: string;
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const { title, to } = props;
  return (
    <Link to={to} className='link'>
      <div className='primary-button'>
        <p>{title}</p>
      </div>
    </Link>
  );
} 