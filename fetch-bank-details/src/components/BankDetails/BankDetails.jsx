import React from 'react';
import PropTypes from 'prop-types';
import './BankDetails.css';

function BankDetails({ details }) {
  return (
    <div className="container details-container">
      {Object.keys(details).map((key) => (
        <p key={details[key]} className="details">
          <b>{key}</b>
          :
          {details[key]}
        </p>
      ))}

    </div>
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
