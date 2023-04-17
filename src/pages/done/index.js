"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import TodoItem from "@/components/todolist";
import {
  SignedIn,
  SignedOut,
  useAuth,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Home from "..";
import CatesFilter from "@/components/catesFilter";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
export default function Done() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(new Set(["urgent"]));
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [donecates, setDoneCates] = useState(new Set(["urgent"]));

  const fetchCates = async (token) => {

    const response = await fetch(
      API_ENDPOINT + "/cateslist?completed=true&userid=" + userId,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
    const data = await response.json();
    const catesSet = new Set(data.map((item) => item.cates));

    const newSet = new Set([...catesSet, ...categories]);

    setCategories(newSet);

  };

  const fetchData = async (token) => {
    const response = await fetch(
      API_ENDPOINT + "/todolist" + "?completed=true&userid="+userId,
      {
        method: "GET",
        headers: { "Authorization": "Bearer " + token },
      }
    );
    const data = await response.json();

    const catesSet = new Set(data.map((item) => item.category));

    setItems(data.sort((a, b) => (a.createdOn <= b.createdOn ? 1 : -1)));
    setLoading(false);
    setDoneCates(catesSet);
  };
  useEffect(() => {
    async function process() {
      if (userId) {
        const token = await getToken({ template: "codehooks" });
        fetchData(token);
        fetchCates(token);
      }
    }
    process();
  }, [isLoaded]);

  return (
    <>
      <SignedIn>
        <UserButton />
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
                {Array.from(donecates).map((cate) => (
                  <>
                    <CatesFilter
                      cate={cate}
                      fetchCates={fetchCates}
                      type="done"
                    />
                  </>
                ))}

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
      </SignedIn>
      <SignedOut>
        <Home></Home>
      </SignedOut>
    </>
  );
}
