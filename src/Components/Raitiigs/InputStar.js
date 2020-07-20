import React from 'react'
import Star from './Star'
import '../Raiting/RaitingApp.css'


export default function InputStar({ name = "raiting", id, onMouseEnter, onMouseLeave, raiting, hover, }) {
    return (
        <div className="star">
            <input type="radio" name={name} id={id} />
            <label htmlFor={id} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Star key={id} selected={(hover || raiting) >= id ? true : false} />
            </label>
        </div>
    )
}
