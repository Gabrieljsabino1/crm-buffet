"use client"; // Adicione esta linha no topo do arquivo

import React from "react";
import { getCustomers, deleteCustomer, Customer } from "@/service/api";

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = React.useState<Customer[]>([]);

  React.useEffect(() => {
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
    <ul className="border-2 border-gray-300 p-2 max-h-[90%] overflow-auto w-full bg-gray-100 rounded-lg shadow-md">
      {customers.map((customer) => (
        <li
          className="flex gap-4 items-center p-2 bg-white border-b border-gray-200"
          key={customer.id}
        >
          <button
            onClick={() => handleDelete(customer.id)}
            className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition-colors"
          >
            X
          </button>
          <div className="flex-1">
            <p className="font-bold text-black">{customer.name}</p>
            <p className="text-black">{customer.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CustomerList;
