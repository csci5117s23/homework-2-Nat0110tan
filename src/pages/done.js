"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import TodoItem from "@/components/todolist";

export default function Done() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  
  const fetchData = async () => {
    const response = await fetch(API_ENDPOINT + "?completed=true", {
      method: "GET",
      headers: { "x-apikey": API_KEY },
    });
    const data = await response.json();
    console.log("this is a get request for done");
    // update state -- configured earlier.
    setItems(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(items);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link
        href={"/todos"}
        className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Check todos
      </Link>
      <div className="grid gap-16 grid-cols-fluid">
        {loading ? (
          <span>LOADING...</span>
        ) : (
          <>
            <h1>Awesome! Here are what you've finished🤩</h1>
            {items.map((item) => (
              <TodoItem
                content={item.content}
                category={item.category}
                createdOn={item.createdOn}
                id={item._id}
                completed={item.completed}
                fetchData={fetchData}
              />
            ))}
          </>
        )}
      </div>
    </main>
  );
}
