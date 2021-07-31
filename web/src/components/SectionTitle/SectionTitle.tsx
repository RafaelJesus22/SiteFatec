import React from 'react';
import './styles.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
  const { title, subtitle } = props;

  return (
    <div className='section-title'>
      {subtitle && <h2 className='subtitle'>{subtitle}</h2>}
      <h1 className='title'>{title}</h1>
    </div>
  );
};