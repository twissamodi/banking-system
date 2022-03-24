/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import './BankDetails.css';

function BankDetails({ details }) {
  return (
    <table className="container details-container">
      <tbody>
        {Object.keys(details).map((key, index) => (
          <tr key={index + 1}>
            <td className="table-keys" key={index}><b>{key}</b></td>
            <td className="table-values" key={index + 2}>{details[key]}</td>
          </tr>

        ))}
      </tbody>
    </table>
  );
}
BankDetails.propTypes = {
  details: PropTypes.shape({
    BANK: PropTypes.string.isRequired,
    BRANCH: PropTypes.string.isRequired,
    IFSC: PropTypes.string.isRequired,
    ADDRESS: PropTypes.string.isRequired,
    CITY1: PropTypes.string.isRequired,
    CITY2: PropTypes.string.isRequired,
    STATE: PropTypes.string.isRequired,
    // STD_CODE: PropTypes.number.isRequired,
    // PHONE: PropTypes.number.isRequired,
  }).isRequired,
};
export default BankDetails;
