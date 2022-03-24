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
ErrorPage.defaultProps = {
  statusCode: 0,
  PageStatus: '',
};
ErrorPage.propTypes = {
  statusCode: PropTypes.number,
  PageStatus: PropTypes.string,
};
export default ErrorPage;
