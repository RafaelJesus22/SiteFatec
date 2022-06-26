import React, { useEffect } from 'react';
import { Footer } from '../../organisms/Footer/Footer';
import { Header } from '../../organisms/Header';

interface ContainerProps {
  children?: React.ReactNode;
  backgroundColor?: string;
}

export const Container = (props: ContainerProps): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header />
      <div
        className="container"
        style={{ backgroundColor: props.backgroundColor }}
      >
        {props.children}
      </div>
      <Footer />
    </div>
  );
};
