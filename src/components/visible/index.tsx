import React from 'react';

type params = {
  isVisible: boolean;
}

const Visible: React.FC<params> = ({ children, isVisible }) => {
  return (
    <div style={ { display: isVisible ? 'block' : 'none' } }>
      {children }
    </div>
  );
}

export default Visible;
