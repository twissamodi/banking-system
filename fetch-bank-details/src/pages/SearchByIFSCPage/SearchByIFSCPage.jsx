import React, { useState } from 'react';
import { BANK_DETAILS } from '../../constants/mockData';
import BankDetails from '../../components/BankDetails/BankDetails';
import NavBar from '../../components/NavBar/NavBar';
import './SearchByIFSCPage.css';

function SearchByIFSCPage() {
  const [IFSCValue, setIFSCValue] = useState('Enter IFSC Code');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleIFSCChange = (event) => {
    setIFSCValue(event.target.value);
  };
  const handleClick = () => {
    setIsButtonClicked(true);
  };
  return (
    <div className="homepage-content-container">
      <NavBar />
      { isButtonClicked ? <BankDetails details={BANK_DETAILS} />
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
