/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export const Container: React.FC = (props: any) => {
  return <div className="container">{props.children}</div>;
};
