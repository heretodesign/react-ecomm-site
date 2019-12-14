import React from 'react';

type JumbotronProps = {
  title: React.ReactNode;
  children: React.ReactNode;
}

export function Jumbotron({ title, children }: JumbotronProps) {
  return (
    <div className="jumbotron">
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}
