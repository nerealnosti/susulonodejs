import React, { useState } from 'react';

export default function Counter({ targetCount, slowdownspeed = 10, speed = 1, increment = parseInt(targetCount * 0.01) }) {

    const [counter, setCounter] = useState(0);
    
    if (increment % 10 === 0) {
        increment++;
    }
    if (targetCount < 100) {
        increment = 1;
        speed = 10;
    }

    if (counter > +(targetCount * 0.96)) {
        speed = 80;
        increment = parseInt(targetCount * 0.007);
    }

    if (increment >= targetCount - counter - slowdownspeed) {
        increment = targetCount - counter - slowdownspeed;
    }

    if (counter >= targetCount - slowdownspeed) {
        speed = 100;
        increment = 2;
    }

    if (counter >= targetCount - 1) {
        speed = 400
        increment = 1
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
        <label className="counter" onLoad={counting()}>
            {counter}
        </label>
    )
}
