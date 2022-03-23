import React, { useState } from 'react';
import BankDetails from '../../components/BankDetails/BankDetails';
import NavBar from '../../components/NavBar/NavBar';
import './SearchByIFSCPage.css';
import makeRequest from '../../utils/makeRequest';
import { getBankDetails } from '../../constants/apiEndpoints';

function SearchByIFSCPage() {
  const [IFSCValue, setIFSCValue] = useState('Enter IFSC Code');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [bankDetails, setBankDetails] = useState({});
  const handleIFSCChange = (event) => {
    setIFSCValue(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    makeRequest(getBankDetails(IFSCValue)).then((data) => {
      setBankDetails({
        ...data.bankDetails[0],
        IFSC: IFSCValue,
      });
    });
    setIsButtonClicked(true);
  };
  return (
    <div className="homepage-content-container">
      <NavBar />
      { isButtonClicked ? <BankDetails details={bankDetails} />
        : (
          <form className="container">
            <input className="ifsc-input" type="text" placeholder={IFSCValue} onChange={handleIFSCChange} />
            <button className="ifsc-submit" type="submit" onClick={handleClick}>Submit</button>
          </form>
        )}
    </div>
  );
}

export default SearchByIFSCPage;
