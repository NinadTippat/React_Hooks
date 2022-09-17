import React, { useState } from 'react'

const UseStateObject = () => {

    const [myObject, setMyObject] = useState({
        myName: "Ninad S. Tippat", age: 19, achievement: "College Student"
    })

    const updateObject = () => {
        setMyObject({
            ...myObject, age: 24, achievement: "Successful Software Engineer, having Mercedes Benz and beautiful Rashi."
        })
    }
    return (
        <div>
            <h1>
                Name:{myObject.myName}, Age: {myObject.age}, Achievement: {myObject.achievement}
            </h1>
            <button onClick={updateObject} className='btn'>Update</button>
        </div>
    )
}

export default UseStateObject