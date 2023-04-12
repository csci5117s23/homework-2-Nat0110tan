import Link from "next/link";
export default function TodoItem({
  content,
  category,
  createdOn,
  id,
  completed,
  fetchData,
}) {
  const API_ENDPOINT = "https://back-x5hb.api.codehooks.io/dev/todolist";
  const API_KEY = "bed32666-b5b7-4998-97e1-21046bd9cfd2";

  const handleDeleteButton = async (e) => {
    const url = API_ENDPOINT + "/" + id;
    await fetch(url, {
      method: "DELETE",
      headers: { "x-apikey": API_KEY },
    });
    fetchData();
  };

  const handleDoneButton = async (e) => {
    // e.preventDefault();
    const url = API_ENDPOINT + "/" + id;
    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": API_KEY,
      },
      body: JSON.stringify({
        content: content,
        category: category,
        createdOn: createdOn,
        _id: id,
        completed: true,
      }),
    });
    fetchData();
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
