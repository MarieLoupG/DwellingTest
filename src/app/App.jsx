
import { useState } from 'react';
import { FormForChecker } from './components/FormForChecker/FormForChecker';

import logo from './images/DwellingIconFilled.svg';
import './App.css';

const App = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  return (
    <div className={`App ${error ? 'error' : ""}`}>
        <div className="header">
          <div className="titleContainer">
            <h1>
              Balance checker 
            </h1>
            <a href="https://www.dwelling.co/" className="logoLink" target="_blank">
              <img src={logo} className="logo" alt="Dwelling Logo" title="Dwelling" />
            </a>
          </div>
          <div>
            Enter your card number to check it’s balance.
          </div>
        </div>
        <FormForChecker cardNumber={cardNumber} setCardNumber={setCardNumber} error={error} setError={setError} message={message} setMessage={setMessage} />
    </div>
  );
}

export default App;
