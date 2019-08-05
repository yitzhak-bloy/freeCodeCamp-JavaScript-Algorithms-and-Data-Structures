import React, { Component } from 'react';
import CheckerBox from '../checkerBox/checkerBox';
import { Link } from 'react-router-dom';

class RomanNumeralConverter extends Component {
  constructor() {
      super();
      this.state = {
        Number: '',
        ThousandsRomanNumeral: '',
        HundredsRomanNumeral: '',
        DozensRomanNumeral: '',
        SingleRomanNumeral: '',
      };
    }

  handleChange = (sentence) => {
    this.setState({ Number: sentence.target.value })
  }

  handleClick = () => {
    const Thousands = Math.floor(this.state.Number/1000) * 1000;
    const Hundreds = Math.floor((this.state.Number-Thousands)/100) * 100;
    const Dozens = Math.floor((this.state.Number-Thousands-Hundreds)/10) * 10;
    const Single = Math.floor((this.state.Number-Thousands-Hundreds-Dozens)/1);

    switch (Thousands) {
      case 1000:
        this.setState({ ThousandsRomanNumeral: 'M' });
      break;
      case 2000:
        this.setState({ ThousandsRomanNumeral: 'MM' });      
        break;
      case 3000:
        this.setState({ ThousandsRomanNumeral: 'MMM' });      
        break;
      case 4000:
        this.setState({ ThousandsRomanNumeral: 'MMMM' });      
        break;
      case 5000:
        this.setState({ ThousandsRomanNumeral: 'MMMMM' });      
        break;
      case 6000:
        this.setState({ ThousandsRomanNumeral: 'MMMMMM' });      
        break;
      case 7000:
        this.setState({ ThousandsRomanNumeral: 'MMMMMMM' });      
        break;
      case 8000:
        this.setState({ ThousandsRomanNumeral: 'MMMMMMMM' }); 
        break;
      case 9000:
        this.setState({ ThousandsRomanNumeral: 'MMMMMMMMM' });
        break;
      default:
        this.setState({ ThousandsRomanNumeral: '' });
    }

    switch (Hundreds) {
      case 100:
        this.setState({ HundredsRomanNumeral: 'C' });      
        break;
      case 200:
        this.setState({ HundredsRomanNumeral: 'CC' });      
        break;
      case 300:
        this.setState({ HundredsRomanNumeral: 'CCC' });      
        break;
      case 400:
        this.setState({ HundredsRomanNumeral: 'CD' });      
        break;
      case 500:
        this.setState({ HundredsRomanNumeral: 'D' });     
        break;
      case 600:
        this.setState({ HundredsRomanNumeral: 'DC' });      
        break;
      case 700:
        this.setState({ HundredsRomanNumeral: 'DCC' });      
        break;
      case 800:
        this.setState({ HundredsRomanNumeral: 'DCCC' });      
        break;
      case 900:
        this.setState({ HundredsRomanNumeral: 'CM' });      
        break;
      default:
        this.setState({ HundredsRomanNumeral: '' });      
    }

    switch (Dozens) {
      case 10:
        this.setState({ DozensRomanNumeral: 'X' });      
        break;
      case 20:
        this.setState({ DozensRomanNumeral: 'XX' });      
        break;
      case 30:
        this.setState({ DozensRomanNumeral: 'XXX' });      
        break;
      case 40:
        this.setState({ DozensRomanNumeral: 'XL' });      
        break;
      case 50:
        this.setState({ DozensRomanNumeral: 'L' });      
        break;
      case 60:
        this.setState({ DozensRomanNumeral: 'LX' });      
        break;
      case 70:
        this.setState({ DozensRomanNumeral: 'LXX' });      
        break;
      case 80:
        this.setState({ DozensRomanNumeral: 'LXXX' });      
        break;
      case 90:
        this.setState({ DozensRomanNumeral: 'XC' });      
        break;
      default:
        this.setState({ DozensRomanNumeral: '' });      
    }

    switch (Single) {
      case 1:
        this.setState({ SingleRomanNumeral: 'I' });      
        break;
      case 2:
        this.setState({ SingleRomanNumeral: 'II' });      
        break;
      case 3:
        this.setState({ SingleRomanNumeral: 'III' });      
        break;
      case 4:
        this.setState({ SingleRomanNumeral: 'IV' });      
        break;
      case 5:
        this.setState({ SingleRomanNumeral: 'V' });      
        break;
      case 6:
        this.setState({ SingleRomanNumeral: 'VI' });      
        break;
      case 7:
        this.setState({ SingleRomanNumeral: 'VII' });     
        break;
      case 8:
        this.setState({ SingleRomanNumeral: 'VIII' });      
        break;
      case 9:
        this.setState({ SingleRomanNumeral: 'IX' });      
        break;
      default:
        this.setState({ SingleRomanNumeral: '' });      
    }  
  }

  render() {
    return (
      <div className="RomanNumeralConverter">
        <h1>Roman Numeral Converter</h1>
        <CheckerBox 
          handleChange={this.handleChange} 
          handleClick={this.handleClick}
          sentenceWithinTheInputFrame='Write a number to convert'  
          WordWrittenInAButton='convert'  
        />
        {
          this.state.ThousandsRomanNumeral.length + this.state.HundredsRomanNumeral.length + this.state.DozensRomanNumeral.length + this.state.SingleRomanNumeral.length
          ?
          <div>
            <h2> The number in Roman is: </h2>
            <h1>{this.state.ThousandsRomanNumeral + this.state.HundredsRomanNumeral + this.state.DozensRomanNumeral + this.state.SingleRomanNumeral}</h1>
          </div>
          :
          <span>Write down a number you want to convert to a Roman number</span>
        }
        <div>
          <Link to='/'>HomePage</Link>
        </div>
      </div>
    );
  }
}

export default RomanNumeralConverter;