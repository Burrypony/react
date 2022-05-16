import React from 'react';
import {axios} from './axios';
const { useState, useEffect } = React;

const URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        // Add code here to fetch some users with axios and the URL variable
        // then update the 'users' piece of state
        const data = axios.get(URL)
        setUsers(data)
        
    }, []);
     
    const renderedUsers = users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
    });
    
    return (
        <ul>
            {renderedUsers}
        </ul>
    );
}

export default App;
