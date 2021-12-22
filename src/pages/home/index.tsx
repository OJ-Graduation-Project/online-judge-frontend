import React from "react";
import TopNav from "../../components/topNav";
import Collapse from "./components/collapse";
import DropDown from "./components/dropDown";
import SearchBar from "./components/searchBar";
import styles from "./styles.module.css";
import BasicTableComponent from "./components/table";
const Home: React.FC = () => {
  var difficulty: string[];
  difficulty = ["All", "Easy", "Medium", "Difficult"];
  var status: string[];
  status = ["All", "Solved", "Attempted", "Todo"];

  return (
    <div className={styles["title"]}>
      <TopNav />
      <Collapse />
      <div className={styles["filters"]}>
        <div className={styles["searchAndDrop"]}>
          <DropDown list={difficulty} placeHolder="Difficulty" />
          <DropDown list={status} placeHolder="Status" />
          <div className={styles["search"]}>
            <SearchBar />
          </div>
        </div>
      </div>
      <div className={styles["table"]}>
        <BasicTableComponent />
      </div>
    </div>
  );
};

export default Home;
