import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './index.js';

function Envelope({addressFrom, addressTo}) {
  return (
    <table>
    <tbody>
    <tr>
      <td>
        <p>{addressFrom.fullName}</p>
        <p>{addressFrom.address.line1}</p>
        <p>{addressFrom.address.line2}</p>
      </td>
      <td></td>
      <td><img src="favicon.ico" alt="stamp" /></td>
    </tr>
    <tr>
      <td></td>
      <td>
        <p>{addressTo.fullName}</p>
        <p>{addressTo.address.line1}</p>
        <p>{addressTo.address.line2}</p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    </tbody>
    </table>
  );
}

const personFrom = {
  fullName: "From Person",
  address: {
    line1: "456 FROM st.",
    line2: "From address line 456"
  }
}

const personTo = {
  fullName: "TO Person",
  address: {
    line1: "123 TO st.",
    line2: "TO address line 123"
  }
}

export { Envelope, personFrom, personTo };
