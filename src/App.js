
import './App.scss';
import BillBox from './BillBox';
import PeopleBox from './PeopleBox';
import RatioList from './RatioList';
import ScreenDisplay from './ScreenDisplay';
import React, { useState } from 'react';

function App() {

  const [tip, setTip] = useState('0.00');
  const [total, setTotal] = useState('0.00');
  

  const onDisplayData = () => {
    setTip(10);
    setTotal(50);
  }

  const onReset = () => {
    setTip('0.00');
    setTotal('0.00');
    console.log('Reset')
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
            <BillBox />
            <RatioList />
            <PeopleBox />
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
