import { BsSearch } from "react-icons/bs";
import styles from "../../home/styles.module.css";
import React, { useState, useEffect } from "react";

export default function SearchBar() {
  const [searchValue, setsearchValue] = useState("");

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setsearchValue(enteredName);
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
      <button onClick={(event) =>
              (window.location.href = "/home/?search=" + searchValue)
            }>
        <BsSearch />
      </button>
    </div>
  );
}
