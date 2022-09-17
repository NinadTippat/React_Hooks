import React, { useContext } from 'react'
import { BioData } from './UseContext1'

const UseContext3 = () => {
    const marks = useContext(BioData);
    return (
        <div>
            <h1>Hello {marks}</h1>
        </div>
    )
}

export default UseContext3