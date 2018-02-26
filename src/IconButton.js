import React from 'react';

function IconButton({children}) {
  return (
    <button>
      <i class="fa fa-heart"/>
      {children}
    </button>
  );
}

export default IconButton;
