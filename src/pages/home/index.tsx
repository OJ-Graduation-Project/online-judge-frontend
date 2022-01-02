import React from "react";
import TopNav from "../../components/topNav";
import Collapse from "./components/collapse";
import SearchBar from "./components/searchBar";
import styles from "./styles.module.css";
import BasicTableComponent from "./components/table";
const Home: React.FC = () => {
  return (
    <div className={styles["title"]}>
      <TopNav />
      <Collapse />
      <div className={styles["filters"]}>
        <div className={styles["search"]}>
          <SearchBar />
        </div>
      </div>
      <div className={styles["table"]}>
        <BasicTableComponent />
      </div>
    </div>
  );
};

export default Home;
