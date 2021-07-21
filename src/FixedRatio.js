import React from 'react';
import './FixedRatio.scss';

function FixedRatio({ ratio, activeRatio, updateState }) {

    const getRatio = () => {
        updateState({type: 'fixed', data: ratio});
    }
    

    return (
        <div onClick={getRatio} className={activeRatio === ratio ? 'ratio isActive' : 'ratio'}>
            {ratio}%
        </div>
    );
}

export default FixedRatio;