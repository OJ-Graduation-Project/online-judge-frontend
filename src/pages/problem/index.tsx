import React, { useState } from "react";
import styles from "./styles.module.css";
import DenseTable from "./components/table"
import { Button } from "@mui/material";
import TopNav from "../../components/topNav";
import problem from './components/problem.json'
const Problem: React.FC = () =>{
    const [prob, setProb] = useState(problem);
    return (
        <div>
            <TopNav/>
            <div className={styles["problemPage"]}>
                <h1>Problem: {prob[0].problemName}</h1>
                <h5>
                    time limit per test: {prob[0].timeLimit} <br/>
                    memory limit per test: {prob[0].memoryLimit}<br/>
                    input: standard input<br/>
                    output: standard output<br/>
                </h5>
                <p className={styles["problem"]}>
                    {prob[0].description}
                </p>
                <Button variant='contained' color="primary" onClick={(event) => (window.location.href = "/submit")}>Submit</Button>
                {/* Send testcases to Table */}
                <div className={styles["table"]}><DenseTable/></div>
            </div>
        </div>
    );
}

export default Problem;
