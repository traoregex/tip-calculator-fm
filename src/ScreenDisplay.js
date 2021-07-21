import React, { useState } from 'react';
import './ScreenDisplay.scss';


function ScreenDisplay({tip, total, reset}) {
    // const [tip, setTip] = useState(displayTip ? displayTip : '0.00');
    // const [total, setTotal] = useState(displayTotal ? displayTotal : '0.00');

    // function reset() {
    //     setTip('0.00');
    //     setTotal('0.00');
    //     console.log('clicked')
    // }

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
                <button id={tip!=='0.00' ? 'active-state' : 'blank'} onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default ScreenDisplay;