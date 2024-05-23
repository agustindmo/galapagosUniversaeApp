import React from 'react';
import { HashLink } from 'react-router-hash-link';

const MySecondButton = ({ to, children}) => {
  return (
    <HashLink to={to}>
      {children}
    </HashLink>
  );
};

export default MySecondButton;
