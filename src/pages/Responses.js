import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Responses() {

    const [contacts, setContacts] = useState([]);
    useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/contacts',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        );
        setContacts(res.data);
      } catch (err) {
        console.error('Error fetching contacts:', err);
      }
    };

    fetchContacts();
  }, []);
  return (
    <div className='container mt-4'>
        <h2>Contact Submissions</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Subject</th>
            <th>Date Submitted</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
              <td>{contact.subject}</td>
              <td>{new Date(contact.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Responses