import Link from "next/link";
import { useAuth, UserButton, SignIn } from "@clerk/nextjs";
export default function TodoItem({
  content,
  category,
  createdOn,
  id,
  completed,
  fetchData,
}) {

  const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const handleDeleteButton = async (e) => {
    const token = await getToken({ template: "codehooks" });
    const url = API_ENDPOINT + "/todolist" + "/"+id;
    await fetch(url, {
      method: "DELETE",
      headers: { "Authorization": "Bearer " + token },
    });
    fetchData(token);
  };

  const handleDoneButton = async (e) => {
    const token = await getToken({ template: "codehooks" });
    const url = API_ENDPOINT + "/todolist" + "/" + id;
    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      },
      body: JSON.stringify({
        content: content,
        category: category,
        createdOn: createdOn,
        _id: id,
        completed: true,
        userid: userId,
      }),
    });
    fetchData(token);
  };

  const isCompleted = completed;
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

  const preview = content.length > 30 ? `${content.substring(0, 30)}...` : content;
  return (
    <div key={id}>
      <Link href={`/todo/${id}`}>
        <h1>{preview}</h1>
        <h2>Created date: {createdOn}</h2>
        <h2>Category: {category}</h2>
      </Link>
      <button
        onClick={handleDeleteButton}
        className="text-center bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full"
      >
        Delete
      </button>
      {button}
    </div>
  );
}
