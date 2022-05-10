import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

interface Props {
  Header: () => JSX.Element;
  Content: () => JSX.Element | null;
  isOpen: boolean;
  onClick: () => void;
  zIndex?: number;
}

export const Accordion: React.FC<Props> = ({
  Header,
  Content,
  isOpen,
  onClick,
  zIndex,
}) => {
  const [containerHeight, setContainerHeight] = useState('');
  const [headerHeight, setHeaderHeight] = useState('');
  const conteinerHeightRef = useRef<HTMLDivElement>(null);
  const contentHeightRef = useRef<HTMLDivElement>(null);
  const headerHeightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const height = Number(headerHeightRef.current?.clientHeight) + Number(contentHeightRef.current?.clientHeight);
    setHeaderHeight(`${headerHeightRef.current?.clientHeight}px`);
    setContainerHeight(`${height}px`);
  }, []);

  return (
    <div
      className="accordion"
      ref={conteinerHeightRef}
      style={{ height: isOpen ? containerHeight : headerHeight, zIndex }}
    >
      <div
        className="accordion-header"
        onClick={onClick}
        ref={headerHeightRef}
      >
        <Header />
      </div>
      <div className={`accordion-content ${isOpen ? 'animated' : ''}`}>
        <div ref={contentHeightRef}>
          {Content && <Content />}
        </div>
      </div>
    </div>
  );
};