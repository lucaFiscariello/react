import React from 'react';

const Error = ({ title = "Errore!", text = "Si è verificato un errore imprevisto." }) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{text}</p>
        </>
    );
};

export default Error;