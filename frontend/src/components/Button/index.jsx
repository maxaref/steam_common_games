import React from 'react';
import './index.less';

const Button = props => (
  <button {...props} className={`common-button ${props.className}`}></button>
);

export default Button;