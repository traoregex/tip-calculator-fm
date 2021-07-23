
import './App.scss';
import BillBox from './BillBox';
import PeopleBox from './PeopleBox';
import RatioList from './RatioList';
import ScreenDisplay from './ScreenDisplay';
import React, { useState } from 'react';

function App() {

  const [tip, setTip] = useState('0.00');
  const [total, setTotal] = useState('0.00');
  const [dataInput] = useState({ inputTip: 0, inputBill: 0, inputPeople: 0 });
  

  const onDisplayData = ({displayTip, displayTotal}) => {
    setTip(displayTip);
    setTotal(displayTotal);
  }

  const onReset = () => {
    setTip('0.00');
    setTotal('0.00');
  }

  const onGetDataInput = ({ type, value }) => {
    if (type === 'bill') {
      dataInput.inputBill = parseFloat(value);
    }

    if (type === 'tip') {
      dataInput.inputTip = parseFloat(value);
    }

    if (type === 'people') {
      dataInput.inputPeople = parseFloat(value);
    }

    if (dataInput.inputBill && dataInput.inputPeople && dataInput.inputTip) {
      console.log('CALCUL');
      calculate(dataInput);
    } else {
      onReset();
    }


    console.log('data input: ', dataInput);
  }

  const calculate = ({ inputBill, inputPeople, inputTip }) => {
    const tempTip = ((inputBill * inputTip) / 100) / inputPeople;
    const tempTipTrunc = Math.trunc( tempTip* 100) / 100;
    const tempTotal = tempTip + (inputBill / inputPeople);
    const tempTotalTrunc = tempTotal.toFixed(2);
    onDisplayData({displayTip: tempTipTrunc, displayTotal: tempTotalTrunc});
  }

  return (
    <div className="flex-center">
      <div className="main-wrapper">
        <h1>
          <span className="part-title">spli</span>
          <span className="part-title">tter</span>
        </h1>
        <div className="calculator">
          <div className="control">
            <BillBox getDataInput={onGetDataInput} />
            <RatioList getDataInput={onGetDataInput} />
            <PeopleBox getDataInput={onGetDataInput} />
          </div>
          <div className="display">
            <ScreenDisplay tip={tip} total={total} reset={onReset} />
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by <a rel="noreferrer" href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX" target="_blank">Frontend Mentor</a>. 
        Coded by <a rel="noreferrer" href="https://github.com/traoregex/tip-calculator-fm">TRAORE Geraud Lionel</a>.
      </div>
    </div>
  );
}

export default App;
