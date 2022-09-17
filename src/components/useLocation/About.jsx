import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'


const Index = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div>
            <h1>Hello {location.pathname.replace("/", "")} Page</h1>
            <button onClick={() => navigate("/index")}>
                Go back
            </button>
        </div>
    )
}

export default Index