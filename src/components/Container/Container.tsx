import React from 'react';

interface ContainerProps {
  children?: React.ReactNode;
  backgroundColor?: string;
}

export const Container = (props: ContainerProps): JSX.Element => {
  return (
    <div
      className="container"
      style={{backgroundColor: props.backgroundColor}}
    >
      {props.children}
    </div>
  );
};
