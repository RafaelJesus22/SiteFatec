/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react';
import { Container } from '../Container/Container';
import { SectionTitle } from '../SectionTitle/SectionTitle';

interface contentProps {
  children?: ReactNode;
  title: string;
  subtitle: string;
  isOnTop?: boolean;
}


export const Content = ({ 
  children,
  title,
  subtitle,
  isOnTop
 }: contentProps): JSX.Element => {
  return (
    <Container>
      <div className="grid">
        <div
          className="title-container"
          style={{ marginTop: isOnTop ? 150 : 0 }}
        >
          <SectionTitle 
            title={title}
            subtitle={subtitle}
          />
        </div>
        {children}
      </div>
    </Container>
  );
};
