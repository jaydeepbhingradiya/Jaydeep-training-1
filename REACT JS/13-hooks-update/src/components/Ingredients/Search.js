import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const [filterText, SetFilterText] = useState("");

  const filterTextHandler = (e) => {
    SetFilterText(e.target.value);
  };

  useEffect(() => {
    fetch(
      "https://http-hooks-a96e8-default-rtdb.firebaseio.com/ingredients.json"
    )
      .then((response) => response.json())
      .then((responseData) => {
        const loadedDatas = [];
        for (const key in responseData) {
          loadedDatas.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
      });
  }, [filterText]);
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={filterText} onChange={filterTextHandler} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
