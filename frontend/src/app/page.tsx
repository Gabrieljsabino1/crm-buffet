import React from "react";
import CustomerList from "@/components/CustomerList";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col items-center bg-gradient-to-b from-gray-200 to-gray-400 p-8 border border-gray-300">
      <h1 className="text-5xl font-bold text-gray-800 mb-8">
        Lista de Clientes
      </h1>
      <div className="flex flex-1 justify-center items-center w-full max-w-4xl">
        <CustomerList />
      </div>
      <Link
        href="/addclient"
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
      >
        Adicionar Cliente
      </Link>
    </main>
  );
}
