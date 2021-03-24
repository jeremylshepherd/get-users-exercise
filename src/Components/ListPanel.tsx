import React from 'react'
import { User } from '../types'

interface Props {
    users: User[],
    title: string
}

function ListPanel(props: Props) {
    const {users, title} = props

    return (
        <>
            <h2>{title}</h2>                    
            <ul style={{listStyle: "none"}}>
                {users.map((user: User) => (
                    <li key={user.id}>{`${user.lastName}, ${user.firstName}`}</li>)
                )}
            </ul>
        </>
    )
}

export default ListPanel
