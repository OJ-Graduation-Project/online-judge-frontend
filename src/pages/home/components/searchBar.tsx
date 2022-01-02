import { BsSearch } from "react-icons/bs";
import styles from "../../home/styles.module.css";
import React, { useState, useEffect } from "react";

export default function SearchBar() {
  const [searchValue, setsearchValue] = useState("");

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setsearchValue(enteredName);
  };
  const handleSubmit = () => {
    fetch("http://localhost:8000/home", {
      method: "POST",
      body: JSON.stringify({ searchValue }),
    }).then(() => {
      console.log("done");
    });
  };

  return (
    <div className={styles["inputWithButton"]}>
      <input
        type="text"
        placeholder="Search Problems by id, name or tag"
        name="s"
        value={searchValue}
        onChange={inputHandler}
      />
      <button onClick={handleSubmit}>
        <BsSearch />
      </button>
    </div>
  );
}
