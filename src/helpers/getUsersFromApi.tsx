// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { User } from '../types';

async function GetUsersFromApi(url : string, userSetter : any, errorSetter : any) : Promise<User [] | any> {
    try {
        const response = await fetch(url);            
        if (response.status === 200) {
            const users : User[] = await response.json();
            userSetter(users);
        } else {  
            let message = `There was an error retrieving users ${response.status}: ${response.statusText}.`;
            errorSetter(message);
            console.error(`${response.status}`);
        }
    } catch {
        let message = 'The was no response from API. Please check url and try again';
        errorSetter(message);
        console.error(message);
    }
}

export default GetUsersFromApi
