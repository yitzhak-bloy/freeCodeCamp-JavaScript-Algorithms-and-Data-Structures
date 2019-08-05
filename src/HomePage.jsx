import React from 'react';
import { Link } from 'react-router-dom';
// import './HomePage.css';

function HomePage() {
  return (
    <div className="homePage">
      <div>
        <Link to='/PalindromeChecker' >PalindromeChecker</Link>
      </div>
      <Link to='/RomanNumeralConverter' >RomanNumeralConverter</Link>
      <div>
        <Link to='/CaesarsCipher' >CaesarsCipher</Link>
      </div>
      <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;