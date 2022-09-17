import React, { useState } from 'react'

const RulesHook = () => {

    const [myName, setMyName] = useState("Mercedes");

    const changeName = () => {
        let val = myName;
        if (val === "Mercedes") {
            setMyName("BMW");
        }
        else {
            setMyName("Mercedes")
        }
    }
    return (
        <div>
            <h1 className="name">{myName}</h1>
            <button className="btn" onClick={changeName}>Click me please</button>
        </div>
    )
}

export default RulesHook