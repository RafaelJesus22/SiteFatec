import React from 'react';
import './styles.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = (props: SectionTitleProps): JSX.Element => {
  const { title, subtitle } = props;

  return (
    <div className="section-title">
      {subtitle && (
        <div className="subtitle-container">
          <h2 className="subtitle">{subtitle}</h2>
        </div>
      )}
      <div className="title-container">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
};
