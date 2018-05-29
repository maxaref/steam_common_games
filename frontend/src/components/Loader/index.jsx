import React from 'react';
import './index.less';

const Loader = ({ className }) => (
  <div className={`common-loader ${className}`}>
    <div className="common-loader__spinner"></div>
  </div>
);

export default Loader;