/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Container } from '../Container/Container'; 

export const Content: React.FC = (props: any) => {
  return (
    <Container>
      <div className="grid">
        {props.children}
      </div>
    </Container>
  );
};
