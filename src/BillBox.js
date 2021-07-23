import React from 'react';
import './BillBox.scss';

function BillBox({ getDataInput }) {
    
    const getValue = (event) => {
        getDataInput({ type: 'bill', value: event.target.value });
    }

    return (
        <div>
            <span className="i-label">Bill</span>
            <div className="c-input">
                <span>$</span>
                <input onChange={getValue} type="number" placeholder="0" />
            </div>
        </div>
    );
}

export default BillBox;