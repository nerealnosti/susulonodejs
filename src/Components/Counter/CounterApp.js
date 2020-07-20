import React from 'react'
import Counter from './Counter'
import Icon from './Icon'

export default function CounterApp({ text = 'Happy Customer', targetCount = 1500 }) {
    return (
        <div className="CounterAppHolder">
            <div><Icon /></div>
            <Counter targetCount={targetCount} />
            <div className="text-msg">{text}</div>
        </div>
    )
}
