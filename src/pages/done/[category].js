import Link from "next/link";
import { useState, useEffect } from "react";
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

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
export default function doneCategory() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { category } = router.query;
  console.log(category);
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const getCategoryData = async (token) => {

    const response = await fetch(
      API_ENDPOINT + "/todolist" + `?category=${category}&completed=true&userid=${userId}`,
      {
        method: "GET",
        headers: { "Authorization": "Bearer " + token },
      }
    );
    const data = await response.json();
    setItems(data.sort((a, b) => (a.createdOn <= b.createdOn ? 1 : -1)));
    setLoading(false);
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

          {loading ? (
            <span>LOADING...</span>
          ) : (
            <>
              <p>{`All Done Todos with category ${category}:`}</p>
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
