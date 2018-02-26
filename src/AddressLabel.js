import React from 'react';
import ReactDOM from 'react-dom';

function AddressLabel({ person }) {
  return (
    <div className="addressLabel">
      <p>{person.fullName}</p>
      <p>{person.addressLine1}</p>
      <p>{person.addressLine2}</p>
    </div>
  );
}

var testPerson = {
  fullName: "Dmitry K",
  addressLine1: "555 Born St.",
  addressLine2: "London, MA 02118"
}

export { AddressLabel, testPerson };
