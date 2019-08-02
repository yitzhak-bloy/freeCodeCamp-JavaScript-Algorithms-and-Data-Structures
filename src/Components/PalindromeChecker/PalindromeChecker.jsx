import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CheckerBox from '../checkerBox/checkerBox';

class PalindromeChecker extends Component {
  constructor() {
      super();
      this.state = {
        Sentence: '',
        IsItPalindrome: ''
      };
    }

  handleChange = (sentence) => {
    this.setState({ Sentence: sentence.target.value })
  }

  handleClick = () => {
    const alphanumeric = (this.state.Sentence.match(/[A-Za-z0-9]/g).join('').toLowerCase());
    const alphanumericInReverse = (alphanumeric.split('').reverse().join(''))
  
    this.setState({IsItPalindrome: alphanumeric === alphanumericInReverse}) 
  }

  render() {
    return (
      <div className="PalindromeChecker">
        <h1>Palindrome Checker</h1>
        <CheckerBox 
        handleChange={this.handleChange} 
        handleClick={this.handleClick} 
        sentenceWithinTheInputFrame='Write a statement to check'  WordWrittenInAButton='check' />
        { this.state.IsItPalindrome === true
          ? 
          <h1>It's a palindrome!</h1>
          : (
            this.state.IsItPalindrome === false
            ?       
              <h1>Sorry, that's not a palindrome.</h1>
            : <span>Enter some alpha-numeric characters</span>
            )
        }
        <div>
          <Link to='/' >HomePage</Link>
        </div>
      </div>
    );
  }
}

export default PalindromeChecker;
