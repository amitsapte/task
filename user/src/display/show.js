import React, { useState, useEffect } from 'react';
import './show.css';

const Show = () => {
  const [users, setUsers] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch('/api/users/show')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []); // Empty dependency array ensures that useEffect runs once, similar to componentDidMount

  return (
    <div className="container">
      <h1>User List</h1>
      {loading ? (
        <p>Loading...</p> // Show a loading message while data is being fetched
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.dob}$</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Show;