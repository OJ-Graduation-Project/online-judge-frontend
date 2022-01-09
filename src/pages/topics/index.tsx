import React from "react";
import styles from "./styles.module.css";
import BaseTable from "./components/table";
import TopNav from "../../components/topNav";
const topics: React.FC = () => {
  return (
    <div>
      <TopNav />

      <div className={styles["table"]}>
        <BaseTable />
      </div>
    </div>
  );
};

export default topics;
