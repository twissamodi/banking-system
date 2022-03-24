import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BankDetails from '../../components/BankDetails/BankDetails';
import NavBar from '../../components/NavBar/NavBar';
import './SearchByIFSCPage.css';
import makeRequest from '../../utils/makeRequest';
import { getBankDetails } from '../../constants/apiEndpoints';

function SearchByIFSCPage() {
  const navigate = useNavigate();
  const [IFSCValue, setIFSCValue] = useState('Enter IFSC Code');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [bankDetails, setBankDetails] = useState({});

  const handleError = (err) => {
    switch (err.response?.status) {
      case 404:
        navigate('/not-found');
        break;
      default: navigate('/internal-server-error');
        break;
    }
  };

  const handleIFSCChange = (event) => {
    setIFSCValue(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    makeRequest(getBankDetails(IFSCValue)).then((data) => {
      setBankDetails({
        ...data.bankDetails[0],
      });
      setIsButtonClicked(true);
    }).catch((err) => handleError(err));
  };
  return (
    <div className="homepage-content-container">
      <NavBar />
      <form className="container">
        <input className="ifsc-input" type="text" placeholder={IFSCValue} onChange={handleIFSCChange} />
        <button className="ifsc-submit" type="submit" onClick={handleClick}>Submit</button>
      </form>
      { isButtonClicked ? <BankDetails details={bankDetails} /> : React.Fragment}
    </div>
  );
}

export default SearchByIFSCPage;
