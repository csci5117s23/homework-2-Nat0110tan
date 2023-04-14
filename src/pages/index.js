"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid gap-16 grid-cols-fluid">
        <h1>welcome to the todo app </h1>
        <h1>[I don't have a good name for it so...]</h1>
        <Link
          href={"/todos"}
          className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Todos
        </Link>
        <Link
          href={"/done"}
          className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Done
        </Link>
      </div>
    </main>
  );
}
