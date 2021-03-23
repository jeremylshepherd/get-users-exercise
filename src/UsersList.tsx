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
            try {
                const response = await fetch('https://exercises.getsandbox.com/user');            
                if (response.status === 200) {
                    const users = await response.json();
                    setUsers(users);
                } else {  
                    let message = `There was an error retrieving users ${response.status}: ${response.statusText}.`;
                    setMessage(message);
                    console.error(`${response.status}`);
                }
            } catch {
                let message = 'The was no response from API. Please check url and try again';
                setMessage(message);
                console.error(message);
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