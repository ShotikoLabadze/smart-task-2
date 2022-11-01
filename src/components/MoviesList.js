import React, { useState } from "react";
import Movies from "./Movies";

const MoviesList = () => {
  // movieList
  const [list, setList] = useState([
    "Spider-man",
    "Hawkeye",
    "Hobbit",
    "LOTR,GOT",
  ]);

  //name length
  const [name, setName] = useState("");

  const handleInput = (value) => {
    setName(value);
  };

  return (
    <>
      <div>
        {list.map((x) => (
          <Movies movieName={x} />
        ))}
      </div>

      <div>
        <p>{name}</p>
        <input
          type="text"
          placeholder="type some name"
          onChange={(e) => {
            handleInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            alert(name.length);
          }}
        >
          {" "}
          show length
        </button>
      </div>
    </>
  );
};

export default MoviesList;
