import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './PeopleBox.scss';

function PeopleBox({getDataInput, clear}) {
    const [error, setError] = useState(false);
    const [currentValue, setCurrentValue] = useState('');

    const getValue = (event) => {
        // console.log(event.target.value);
        if (parseInt(event.target.value) === 0) {
            // console.log('error');
            setError(true);
        } else {
            setError(false);
            getDataInput({ type: 'people', value: event.target.value });
            setCurrentValue(event.target.value);
        }
    }

    useEffect(() => {
        if (clear) {
            setCurrentValue('');
        }
    })

    return (
        <div className="people-box-wrapper">
            <div className="flex-side">
                <span className="i-label">Number of Person</span>
                <span className={error ? 'error-label' : 'hide'}>Can't be zero</span>
            </div>
            <div className={error ? 'c-input error-input' : 'c-input'}>
                <span className="medium">
                    <FontAwesomeIcon icon={faUser} />
                </span>
                <input onChange={getValue} value={currentValue} type="number" placeholder="0" />
            </div>
        </div>
    );
}

export default PeopleBox;