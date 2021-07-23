import React from 'react';
import './ScreenDisplay.scss';


function ScreenDisplay({tip, total, reset}) {
    console.log('tip from screen ', tip);

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