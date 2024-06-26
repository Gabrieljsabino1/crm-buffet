import axios from "axios";

export interface Customer {
  id: string;
  name: string;
  email: string;
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const getCustomers = () =>
  api
    .get<Customer[]>("customer")
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [] as Customer[];
    });

export const createCustomer = (customer: Customer) =>
  api.post("customer", customer);

export const updateCustomer = (id: string, customer: Customer) =>
  api.put(`customer/${id}`, customer);

export const deleteCustomer = (id: string) => api.delete(`customer/${id}`);
