import React, { useState } from 'react'
import "./BasicForms.css"

const BasicForms = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        if (email && password) {
            const newEntry = { id: new Date().getTime().toString(), email: email, password: password };
            setAllEntry([...allEntry, newEntry]);
            setEmail("");
            setPassword("");
        }
        else {
            alert("Please Fill the all Stuff");
        }
    }

    return (
        <>
            <h1 className='heading'>Login Form</h1>
            <form className='form' onSubmit={submitForm}>
                <div className='box1'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='box1'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' className='btn'>Login</button>
            </form>

            <div className='showData'>
                {
                    allEntry.map((curElem) => {
                        return (
                            <div className='innerBox' key={curElem.id}>
                                <h3>Email:{curElem.email} <br /> Password:{curElem.password}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BasicForms