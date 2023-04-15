import Link from "next/link";
import { useState, useEffect} from "react";
import { useRouter } from "next/router";
import {
  SignedIn,
  SignedOut,
  useAuth,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
export default function Item() {
  const router = useRouter();
  const { item } = router.query;
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useState("");
  const [data, setData] = useState({})
  const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const url = API_ENDPOINT + "/todolist" + "/" + item;

  const getItem = async (token) => {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Authorization": "Bearer " + token },
    });
    const re = await response.json();
    setData(re);
  }

  useEffect(() => {
    async function process() {
      if (userId) {
        const token = await getToken({ template: "codehooks" });
        getItem(token);
        console.log("we are geting data!");
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
        "Authorization": "Bearer " + token,
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
    setUpdatedContent(event.target.value);
  };

  const handleDoneButton = async (e) => {

    const token = await getToken({ template: "codehooks" });
    const url = API_ENDPOINT + "/todolist" + "/" + item;
    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
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

  




  // const edititngbox = <></>;

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

          {/* <button
      className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={() => setIsEditing(true)}
    >
      Edit
    </button> */}
          {/* <form style="display: none;">
      <input type="hidden" ClassName="hidden" value="{{data.post_id}}" />
      <input type="hidden" id="update{{data.post_id}}" name="update" />
      <div id="editor{{data.post_id}}" style="height: 50vh;"></div>
      <button className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" id ="update-btn">Update</button>
      <button class="pure-button" type="button" id="cancel-btn">Cancel</button>
    </form> */}
          {/* <h2>Content: {data.content}</h2> */}
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
                Edit
              </button>
            </div>
          )}
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
