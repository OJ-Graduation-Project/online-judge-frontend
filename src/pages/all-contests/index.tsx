import React from "react";
import styles from "./styles.module.css";
import BaseTable from "./components/table";
import TopNav from "../../components/topNav";
const AllContests: React.FC = () => {
  return (
    <div>
       <TopNav/>
    <div className={styles["table"]}>
     
      <h3>Contests</h3>
      <BaseTable />
    </div>
    </div>
  );
};

export default AllContests;
