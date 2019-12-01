import React, { useState } from 'react'

export default function ListItem(props) {
    const [counter, setCounter] = useState(0)

    return (
        <div className='card'>
            <h1>
                {props.name}: {counter}
            </h1>
            <button onClick={() => setCounter(counter + 1)}>click</button>
        </div>
    )
}
