import React from "react";
import styles from "./styles.module.css";
import LoginForm from "./components/loginForm";
const Login: React.FC = () =>{
    return (
        <div className={styles["Login"]}>
            <div className="Login">
                <LoginForm/>
            </div>
        </div>
    );
}

export default Login;