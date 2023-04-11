"use client"
import React, {useState, useEffect} from "react"
import TodoItem from "component/todolist"
export default function Todo() {
  const [content, setContent] = useState("");
  // const [category, setCategory] = useState([]);
  const [category, setCategory] = useState("Option 1");
  const [categories, setCategories] = useState([
    "Option 1",
    "Option 2",
    "Option 3",
  ]);
  const [newCategory, setNewCategory] = useState("");
  const [validation, setValidation] = useState(false);

  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newItem, setNewItem] = useState(null);

  const API_ENDPOINT = "https://backend-c7k4.api.codehooks.io/dev/todolist";
  const API_KEY = "7cb1403e-6556-4111-b6e8-f4e7fd4bc732";
  const fetchData = async () => {
    // const response = await fetch(`${API_ENDPOINT}?${queryParams.toString()}`, {
    const response = await fetch(API_ENDPOINT + "?completed=false", {
      method: "GET",
      headers: { "x-apikey": API_KEY },
    });
    const data = await response.json();
    // update state -- configured earlier.
    setItems(data);
    setLoading(false);
    console.log("it's a get uncompleted todo get request todos");
  };
  useEffect(() =>{
    fetchData();
  }, []);


  function handleContentChange (e){
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

  function handleCategoryChange (e){
    setCategory(e.target.value);
  };

  // const handleNewCategoryChange = (event) => {
  //   setNewCategory(event.target.value);
  //   handleAddCategory();
  // };

  // const handleAddCategory = (event) => {

  //   if (newCategory && !categories.includes(newCategory)) {
  //     setCategories([...categories, newCategory]);
  //     setCategory(newCategory);
  //     // setNewCategory("");
  //   }
  // };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    handleValidation();
    setNewItem({ content: content, category: category });
    console.log(category);
    if (validation) {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-apikey": API_KEY,
        },
        body: JSON.stringify({ content: content, category: category }),
      });
      const data = await response.json();
      console.log("it's a form submit post todos");
    }
    fetchData();
    setCategory("");
    setContent("");
    setValidation(false);
    setNewItem(null);
    setNewCategory("");
  }

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
            Enter the content
          </label>
          <div className="mb-2 inline-block relative">
            <select
              value={category}
              onChange={handleCategoryChange}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="option 1">Option 1</option>
              <option value="option 2">Option 2</option>
              <option value="option 3">Option 3</option>
              {/* {category.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))} */}
            </select>

            {/* {categories.map((category) => (
              <div key={category} className="flex items-center">
                <option
                  id={`category-${category}`}
                  type="checkbox"
                  value={category}
                  onChange={handleCategoryChange}
                  className="mr-2"
                />
                <label htmlFor={`category-${category}`}>{category}</label>
              </div>
            ))} */}
          </div>
          <div className="mb-4">
            {/* <label
              className="block text-gray-700 text-md font-bold mb-2"
              htmlFor="newCategory"
            >
              Add new category
            </label> */}
            {/* <input
              value={newCategory}
              onChange={handleNewCategoryChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="newCategory"
              type="text"
              placeholder="Enter category"
            /> */}
          </div>
          <button
            className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            disabled={!validation}
            type="submit"
          >
            Add
          </button>
        </form>

        {loading ? (
          <span>LOADING...</span>
        ) : (
          <>
            <p>All Todos:</p>
            {items.map((item) => (
              <TodoItem
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