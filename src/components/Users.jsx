import React, { useEffect, useState } from 'react';
import Table from './ui/Table';


const USER_API_URL = 'https://randomuser.me/api/?results=50&nat=US&seed=demo'; 

const Users = () => {

  const [users, setUsers] = useState([]);
  const [searchUserName, setSearchUserName] = useState('');

  useEffect(() => {
    fetch(USER_API_URL)
      .then(response => response.json())
      .then(data => setUsers(data.results));
  }, []);

  const handleSearchUser = (event) => {
    setSearchUserName(event.target.value.toLowerCase());
  };

  const tableColums = ['Nome', 'Email', 'Telefono'];
  
  const usersToDisplay = searchUserName ? users.filter(u => `${u.name.first.toLowerCase()} ${u.name.last.toLowerCase()}`.includes(searchUserName)) : users;
  const tableRows = usersToDisplay.map(user => (
    <tr key={user.email}>
      <td>{`${user.name.first} ${user.name.last}`}</td>
      <td>{user.email}</td>
      <td>{user.cell}</td>
    </tr>
  ));

  return (
    <>
      <h1>Utenti</h1>
      <form>
        <input type="text" placeholder="Cerca utente" style={{width: '320px'}} onChange={handleSearchUser} aria-label="Cerca utente" />
      </form>
      <Table columns={tableColums}>
        {tableRows}
      </Table>
    </>
  );
};

export default Users;