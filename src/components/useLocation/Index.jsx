import React from 'react'
import { useLocation } from 'react-router-dom'

const Index = () => {
    const location = useLocation();
    return (
        <div>
            <h1>Hello {location.pathname.replace("/", "")} Page</h1>
        </div>
    )
}

export default Index