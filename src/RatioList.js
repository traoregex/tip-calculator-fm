import React, { useState } from 'react';
import CustomRatio from './CustomRatio';
import FixedRatio from './FixedRatio';
import './RatioList.scss';

function RatioList() {

    const [activeRatio, setActiveRatio] = useState('');

    const getState = ({type, data}) => {
        if (type === 'custom') {
            setActiveRatio(type);
        } else {
            setActiveRatio(data);
        }
        console.log(data);
        console.log(type);
    }
    
    return (
        <div>
            <span className="i-label">Select Tip %</span>
            <div className="ratio-grid">
                <FixedRatio activeRatio={activeRatio} updateState={getState} ratio={5} />
                <FixedRatio activeRatio={activeRatio} updateState={getState} ratio={10} />
                <FixedRatio activeRatio={activeRatio} updateState={getState} ratio={15} />
                <FixedRatio activeRatio={activeRatio} updateState={getState} ratio={25} />
                <FixedRatio activeRatio={activeRatio} updateState={getState} ratio={50} />
                <CustomRatio activeRatio={activeRatio} updateState={getState} />
            </div>
        </div>
    );

}

export default RatioList;