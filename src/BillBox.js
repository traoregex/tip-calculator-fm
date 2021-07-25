import React, { useEffect, useState } from 'react';
import './BillBox.scss';

function BillBox({ getDataInput, clear }) {

    const [currentValue, setCurrentValue] = useState('');
    
    const getValue = (event) => {
        getDataInput({ type: 'bill', value: event.target.value });
        setCurrentValue(event.target.value);
    }

    useEffect(() => {
        if (clear) {
            setCurrentValue('');
        }
    })

    return (
        <div>
            <span className="i-label">Bill</span>
            <div className="c-input">
                <span>$</span>
                <input value={currentValue} onChange={getValue} type="number" placeholder="0" />
            </div>
        </div>
    );
}

export default BillBox;