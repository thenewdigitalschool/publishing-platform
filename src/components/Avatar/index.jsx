import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Avatar = ({ src, alt }) => (
  <div className="Avatar">
    <img className="Avatar-image" src={src} alt={alt} />
  </div>
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default Avatar;
