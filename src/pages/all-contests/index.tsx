import React from "react";
import styles from "./styles.module.css";
import BaseTable from "./components/table";
const AllContests: React.FC = () => {
  return (
    <div className={styles["table"]}>
      <h3>Contests</h3>
      <BaseTable />
    </div>
  );
};

export default AllContests;
