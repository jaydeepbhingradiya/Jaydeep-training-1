import React, { useState, useEffect } from "react";
import { View } from "./components/View";
import "./app.css";

const getDatafromLS = () => {
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const App = () => {
  const [books, setbooks] = useState(getDatafromLS());

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [amount, setAmount] = useState("");
  const [isbn, setIsbn] = useState("");

  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    let book = {
      title,
      author,
      amount,
      isbn,
    };
    setbooks([...books, book]);
    setTitle("");
    setAuthor("");
    setAmount("");
    setIsbn("");
  };

  const deleteBook = (isbn) => {
    const filteredBooks = books.filter((element, index) => {
      return element.isbn !== isbn;
    });
    setbooks(filteredBooks);
  };

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div className="wrapper">
      <h3>LOCAL STORAGE</h3>
      <p>Add and view your book list</p>
      <div className="main">
        <div className="form-container">
          <form className="form-group" onSubmit={handleAddBookSubmit}>
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            ></input>
            <br></br>
            <label>Author</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
            ></input>
            <br></br>
            <label>Amount</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            ></input>
            <br></br>
            <label>ISBN#</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setIsbn(e.target.value)}
              value={isbn}
            ></input>
            <br></br>
            <button type="submit" className="btn btn-success btn-md">
              ADD
            </button>
          </form>
        </div>

        <div className="view-container">
          {books.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Amount</th>
                      <th>ISBN#</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <View books={books} deleteBook={deleteBook} />
                  </tbody>
                </table>
              </div>
              <button
                className="btn btn-danger btn-md"
                onClick={() => setbooks([])}
              >
                Remove All
              </button>
            </>
          )}
          {books.length < 1 && <div>No books are added yet</div>}
        </div>
      </div>
    </div>
  );
};

export default App;
