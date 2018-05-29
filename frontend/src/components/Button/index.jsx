import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

const Button = ({ className, children, onClick }) => (
  <button className={`common-button ${className}`} onClick={onClick} >{children}</button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  children: '',
  onClick: () => {},
};

export default Button;