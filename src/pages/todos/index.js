"use client";
import React, { useState, useEffect } from "react";
import TodoItem from "@/components/todolist";
import Link from "next/link";
import CatesFilter from "@/components/catesFilter";
import {
  SignedIn,
  SignedOut,
  useAuth,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Todo() {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("urgent");
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [todocates, setTodoCates] = useState(new Set(["urgent"]));

  const [categories, setCategories] = useState(new Set(["urgent", "no rush", "preferred"]));

  const [newCategory, setNewCategory] = useState("");
  const [validation, setValidation] = useState(false);

  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newItem, setNewItem] = useState(null);

  const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;


  const fetchCates = async (token) =>{
    const response = await fetch(API_ENDPOINT + "/cateslist?userid=" + userId, {
      method: "GET",
      headers: { "Authorization": "Bearer " + token },
    });
    const data = await response.json();
    const catesSet = new Set(data.map(item => item.cates))
    const newSet = new Set([...catesSet, ...categories]);
    setCategories(newSet);
  }
  const fetchData = async (token) => {

    const response = await fetch(
      API_ENDPOINT + "/todolist" + "?completed=false&userid="+userId,
      {
        method: "GET",
        headers: { "Authorization": "Bearer " + token },
      }
    );
    const data = await response.json();
    setItems(data.sort((a,b)=>(a.createdOn <= b.createdOn) ? 1 : -1));
    setLoading(false);
    const catesSet = new Set(data.map((item) => item.category));
    setTodoCates(catesSet);
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


  const NewCatesPost = async () =>{
    const token = await getToken({ template: "codehooks" });
    const response = await fetch(API_ENDPOINT + "/cateslist"+"?userid="+userId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({ cates: newCategory , userid: userId}),
    });
    setCategories(newCategory);

  }
  function handleContentChange(e) {
    setContent(e.target.value);
    handleValidation();
  }

  function handleValidation() {
    if (content != "") {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
    console.log(category);
  }

  const handleNewCategoryChange = (event) => {
    setNewCategory(event.target.value);
    setCategory(newCategory);
  };

  const handleNewCateSubmit = async(e) =>{
    NewCatesPost();
    const token = await getToken({ template: "codehooks" });
    fetchCates(token);
    setNewCategory("");
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    handleValidation();
    setNewItem({ content: content, category: category });
    const token = await getToken({ template: "codehooks" });
    if (validation) {
      const response = await fetch(API_ENDPOINT + "/todolist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
        },
        body: JSON.stringify({ content: content, category: category, userid: userId }),
      });
      const data = await response.json();
    }
    fetchData(token);
    setCategory("preferred");
    setContent("");
    setValidation(false);
    setNewItem(null);
    setNewCategory("");
  };


  return (
    <>
      <SignedIn>
        <UserButton />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="grid gap-16 grid-cols-fluid">
            <form
              className="bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleFormSubmit}
            >
              <div className="mb-4">
                <label className="block text-gray-700 text-md font-bold mb-2">
                  Enter the content
                </label>
                <input
                  value={content}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="content"
                  type="text"
                  placeholder="Todo"
                  onChange={handleContentChange}
                />
              </div>
              <label className="block text-gray-700 text-md font-bold mb-2">
                Choose the category
              </label>
              <div className="mb-2 inline-block relative">
                <select
                  value={category}
                  placeholder="category"
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleCategoryChange}
                >
                  {Array.from(categories).map((cate) => (
                    <>
                      <option value={cate}>{cate}</option>
                    </>
                  ))}
                </select>
              </div>
              <button
                className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                disabled={!validation}
                type="submit"
              >
                Add todo
              </button>
              <div className="mb-4">
                <label className="block text-gray-700 text-md font-bold mb-2">
                  Add new category
                </label>
                <input
                  value={newCategory}
                  onChange={handleNewCategoryChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="newCategory"
                  type="text"
                  placeholder="Enter category"
                />
              </div>

              <button
                className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                disabled={!newCategory}
                onClick={handleNewCateSubmit}
              >
                Add category
              </button>
            </form>

            {loading ? (
              <span>LOADING...</span>
            ) : (
              <>
                <Link
                  href={"/done"}
                  className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Check Done
                </Link>
                {Array.from(todocates).map((cate) => (
                  <>
                    <CatesFilter
                      cate={cate}
                      fetchCates={fetchCates}
                      type="todos"
                    />
                  </>
                ))}

                {items.map((item) => (
                  <TodoItem
                    key={item.id}
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
        <h1>Please signin</h1>
        <SignInButton
          className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          redirectUrl="/todos"
        />
      </SignedOut>
    </>
  );
}
