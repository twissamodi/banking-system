import React from 'react';
import './ErrorPage.css';
import PropTypes from 'prop-types';

function ErrorPage({ statusCode, PageStatus }) {
  return (
    <div className="not-found-container">
      Error
      {' '}
      {statusCode}
      <br />
      {PageStatus}
    </div>

  );
}
ErrorPage.propTypes = {
  statusCode: PropTypes.number.isRequired,
  PageStatus: PropTypes.string.isRequired,
};
export default ErrorPage;
