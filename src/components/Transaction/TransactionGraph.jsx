// TransactionGraph.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import 'chart.js/auto';

const TransactionGraph = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://localhost:3030/transactions');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTransactions(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const data = {
    labels: transactions.map(transaction => transaction.date),
    datasets: [
      {
        label: 'Transaction Amounts',
        data: transactions.map(transaction => transaction.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Transaction Graph</h1>
      <Link to="/">Back to Customers</Link>
      <Bar data={data} />
    </div>
  );
}

export default TransactionGraph;
