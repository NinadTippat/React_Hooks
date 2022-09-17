import React from 'react'

const PracticeForm = () => {
    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={submitForm}>
                <div className="email" >
                    <label htmlFor="email">email</label>
                    <input type="email" name='email' value={email} onChange={(e) => { e.target.value }} />
                </div>
            </form>
            <div>

            </div>
        </>
    )
}

export default PracticeForm