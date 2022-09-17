import React, { useState } from 'react'
import useHook from './github/useHook'

const UseEffects1 = () => {

    const [count, setCount] = useState(0)

    useHook(count);

    return (
        <div>
            <h1>
                {count}
            </h1>
            <button className='btn' onClick={() => { setCount(count + 1) }}>Click😂</button>
        </div>
    )
}

export default UseEffects1