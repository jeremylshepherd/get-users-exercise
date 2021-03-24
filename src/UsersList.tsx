import React, { useState, useEffect } from 'react'
import ErrorAlert from './Components/ErrorAlert';
import ListPanel from './Components/ListPanel';
import GetUsersFromApi from './helpers/getUsersFromApi';
import { User } from'./types';

interface Props {}



function UsersList(props: Props) {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const getUsers = async () => {
            await GetUsersFromApi('https://exercises.getsandbox.com/users', setUsers, setMessage);
        }
        getUsers();
    }, []);

    return (        
        <>
            {
                message.length > 0 ? 
                <ErrorAlert message={message} />:
                <ListPanel users={users} title="List of Users" />
            }
        </>
    )
}

export default UsersList;