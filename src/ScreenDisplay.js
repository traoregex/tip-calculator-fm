import React from 'react';
import './ScreenDisplay.scss';


function ScreenDisplay({tip, total, reset, dataInput}) {
    // console.log(dataInput);
    //tip!=='0.00'



    if (dataInput.inputBill) {
        console.log('Bill entered');
    }

    return (
        <div className="screen">
            <div className="top">
                <div className="output">
                    <span>
                        <span className="main-label">Tip Amount</span>
                        <span className="secondary-label">/ person</span>
                    </span>
                    <span className="pricetag">${ tip }</span>
                </div>
                <div className="output">
                    <span>
                        <span className="main-label">Total</span>
                        <span className="secondary-label">/ person</span>
                    </span>
                    <span className="pricetag">${ total }</span>
                </div>
            </div>
            <div className="bottom">
                <button id={ (dataInput.inputBill || dataInput.inputPeople || dataInput.inputTip) ? 'active-state' : 'blank'} onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default ScreenDisplay;