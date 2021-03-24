import React from 'react'

interface Props {
    message: string
}

function ErrorAlert(props: Props) {
    const { message } = props;
    const errorStyle = {
        display: 'block',
        backgroundColor: 'pink',
        marginTop: '1em',
        padding: '2em 3em',
        borderRadius: '25px',
        border: '1px solid red',
        width: '80vw',
        color: 'red',
        textAlign: 'center',
        fontWeight: 600
    } as const;             //Prevents property reassignment

    return (
        <>
            {console.error(message)}
            <span 
                style={errorStyle}
            >
                {message}
            </span>
        </>
    );
}

export default ErrorAlert