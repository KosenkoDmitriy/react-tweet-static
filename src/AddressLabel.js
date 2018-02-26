import React from 'react';
import PropTypes from 'prop-types';


function AddressLabel({ person }) {
  const {fullName, address} = person;
  return (
    <div className="addressLabel">
      <p>{fullName}</p>
      <p>{address.line1}</p>
      <p>{address.line2}</p>
    </div>
  );
}
AddressLabel.propTypes = {
  person: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    address: PropTypes.shape({
      line1: PropTypes.string.isRequired,
      line2: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

var testPerson = {
  fullName: "Dmitry K",
  address: {
    line1: "555 Born St.",
    line2: "London, MA 02118"
  }
}


export { AddressLabel, testPerson };
