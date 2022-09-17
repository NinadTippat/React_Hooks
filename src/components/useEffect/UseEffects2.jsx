//Cleanup function

import React, { useEffect, useState } from 'react'

const UseEffects2 = () => {

    const [widthCount, setWidthCount] = useState(window.screen.width);

    const actualWidth = () => {
        setWidthCount(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", actualWidth);

        return () => {
            window.removeEventListener("resize", actualWidth);
        }
    })

    return (
        <div>
            <p>The actual size of the window is:</p>
            <h1>{widthCount}</h1>
        </div>
    )
}

export default UseEffects2