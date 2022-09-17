import React, { useEffect, useState } from 'react'
import GitHubUser from './github/GitHubUser';
import Loading from './github/Loading';

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);



    const getUsers = async () => {
        try {
            const response = await fetch("https://api.github.com/users");
            setLoading(false);
            setUsers(await response.json());

        } catch (error) {
            setLoading(false);
            console.log("My error is " + error);
        }
    }
    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <GitHubUser users={users} />
        </>
    )
}

export default UseEffectAPI
