import React from "react";
import styles from "./styles.module.css";
import DataTable from "../user-submissions/components/table";
const UserSubmissions: React.FC = () => {
  return (
    <div className={styles["table"]}>
      <h3>Your Submissions</h3>
      <DataTable></DataTable>
    </div>
  );
};

export default UserSubmissions;
