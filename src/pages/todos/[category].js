import Link from "next/link";
import { useState, useEffect} from "react";
import { useRouter } from "next/router";
import TodoItem from "@/components/todolist";
import {
  SignedIn,
  SignedOut,
  useAuth,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Home from "..";
export default function category() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  const [content, setContent] = useState("");
  const [validation, setValidation] = useState(false);

  const router = useRouter();
  const {category} = router.query;

  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const getCategoryData = async (token) => {
    const response = await fetch(
      API_ENDPOINT + "/todolist" + `?category=${category}&completed=false&userid=${userId}`,
      {
        method: "GET",
        headers: { "Authorization": "Bearer " + token },
      }
    );
    console.log(API_ENDPOINT + "/todolist" + `?category=${category}`);
    const data = await response.json();
    setItems(data.sort((a, b) => (a.createdOn <= b.createdOn ? 1 : -1)));
    setLoading(false);
    console.log("it's a get category get request todos");
  };

  useEffect(() => {
    async function process() {
      if (userId) {
        const token = await getToken({ template: "codehooks" });
        getCategoryData(token);
      }
    }
    process();
  }, [isLoaded]);

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    handleValidation();
    const token = await getToken({ template: "codehooks" });
    if (validation) {
      const response = await fetch(API_ENDPOINT + "/todolist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
        },
        body: JSON.stringify({
          content: content,
          category: category,
          userid: userId,
        }),
      });
      const data = await response.json();
    }
    getCategoryData(token);
    setContent("");
    setValidation(false);
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
              Category: {category}
            </label>
            <button
              className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              disabled={!validation}
              type="submit"
            >
              Add todo
            </button>
          </form>

          {loading ? (
            <span>LOADING...</span>
          ) : (
            <>
              <p>{`All uncompleted ${category} Todos:`}</p>
              {items.map((item) => (
                <TodoItem
                  key={item._id}
                  content={item.content}
                  category={item.category}
                  createdOn={item.createdOn}
                  id={item._id}
                  completed={item.completed}
                  fetchData={getCategoryData}
                />
              ))}
            </>
          )}
        </main>
      </SignedIn>
      <SignedOut>
        <Home></Home>
      </SignedOut>
    </>
  );
}