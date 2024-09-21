import React from 'react';
import PaymentHistoryTable from '../Table/PaymentTable';

const PaymentData = () => {
  const paymentData = [
    { id: '#1', date: '2024-09-01', amount: '$100.00', status: 'Completed' },
    { id: '#2', date: '2024-09-05', amount: '$75.50', status: 'Pending' },
    { id: '#3', date: '2024-09-10', amount: '$200.00', status: 'Completed' },
    { id: '#4', date: '2024-09-15', amount: '$50.00', status: 'canceled' },
    { id: '#5', date: '2024-09-20', amount: '$150.00', status: 'Completed' },
  ];

  return (
    <div>
      <PaymentHistoryTable data={paymentData} />
    </div>
  );
};

export default PaymentData;