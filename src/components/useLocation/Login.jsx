import React from 'react'
import "./test.css"

import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

    const diffToast = () => {
        toast("Login Successfully!", { position: toast.POSITION.TOP_CENTER });
    }
    return (
        <>
            <div className="main-div">
                <h2>Welcome to sign in page</h2>
                <button onClick={diffToast} className='btn btn-primary'>Login</button>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login