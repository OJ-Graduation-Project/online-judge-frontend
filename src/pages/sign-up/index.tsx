import React from "react";
import styles from "./styles.module.css";
import SignUpForm from "./components/signupForm";
import TopNav from "../../components/topNav";

const SignUp: React.FC = () => {
  return (
    <div className={styles["SignUp"]}>
      {/* <TopNav></TopNav> */}
      <SignUpForm/>
    </div>
  )
};

export default SignUp;
