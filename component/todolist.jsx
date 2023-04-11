import Link from "next/link";
export default function TodoItem({ content, category, createdOn, id, completed, fetchData}) {
  const API_ENDPOINT = "https://backend-c7k4.api.codehooks.io/dev/todolist";
  const API_KEY = "7cb1403e-6556-4111-b6e8-f4e7fd4bc732";
    
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
    }

    const isCompleted = completed;
    var button = <></>;
    if(!isCompleted){
      button = (
        <button
          onClick={handleDoneButton}
          className="text-center bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full"
        >
          Done
        </button>
      );
    }

  return (
    <div>
      <Link href={`/${id}`}>
        <h1>{content}</h1>
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
