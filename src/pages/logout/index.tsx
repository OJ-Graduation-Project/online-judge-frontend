import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import {LOGOUT_URL} from "../../data/EndPoints";

const Logout: React.FC = () =>{
    const navigate = useNavigate();
    useEffect(() => {
        fetch(LOGOUT_URL,{
            method : 'POST',
            credentials:'include',
            body:JSON.stringify({})
        })
        .then((res) => res.json())
        .then((json) => {
        })
    },[])

    setTimeout(() => {
        navigate("/home");
    }, 3000);
    return (
        <div className={styles["Login"]}>
            <div className={styles["logout"]}>
                <h1>Logged out successfully.</h1>
                <h3><a href="/home">Visit homepage.</a></h3>
            </div>
        </div>
    );
}

export default Logout;