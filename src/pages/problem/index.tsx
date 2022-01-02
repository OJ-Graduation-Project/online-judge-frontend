import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import DenseTable from "./components/table"
import { Button } from "@mui/material";
import TopNav from "../../components/topNav";
import problem from './components/problem.json'
import axios from 'axios';

interface Testcase {
	id: number,
	input: string,
	output: string
}

interface Problem {
    problemId: number,
	problemName: string,
	numberOfSubmissions: number,
	writerId: number,
	description: string,
	timeLimit: string,
	memoryLimit: string,
	Difficulty: string,
	testcases: Testcase[],
	problemSubmissionsId: []
}

const Problem: React.FC = () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");
    let problem = {problemId: 0, problemName:"test", numberOfSubmissions:0, writerId:0, description:"", timeLimit:"", memoryLimit:"", Difficulty:"", testcases:[],problemSubmissionsId:[]} as Problem
    let [items, setItems] = useState(problem)
    let [DataisLoaded, setDataisLoaded] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8000/problem',{
            method : 'POST',
            // headers:{'content-type':'application/json'},
            body:JSON.stringify({name})
        })
        .then((res) => res.json())
        .then((json) => {
            setItems(json);
            setDataisLoaded(true);
        })
    },[])

    useEffect(() => {
        console.log(items)
        
    })


    if (!DataisLoaded) return (
        <div>
            <TopNav/>
            <h1> Loading "{name}", please wait some time... </h1>
        </div>
    );
    else return (
        <div>
            <TopNav />
            <div className={styles["problemPage"]}>
                <h1>Problem: {items.problemName}</h1>
                <h5>
                    time limit per test: {items.timeLimit} <br/>
                    memory limit per test: {items.memoryLimit}<br/>
                    input: standard input<br/>
                    output: standard output<br/>
                </h5>
                <p className={styles["problem"]}>
                    {items.description}
                </p>
                <Button variant='contained' color="primary" onClick={(event) => (window.location.href = "/submit")}>Submit</Button>
                <div className={styles["table"]}><DenseTable test={items.testcases}/></div>
            </div>
        </div>
    );
}

export default Problem;
