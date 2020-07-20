import React, { useState } from 'react'
import InputStar from './InputStar'
import '../Raiting/RaitingApp.css'

export default function RaitingsApp() {
    const [raiting, setRaiting] = useState(0);
    const [hover, setHover] = useState(null);


    return (
        <div className="star">
            {[...Array(5)].map((star, i) =>
                <InputStar id={i + 1}
                    onMouseEnter={() => setHover(i + 1)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => setRaiting(i + 1)}
                    raiting={raiting}
                    hover={hover}
                />
            )}
        </div>
    )
}
