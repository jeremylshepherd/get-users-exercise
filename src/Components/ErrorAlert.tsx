import React from 'react'

interface Props {
    message: string
}

function ErrorAlert(props: Props) {
    const { message } = props;

    return (
        <>
            {console.error(message)}
            <span 
                style={ {
                    backgroundColor: 'pink',
                    padding: '2em 3em',
                    borderRadius: '25px',
                    border: '1px solid red',
                    width: '80vw',
                    color: 'red',
                    textAlign: 'center',
                    fontWeight: 600
                }}
            >
                {message}
            </span>
        </>
    );
}

export default ErrorAlert