import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

interface Props {
  Header: () => JSX.Element;
  Content: () => JSX.Element;
  isOpen: boolean;
  onClick: () => void;
}

export const Accordion: React.FC<Props> = ({
  Header,
  Content,
  isOpen,
  onClick,
}) => {
  const [contentHight, setContentHight] = useState('');
  const [containerHeight, setContainerHeight] = useState('');
  const [headerHeight, setHeaderHeight] = useState('');
  const conteinerHeightRef = useRef<HTMLDivElement>(null);
  const contentHeightRef = useRef<HTMLDivElement>(null);
  const headerHeightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const height = Number(headerHeightRef.current?.clientHeight) + Number(contentHeightRef.current?.clientHeight);
    setContentHight(`${conteinerHeightRef.current?.clientHeight}px`);
    setHeaderHeight(`${headerHeightRef.current?.clientHeight}px`);
    setContainerHeight(`${height}px`);
  }, []);

  return (
    <div
      className="accordion"
      ref={conteinerHeightRef}
      style={{ height: isOpen ? containerHeight : headerHeight }}
    >
      <div
        className="accordion-header"
        onClick={onClick}
        ref={headerHeightRef}
      >
        <Header />
      </div>
      <div
        style={{ height: isOpen ? `${contentHight}px` : '0px' }}
        className={`accordion-content ${isOpen ? 'animated' : ''}`}
      >
        <div ref={contentHeightRef}>
          <Content />
        </div>
      </div>
    </div>
  );
};