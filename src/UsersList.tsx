import React, { useState, useEffect } from 'react'

interface Props {}

type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    active: boolean
};

function UsersList(props: Props) {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch('https://exercises.getsandbox.com/users');
            if(response.status === 200) {
                const users = await response.json();
                setUsers(users);
            } else {  
                let message = `There was an error retrieving users ${response.status}: ${response.statusText}.`;
                setMessage(message);
                throw new Error(`${response.status}`);
            }
        }
        getUsers();
    }, []);

    return (        
        <>
            {message.length > 0 ? <div>{message}</div>: null}
            <h2>List of Users:</h2>            
            <ul style={{listStyle: "none"}}>
                {users.map((user: User) => (
                    <li key={user.id}>{`${user.lastName}, ${user.firstName}`}</li>)
                )}
            </ul>
        </>
    )
}

export default UsersList;