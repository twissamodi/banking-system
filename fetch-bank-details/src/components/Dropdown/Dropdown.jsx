import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

function Dropdown({
  action, options, onChange,
}) {
  return (
    <form className="dropdown-container">
      <select className="dropdown-select" defaultValue={action} onChange={onChange}>
        <option value={action} disabled>{action}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </form>
  );
}
export default Dropdown;

Dropdown.propTypes = {
  action: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onChange: PropTypes.func.isRequired,
};
