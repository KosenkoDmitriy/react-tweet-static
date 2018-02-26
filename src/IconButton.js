import React from 'react';
import PropTypes from 'prop-types';

function IconButton({children}) {
  return (
    <button>
      <i className="fa fa-heart"/>
      {children}
    </button>
  );
}

IconButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default IconButton;
