/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import BankDetails from '../../components/BankDetails/BankDetails';
import Dropdown from '../../components/Dropdown/Dropdown';
import NavBar from '../../components/NavBar/NavBar';
import {
  BANK_NAMES, BRANCH_NAMES_AKOLA, BRANCH_NAMES_ABHYUDAYA, BANK_DETAILS,
} from '../../constants/mockData';
import './HomePage.css';

function HomePage() {
  const [selectedBank, setSelectedBank] = useState('none');
  const [selectedBranch, setSelectedBranch] = useState('none');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };
  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
  };
  const handleClick = () => {
    setIsButtonClicked(true);
  };
  return (
    <div className="homepage-content-container">
      <NavBar />
      {isButtonClicked ? <BankDetails details={BANK_DETAILS} /> : (
        <div className="container">
          <Dropdown action="Select bank" options={BANK_NAMES} onChange={handleBankChange} />
          <Dropdown action="Select branch" options={selectedBank !== 'none' ? selectedBank === 'THE AKOLA DISTRICT CENTRAL COOPERATIVE BANK' ? BRANCH_NAMES_AKOLA : BRANCH_NAMES_ABHYUDAYA : []} onChange={handleBranchChange} />
          <button className="dropdown-submit" type="submit" onClick={handleClick}>Submit</button>
        </div>
      )}

    </div>
  );
}
export default HomePage;
