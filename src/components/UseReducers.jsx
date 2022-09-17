import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    if (action.type == "INC") {
        return state + 1;
    }
    if (action.type == "DEC") {
        return state - 1;
    }
    return state
}

const UseReducers = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>{state}</p>
            <div>
                <button onClick={() => dispatch({ type: "INC" })}>INCREMENT</button>
                <button onClick={() => dispatch({ type: "DEC" })}>DECREMENT</button>
            </div>
        </div>
    )
}

export default UseReducers