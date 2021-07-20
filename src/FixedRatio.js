import React from 'react';
import './FixedRatio.scss';

function FixedRatio({ratio}) {

    return (
        <div className="ratio">
            {ratio}%
        </div>
    );
}

export default FixedRatio;