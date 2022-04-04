/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BankDetails from '../../components/BankDetails/BankDetails';
import Dropdown from '../../components/Dropdown/Dropdown';
import NavBar from '../../components/NavBar/NavBar';
import { getBankName, getBranchNames, getIFSCCode } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();
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
        setSelectedBranch(data.bankBranches[0]);// jugaaaad!
      });
    }
  }, [selectedBank]);

  const handleError = (err) => {
    switch (err.response?.status) {
      case 404:
        navigate('/not-found');
        break;
      default: navigate('/internal-server-error');
        break;
    }
  };
  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };
  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
  };
  const handleClick = () => {
    makeRequest(getIFSCCode(selectedBank, selectedBranch)).then((data) => {
      const receivedDetails = data.ifsc[0];
      setBankDetails({
        BANK: receivedDetails.BANK,
        BRANCH: receivedDetails.BRANCH,
        IFSC: receivedDetails.IFSC,
        ADDRESS: receivedDetails.ADDRESS,
        CITY1: receivedDetails.CITY1,
        CITY2: receivedDetails.CITY2,
        STATE: receivedDetails.STATE,
        STD_CODE: receivedDetails.STD_CODE,
        PHONE: receivedDetails.PHONE,
      });
      setIsButtonClicked(true);
    }).catch((err) => handleError(err));
  };
  return (
    <div className="homepage-content-container">
      <NavBar />
      <div className="container">
        <Dropdown action="Select bank" options={bankNames} onChange={handleBankChange} />
        <Dropdown action="Select branch" options={branchNames} onChange={handleBranchChange} />
        <button className="dropdown-submit" type="submit" onClick={handleClick}>Submit</button>
      </div>
      {' '}
      {isButtonClicked ? <BankDetails details={bankDetails} /> : React.Fragment}
    </div>
  );
}
export default HomePage;
