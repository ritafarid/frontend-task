// CustomerTable.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Home/CustomerTable.module.css';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:3030/customers');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCustomers(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Customer List</h1>
      <Link to="/transactions">View Transactions</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;
