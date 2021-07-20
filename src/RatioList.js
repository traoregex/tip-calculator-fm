import React from 'react';
import CustomRatio from './CustomRatio';
import FixedRatio from './FixedRatio';
import './RatioList.scss';

function RatioList() {
    
    return (
        <div>
            <span className="i-label">Select Tip %</span>
            <div className="ratio-grid">
                <FixedRatio ratio={5} />
                <FixedRatio ratio={10} />
                <FixedRatio ratio={15} />
                <FixedRatio ratio={25} />
                <FixedRatio ratio={50} />
                <CustomRatio />
            </div>
        </div>
    );

}

export default RatioList;