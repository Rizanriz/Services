import React, { useState } from 'react';
import Table from './Table';

const TableData = () => {


  const tableConfig = {title:"Payment History", type:"paymentslog"}

  const tableDataConfig=[
  {paymentId:"#12345678",date:"March 25, 2024",time:"12:45 PM",paymentAmount:"50,542",serviceStatus:"Complete" },
  {paymentId:"#12345678",date:"March 25, 2024",time:"12:45 PM",paymentAmount:"50,542",serviceStatus:"Cancelled" },
  {paymentId:"#12345678",date:"March 25, 2024",time:"12:45 PM",paymentAmount:"50,542",serviceStatus:"Cancelled" },
  {paymentId:"#12345678",date:"March 25, 2024",time:"12:45 PM",paymentAmount:"50,542",serviceStatus:"Cancelled" },
  {paymentId:"#12345678",date:"March 25, 2024",time:"12:45 PM",paymentAmount:"50,542",serviceStatus:"Cancelled" },
  {paymentId:"#12345678",date:"March 25, 2024",time:"12:45 PM",paymentAmount:"50,542",serviceStatus:"Cancelled" },
  ]

  const tableColConfig = ["paymentId",,"Date","time","paymentAmount","ServiceStatus"]
    
  return (
      <div className="w-full bg-[#787879] p-10">
      <Table
        tableColConfig={tableColConfig}
        tableDataConfig={tableDataConfig}
        tableConfig={tableConfig}
      />
    </div>
    
  );
};

export default TableData;
