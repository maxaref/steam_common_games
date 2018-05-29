import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

const Loader = ({ className }) => (
  <div className={`common-loader ${className}`}>
    <div className="common-loader__spinner"></div>
  </div>
);

Loader.propTypes = {
  className: PropTypes.string,
};

Loader.defaultProps = {
  className: '',
};

export default Loader;