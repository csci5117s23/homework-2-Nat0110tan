"use client"
import React, {useState, useEffect} from "react"
import Link from "next/link";
import TodoItem from "component/todolist"

export default function Done() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_ENDPOINT = "https://backend-c7k4.api.codehooks.io/dev/todolist";
  const API_KEY = "7cb1403e-6556-4111-b6e8-f4e7fd4bc732";
  useEffect(() =>{
    const fetchData = async () => {
      const response = await fetch(API_ENDPOINT+"?completed=true", {
        method: "GET",
        headers: { "x-apikey": API_KEY },
      });
      const data = await response.json();
      console.log("this is a get request for done");
      // update state -- configured earlier.
      setItems(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(items);
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
            <p>All Todos:</p>
            {items.map((item) => (
              <TodoItem
                content={item.content}
                category={item.category}
                createdOn={item.createdOn}
                id={item._id}
                completed={item.completed}
              />
            ))}
          </>
        )}
      </div>
    </main>
  );
}