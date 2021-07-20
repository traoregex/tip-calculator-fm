import React from 'react';
import './BillBox.scss';

function BillBox() {
    return (
        <div>
            <span className="i-label">Bill</span>
            <div className="c-input">
                <span>$</span>
                <input type="number" placeholder="0" />
            </div>
        </div>
    );
}

export default BillBox;