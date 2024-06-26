import React from "react";
import CustomerList from "@/components/CustomerList";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col items-center max-h-screen overflow-hidden px-24">
      <h1 className="text-5xl font-bold my-6">Lista de Clientes</h1>
      <CustomerList />
      <Link className="my-4 self-end" href="/addclient">
        Adicionar Cliente
      </Link>
    </main>
  );
}
