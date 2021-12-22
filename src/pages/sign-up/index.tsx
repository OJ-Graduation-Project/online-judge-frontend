import React from "react";
import styles from "./styles.module.css";
import SignUpForm from "./components/signupForm";

const SignUp: React.FC = () => {
  return (
    <div className={styles["SignUp"]}>
      <SignUpForm/>
    </div>
  )
};

export default SignUp;
