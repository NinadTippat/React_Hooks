import React, { createContext } from 'react'
import UseContext2 from './UseContext2'

const BioData = createContext();
const UseContext1 = () => {

    const marks = 35

    return (
        <>
            <BioData.Provider value={marks} >
                <UseContext2 />
            </BioData.Provider>
        </>

    )
}

export default UseContext1;
export { BioData };