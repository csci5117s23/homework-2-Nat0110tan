import Link from "next/link";
import { useState, useEffect} from "react";
import { useRouter } from "next/router";

export default function Item() {
  const router = useRouter();
  const { item } = router.query;
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useState("");
  const [data, setData] = useState({})
  const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const url = API_ENDPOINT + "/" + item;
  const getItem = async () => {
    // const url = process.env.API_ENDPOINT + "/" + id;
    const response = await fetch(url, {
      method: "GET",
      headers: { "x-apikey": API_KEY}
    });
    const re = await response.json();
    setData(re);
  }

  useEffect(() => {
    getItem();
  }, []);

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
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": API_KEY,
      },
      body: JSON.stringify({
        category: data.category,
        content: updatedContent,
        _id: data._id,
        createdOn: data.createdOn,
        completed: data.completed,
      }),
    });
    setIsEditing(false);
    getItem();
  };

  const handleContentChange = (event) => {
    setUpdatedContent(event.target.value);
  };

  const handleDoneButton = async (e) => {
    // e.preventDefault();
    const url = API_ENDPOINT + "/" + item;
    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": API_KEY,
      },
      body: JSON.stringify({
        content: data.content,
        category: data.category,
        createdOn: data.createdOn,
        _id: data.id,
        completed: true,
      }),
    });
    getItem();
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
  );
}
// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/router";
// export default async function Item() {

  // const [isEditing, setIsEditing] = useState(false);
  // const [updatedContent, setUpdatedContent] = useState("");
//   const router = useRouter();
//   const { item } = router.query;
//   console.log(item);

  // const API_ENDPOINT = "https://back-x5hb.api.codehooks.io/dev/todolist";
  // const API_KEY = "bed32666-b5b7-4998-97e1-21046bd9cfd2";
  // const url = API_ENDPOINT + "/" + id
  // const response = await fetch(url, {
  //   method: "GET",
  //   headers: { "x-apikey": API_KEY },
  // });
  // const data = await response.json();

  // const handleEdit = () => {
  //   console.log("clicked on edit!");
  //   setIsEditing(true);
  // };

  // const handleCancel = () => {
  //   setIsEditing(false);
  //   setUpdatedContent(data.content);
  // };

  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch(url, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-apikey": API_KEY,
  //     },
  //     body: JSON.stringify({
  //       ...data,
  //       content: updatedContent,
  //     }),
  //   });
  //   console.log(response);
  //   setIsEditing(false);
  // };

  // const handleContentChange = (event) => {
  //   setUpdatedContent(event.target.value);
  // };

  // // const edititngbox = <></>;

  // return (
  //   <div>
  //     <h2>Content: {data.content}</h2>
  //     <h2>Category: {data.category}</h2>
  //     <h2>Created date {data.createdOn}</h2>
  //     <h2>{data.completed}</h2>
  //     <Link
  //       href={"/todos"}
  //       className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
  //     >
  //       All Todos
  //     </Link>
  //     {/* <button
  //       className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
  //       onClick={() => setIsEditing(true)}
  //     >
  //       Edit
  //     </button> */}
  //     {/* <form style="display: none;">
  //       <input type="hidden" ClassName="hidden" value="{{data.post_id}}" />
  //       <input type="hidden" id="update{{data.post_id}}" name="update" />
  //       <div id="editor{{data.post_id}}" style="height: 50vh;"></div>
  //       <button className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" id ="update-btn">Update</button>
  //       <button class="pure-button" type="button" id="cancel-btn">Cancel</button>
  //     </form> */}
  //     {/* <h2>Content: {data.content}</h2> */}
  //     {isEditing ? (
  //       <div>
  //         <input
  //           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //           value={updatedContent}
  //           onChange={handleContentChange}
  //         />
  //         <button
  //           className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
  //           onClick={handleUpdate}
  //         >
  //           Update
  //         </button>
  //         <button
  //           className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
  //           onClick={handleCancel}
  //         >
  //           Cancel
  //         </button>
  //       </div>
  //     ) : (
  //       <div>
  //         <button
  //           className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
  //           onClick={handleEdit}
  //         >
  //           Edit
  //         </button>
  //       </div>
  //     )}
  //   </div>
  // );
// }
