import React from 'react';

function CustomRatio({ activeRatio, updateState }) {

    const getRatio = (event) => {
        // console.log(event.target.value);
        // console.log('active ratio: ',activeRatio);
        updateState(
            {
                type: 'custom',
                data: (event.target.value <= 100 && event.target.value >= 0) ? event.target.value : 0
            }
        );
    }

    return (
        <div onClick={getRatio} className={activeRatio === 'custom' ? 'active-input c-input' : 'c-input'}>
            <input onChange={getRatio} type="text" placeholder="Custom" />
        </div>
    );
}

export default CustomRatio;