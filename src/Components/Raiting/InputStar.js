import React from 'react'
import Star from './Star'
import './RaitingApp.css'
import { nanoid } from 'nanoid';

export default function InputStar({ raiting, hover, id, onClick, onMouseEnter, onMouseLeave, name = 'raiting' }) {
    const ids = nanoid();
    return (
        <div>
            <input type="radio" name={name} id={ids} key={id} onClick={onClick} />
            <label htmlFor={ids} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Star selected={(hover || raiting) >= id ? true : false} key={id} />
            </label>
        </div>
    )
}
