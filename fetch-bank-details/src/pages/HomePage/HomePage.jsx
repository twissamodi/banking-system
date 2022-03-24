/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import BankDetails from '../../components/BankDetails/BankDetails';
import Dropdown from '../../components/Dropdown/Dropdown';
import NavBar from '../../components/NavBar/NavBar';
import { getBankName, getBranchNames, getIFSCCode } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest';
import './HomePage.css';

function HomePage() {
  const [selectedBank, setSelectedBank] = useState('none');
  const [selectedBranch, setSelectedBranch] = useState('none');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isBankInitialized, setIsBankInitialized] = useState(false);
  const [bankNames, setBankNames] = useState([]);
  const [branchNames, setBranchNames] = useState([]);
  const [bankDetails, setBankDetails] = useState({});
  useEffect(() => {
    if (!isBankInitialized) {
      makeRequest(getBankName).then((data) => {
        setBankNames(data.bankNames);
        setIsBankInitialized(true);
      });
    }
  }, [isBankInitialized]);
  useEffect(() => {
    if (selectedBank !== 'none') {
      makeRequest(getBranchNames(selectedBank)).then((data) => {
        setBranchNames(data.bankBranches);
      });
    }
  }, [selectedBank]);
  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };
  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
  };
  const handleClick = () => {
    makeRequest(getIFSCCode(selectedBank, selectedBranch)).then((data) => {
      setBankDetails({
        BANK: selectedBank,
        BRANCH: selectedBranch,
        IFSC: data.ifsc,
      });
      setIsButtonClicked(true);
    });
  };
  return (
    <div className="homepage-content-container">
      <NavBar />
      {isButtonClicked ? <BankDetails details={bankDetails} /> : (
        <div className="container">
          <Dropdown action="Select bank" options={bankNames} onChange={handleBankChange} />
          <Dropdown action="Select branch" options={branchNames} onChange={handleBranchChange} />
          <button className="dropdown-submit" type="submit" onClick={handleClick}>Submit</button>
        </div>
      )}
    </div>
  );
}
export default HomePage;
