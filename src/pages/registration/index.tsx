import React from "react";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";

const Registration: React.FC = () => {
  return (
    <div className={styles["register"]}>
      <h3 className={styles["warning"]}>
        {" "}
        By Clicking on Register you confirm that :{" "}
      </h3>
      <p>
        1- Will not use multiple accounts and will take part in the contest
        using your personal and the single account.
      </p>
      <p>
        2- Will not communicate with other participants, share ideas of
        solutions and hacks
      </p>
      <p>
        3- Will not attempt to deliberately destabilize the testing process and
        try to hack the contest system in any form
      </p>
      <Button>Register</Button>
    </div>
  );
};

export default Registration;
