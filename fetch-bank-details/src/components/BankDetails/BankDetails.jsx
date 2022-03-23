import React from 'react';
import PropTypes from 'prop-types';
import './BankDetails.css';

function BankDetails({ details }) {
  return (
    <div className="container details-container">
      <p className="details">
        <b>Bank Name:</b>
        {details.BANK}
      </p>
      <p className="details">
        <b>Branch Name:</b>
        {details.BRANCH}
      </p>
      <p className="details">
        <b>IFSC Code:</b>
        {details.IFSC}
      </p>
    </div>
  );
}
BankDetails.propTypes = {
  details: PropTypes.shape({
    BANK: PropTypes.string.isRequired,
    BRANCH: PropTypes.string.isRequired,
    IFSC: PropTypes.string.isRequired,
  }).isRequired,
};
export default BankDetails;
