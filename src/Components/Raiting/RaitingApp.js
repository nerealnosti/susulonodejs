import React, { useState } from 'react'
import InputStar from './InputStar'

export default function RaitingApp({ Nstarts = 5, overallRating = 4.7 }) {
 
    const [raiting, setRaiting] = useState(overallRating);
    const [hover, setHover] = useState(null);

    return (
        <>
            <div className="stars">
                {[...Array(Nstarts)].map((star, i) =>
                    <InputStar key={i}
                        id={i + 1}
                        raiting={raiting}
                        hover={hover}
                        onClick={() => setRaiting(i + 1)}
                        onMouseEnter={() => setHover(i + 1)}
                        onMouseLeave={() => setHover(null)}
                    />
                )}
            </div>
            {(overallRating) ? <div className="text-msg"></div> : null}
        </>
    )
}
