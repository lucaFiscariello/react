import React from 'react';

const Table = ({ columns = [], children }) => {

    const headRow = columns.map((c, index) => <th key={index}>{c}</th>);

    return (
        <table>
            <thead>
                <tr>{headRow}</tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
};

export default Table;