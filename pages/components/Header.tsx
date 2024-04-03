import React from 'react';

type Content = {
  [key: string]: any;
};

interface Props {
  content: Content | null;
}

const Header: React.FC<Props> = ({ content }) => {
  return (
    <header className="h-96 text-center mb-16 flex items-center justify-center">
      <div className="header-content">
        <h1 className="text-5xl font-bold mb-4">{content?.header.title}</h1>
        <p className="text-lg">{content?.header.subtitle}</p> 
        <a className="btn">{content?.header.buttonText}</a>
      </div>
    </header>
  );
}

export default Header;
