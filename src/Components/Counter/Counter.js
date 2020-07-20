import React, { useState } from 'react';

export default function Counter({ targetCount, speed = 0.009, increment = 1 }) {

    const [counter, setCounter] = useState(0);
    increment += (targetCount * speed) + 1;


    if (counter >= +(targetCount * 0.80)) {
        speed = 20;
        increment = (targetCount - counter) * 0.1;
    }

    const counting = () => {

        const tID = setTimeout(() => {
            if (counter < targetCount) {
                setCounter(counter + increment);
                clearTimeout(tID);
            }
        }, speed);
    }

    return (
        <div>
            <label className="counter" onLoad={counting()}>
                {(counter).toFixed(0)}
            </label>
        </div>
    )
}
