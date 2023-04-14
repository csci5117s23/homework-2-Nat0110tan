"use client";
import React, { useState, useEffect } from "react";
import TodoItem from "@/components/todolist";
import Link from "next/link";
import CatesFilter from "@/components/catesFilter";
import { useAuth } from "@clerk/nextjs";

export default function Todo() {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("urgent");
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [todocates, setTodoCates] = useState(new Set(["urgent"]));
  console.log("default category");
  console.log(category);
  const [categories, setCategories] = useState(new Set(["urgent"]));

  console.log("categories initial");
  const [newCategory, setNewCategory] = useState("");
  const [validation, setValidation] = useState(false);

  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newItem, setNewItem] = useState(null);

  const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  console.log(userId);

  const fetchCates = async (token) =>{
    console.log("where is cates?");
    const response = await fetch(API_ENDPOINT + "/cateslist?userid=" + userId, {
      method: "GET",
      headers: { "Authorization": "Bearer " + token },
    });
    const data = await response.json();
    console.log("categories before combving");
    console.log(categories);
    console.log(data);
    const catesSet = new Set(data.map(item => item.cates))
    console.log("do you really get anything?");
    console.log("this is the data szet"+catesSet);
    const newSet = new Set([...catesSet, ...categories]);
    console.log(newSet);
    setCategories(newSet);
    console.log("categories after combiune");
    console.log(categories);
    console.log("it's a get todo categories get request todos");
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

    setItems(data);
    setLoading(false);
    
    const catesSet = new Set(data.map((item) => item.category));
    console.log("hey");
    console.log(catesSet);
    console.log("rthis is the todo cates"+catesSet);
    setTodoCates(catesSet);
    console.log(todocates);
    console.log("it's a get uncompleted todo get request todos");
  };

  useEffect(() => {
    async function process() {
      if (userId) {
        const token = await getToken({ template: "codehooks" });
        fetchData(token);
        console.log("fetching cates");
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
    console.log("it's a post new todo categories get request todos");
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

  const handleNewCateSubmit = (e) =>{
    NewCatesPost();
    console.log("new cate posted");
    fetchCates();
    console.log("it should get");
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
      console.log(data);
      console.log("it's a form submit post todos");
    }
    fetchData(token);
    setCategory("preferred");
    setContent("");
    setValidation(false);
    setNewItem(null);
    setNewCategory("");
  };
  console.log(categories);

  return (
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
                <CatesFilter cate={cate} fetchCates={fetchCates} type="todos" />
              </>
            ))}

            {/* <Link
              href={"/todos/Option 1"}
              className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Filter by category Option 1
            </Link> */}
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
  );
}
