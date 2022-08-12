import React from 'react';
import Sidebar from '../../../components/organisms/Sidebar';
import TransactionContent from '../../../components/organisms/TransactionContent';

const Transaction = () => (
  <section className="transactions overflow-auto">
    <Sidebar activeMenu="Transactions" />
    <TransactionContent />
  </section>
);

export default Transaction;
