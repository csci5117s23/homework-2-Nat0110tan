import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  SignedIn,
  SignedOut,
  useAuth,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Home from "..";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
export default function Item() {
  const router = useRouter();
  const { item } = router.query;
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useState("");
  const [data, setData] = useState({});
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [isCateEditing, setIsCateEditing] = useState(false);
  const [updatedCateContent, setUpdatedCateContent] = useState("");
  const [cates, setCates] = useState(new Set(["urgent", "no rush", "preferred"]));
  const url = API_ENDPOINT + "/todolist" + "/" + item;

  const getItem = async (token) => {
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });
    const re = await response.json();
    setData(re);
  };

  const fetchCates = async (token) => {
    const response = await fetch(API_ENDPOINT + "/cateslist?userid=" + userId, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });
    const data = await response.json();
    const catesSet = new Set(data.map((item) => item.cates));
    const newSet = new Set([...catesSet, ...cates]);
    setCates(newSet);
  };

  useEffect(() => {
    async function process() {
      if (userId) {
        const token = await getToken({ template: "codehooks" });
        getItem(token);
        fetchCates(token);
        console.log("we are geting data and cates!");
      }
    }
    process();
  }, [isLoaded]);

  const handleEdit = () => {
    console.log("clicked on edit!");
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedContent(data.content);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = await getToken({ template: "codehooks" });
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        category: data.category,
        content: updatedContent,
        _id: data._id,
        createdOn: data.createdOn,
        completed: data.completed,
        userid: userId,
      }),
    });
    setIsEditing(false);
    getItem(token);
  };

  const handleContentChange = (event) => {
    setUpdatedCateContent(event.target.value);
  };

  const handleDoneButton = async (e) => {
    const token = await getToken({ template: "codehooks" });
    const url = API_ENDPOINT + "/todolist" + "/" + item;
    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        content: data.content,
        category: data.category,
        createdOn: data.createdOn,
        _id: data.id,
        completed: true,
        userid: userId,
      }),
    });
    getItem(token);
  };

  const isCompleted = data.completed;
  var button = <></>;
  if (!isCompleted) {
    button = (
      <button
        onClick={handleDoneButton}
        className="text-center bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full"
      >
        Done
      </button>
    );
  }

  const handleCateEdit = () => {
    console.log("clicked on category edit!");
    setIsCateEditing(true);
  };

  const handleCateCancel = () => {
    setIsCateEditing(false);
    setUpdatedCateContent(data.category);
  };

  const handleCateUpdate = async (e) => {
    e.preventDefault();
    const token = await getToken({ template: "codehooks" });
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        category: updatedCateContent,
        content: data.content,
        _id: data._id,
        createdOn: data.createdOn,
        completed: data.completed,
        userid: userId,
      }),
    });
    setIsCateEditing(false);
    getItem(token);
    fetchCates(token);
  };

  const handleCateChange = (event) => {
    setUpdatedCateContent(event.target.value);
  };

  return (
    <>
      <SignedIn>
        <UserButton />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div>
            <Link
              href={"/todos"}
              className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              All Todos
            </Link>
          </div>
          <div>
            <h2>Content: {data.content}</h2>
            <h2>Category: {data.category}</h2>
            <h2>Created date {data.createdOn}</h2>
            <h2>{data.completed}</h2>
          </div>
          {button}

          {isCateEditing ? (
            <div>
              <label className="block text-gray-700 text-md font-bold mb-2">
                Choose the category
              </label>
              <div className="mb-2 inline-block relative">
                <select
                  value={data.category}
                  placeholder="category"
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleCateChange}
                >
                  {Array.from(cates).map((cate) => (
                    <>
                      <option value={cate}>{cate}</option>
                    </>
                  ))}
                </select>
              </div>
              <button
                className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleCateUpdate}
              >
                Update Category
              </button>
              <button
                className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleCateCancel}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <button
                className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleCateEdit}
              >
                Edit Category
              </button>
            </div>
          )}

          {isEditing ? (
            <div>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={updatedContent}
                onChange={handleContentChange}
              />
              <button
                className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <button
                className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleEdit}
              >
                Edit Content
              </button>
            </div>
          )}
        </main>
      </SignedIn>
      <SignedOut>
        <Home></Home>
      </SignedOut>
    </>
  );
}
