import React from 'react';
import { Link } from 'react-router-dom';

const MyButton = ({ to, children}) => {
  return (
    <Link to={to}>
      {children}
    </Link>
  );
};

export default MyButton;


