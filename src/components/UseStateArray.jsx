import React, { useState } from 'react'
import "./UseStateArray.css"

const UseStateArray = () => {

    const [bioDate, setBioData] = useState([
        {
            id: 0, myName: "Mercedes", no: 19
        },
        {
            id: 1, myName: "RollsRoyce", no: 30
        },
        {
            id: 2, myName: "BMW", no: 23
        },
        {
            id: 3, myName: "Audi", no: 13
        }
    ])

    const clearArray = () => {
        setBioData([]);
    }

    const removeElement = (id) => {
        // alert(id);
        const myNewArray = bioDate.filter((curElm) => {
            return curElm.id !== id;
        })
        setBioData(myNewArray);
    }

    return (
        <div div className='useStateArray'>
            <div >
                {
                    bioDate.map((curElm) => {
                        return (
                            <h2 className="box" key={curElm.id}>Name : {curElm.myName} and NUMBER: {curElm.no}
                                <button className='btn1 btn2' onClick={() => removeElement(curElm.id)}>Remove</button>
                            </h2>
                        )
                    })
                }
            </div>
            <button className='btn' onClick={clearArray}>Clear</button>
        </div>
    )
}

export default UseStateArray