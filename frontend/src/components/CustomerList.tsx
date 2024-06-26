"use client";

import React, { useEffect, useState } from "react";
import { getCustomers, deleteCustomer, Customer } from "@/service/api";

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const data = await getCustomers();
    setCustomers(data);
  };

  const handleDelete = async (id: string) => {
    await deleteCustomer(id);
    fetchCustomers();
  };

  return (
    <ul className="border-2 p-2 max-h-[90%] overflow-auto w-full">
      {customers.map((customer) => (
        <li className="flex gap-4" key={customer.id}>
          <button onClick={() => handleDelete(customer.id)}>X</button>
          {customer.name} - {customer.email}
        </li>
      ))}
    </ul>
  );
};

export default CustomerList;
