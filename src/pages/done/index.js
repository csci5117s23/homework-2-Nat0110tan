"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import TodoItem from "@/components/todolist";
import { useAuth } from "@clerk/nextjs";

export default function Done() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const fetchData = async (token) => {
    const response = await fetch(
      API_ENDPOINT + "/todolist" + "?completed=true",
      {
        method: "GET",
        headers: { "Authorization": "Bearer " + token },
      }
    );
    const data = await response.json();
    console.log("this is a get request for done");
    // update state -- configured earlier.
    setItems(data);
    setLoading(false);
  };
  useEffect(() => {
    async function process() {
      if (userId) {
        const token = await getToken({ template: "codehooks" });
        fetchData(token);
      }
    }
    process();
  }, [isLoaded]);
  // useEffect(() => {
  //   fetchData(token);
  // }, []);
  // console.log(items);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid gap-16 grid-cols-fluid">
        <Link
          href={"/todos"}
          className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Check todos
        </Link>
      </div>
      <div className="grid gap-16 grid-cols-fluid">
        {loading ? (
          <span>LOADING...</span>
        ) : (
          <>
            <h1>Awesome! Here are what you've finished🤩</h1>
            <Link
              href={"/done/option 2"}
              className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Filter by category Option 2
            </Link>

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
