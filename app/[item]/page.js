"use client"
import Link from "next/link"
export default async function Item({params}) {
  const {item} = params;
  const API_ENDPOINT = "https://backend-c7k4.api.codehooks.io/dev/todolist";
  const API_KEY = "7cb1403e-6556-4111-b6e8-f4e7fd4bc732";
  const url = API_ENDPOINT + "/"+ item;
  const response = await fetch(url, {
    method: "GET",
    headers: { "x-apikey": API_KEY },
  });
  const data = await response.json();
  function handleEdit(){

  }

  return (
    <div>
      <h2>Content: {data.content}</h2>
      <h2>Category: {data.category}</h2>
      <h2>Created date {data.createdOn}</h2>
      <h2>{data.completed}</h2>
      <Link
        href={"/todos"}
        className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        All Todos
      </Link>
      <button
        className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleEdit}
      >
        Edit
      </button>
      {/* <form style="display: none;">
        <input type="hidden" ClassName="hidden" value="{{data.post_id}}" />
        <input type="hidden" id="update{{data.post_id}}" name="update" />
        <div id="editor{{data.post_id}}" style="height: 50vh;"></div>
        <button className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" id ="update-btn">Update</button>
        <button class="pure-button" type="button" id="cancel-btn">Cancel</button>
      </form> */}
      <h2>Content: {data.content}</h2>


    </div>
  );

  
}