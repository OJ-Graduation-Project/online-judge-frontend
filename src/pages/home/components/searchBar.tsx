import { BsSearch } from "react-icons/bs";
import styles from "../../home/styles.module.css";
import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";

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
              (window.location.href = "/?search=" + searchValue)
            }>
        <SearchIcon color = "primary" />
      </button>
    </div>
  );
}
