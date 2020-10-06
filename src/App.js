import React, { useEffect, useState } from "react";
function App() {
  const [books, setbooks] = useState([{}]);

  useEffect(() => {
    setInterval(() => {
      fetch("api/books")
        .then((res) => res.json())
        .then((data) => {
          setbooks(data);
        });
    }, 2000);
  }, []);
  const addBook = () => {
    const title = prompt("Enter the Title");
    const author = prompt("Enter the Author");

    if(!author || !author)
        return false

    fetch("/api/add/", {
      method: "POST",
      body: JSON.stringify({ title, author }),
    }).catch((error)=> {
        console.log("ERROR", error)
    })
  }

  if (!books.length) return <h2>Loading....</h2>;

  return (
    <div>
      <h1>Available Books</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Book</th>
          </tr>
        </thead>
        <tbody>
          {books.map((bookObj, ind) => {
            return (
              <tr key={ind}>
                <td>{bookObj.title}</td>
                <td>{bookObj.author}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button onClick={addBook}>Add Books</button>
    </div>
  );
}

export default App;
