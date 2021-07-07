import React from 'react';
import './new-wrapper.scss';

const newWrapper = (Component, className) => (props) =>
  (
    <div className={`wrapper ${className.join(' ')}`}>
      <Component {...props} />
    </div>
  );

export default newWrapper;
