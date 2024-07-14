import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerTable from '../src/components/Home/CustomerTable.jsx';
import TransactionTable from '../src/components/Transaction/TransactionTable.jsx';
import TransactionGraph from '../src/components/Transaction/TransactionGraph.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CustomerTable />} />
          <Route path="/transactions" element={<TransactionTable />} />
          <Route path="/graph" element={<TransactionGraph />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;