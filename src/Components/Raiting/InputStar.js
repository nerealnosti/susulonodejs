import React from 'react'
import Star from './Star'
import './RaitingApp.css'

export default function InputStar({ raiting, hover, id, onClick, onMouseEnter, onMouseLeave, name = 'raiting' }) {
    return (
        <div>
            <input type="radio" name={name} id={id} key={id} onClick={onClick} />
            <label htmlFor={id} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Star selected={(hover || raiting) >= id ? true : false} key={id} />
            </label>
        </div>
    )
}
