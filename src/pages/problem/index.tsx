import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./styles.module.css";
import DenseTable from "./components/table"
import { Button } from "@mui/material";
import TopNav from "../../components/topNav";
import problem from './components/problem.json'
import CodeEditor from '@uiw/react-textarea-code-editor';
import Dropdown from 'react-dropdown';
import CodeSnippet from "../../components/CodeSnippet";
import Container from '@mui/material/Container';
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

interface SubmissionRequest {
	problemID: number,
	ownerID: number,
	language: string,
	code: string,
	submissionId: number,
	date: string ,
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
	testcases: TestCase[],
	problemSubmissionsId: []
}
interface TestCase {
    problemId: number,
    testCaseNumber: number,
    input: string,
    output: string,
}
interface FailedTestCase {
    testCase: TestCase,
    reason: string,
    userOutput: string,
}
interface Submission {
	submissionId:number,    
	problemId:number,         
	userId:number,        
    date:string,         
	language:string,   
	submittedCode:string,  
	time:string, 
	space:string,
	accepted:boolean,
	failedTestCase :FailedTestCase,
}

const cookies = new Cookies();

const Problem: React.FC = () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");
    const navigate = useNavigate();
    const cookies = new Cookies();
    let p: Problem = {problemId: 1, problemName:"test", numberOfSubmissions:0, writerId:0, description:"", timeLimit:"", memoryLimit:"", Difficulty:"", testcases:[],problemSubmissionsId:[]}
    let s: Submission = {submissionId: 0,problemId: 0,userId: 0,date: "1/1/2021",language: "cpp",submittedCode: `#include <iostream>
        using namespace std;
        
        int main()
        {
             int x,y;
             cin>>x>>y;
             
             cout << x+y << endl;
             return 0;
        }
        `,time: "",space: "",accepted: false,failedTestCase: {testCase: {problemId: 1,testCaseNumber: 1,input: "",output: "",},reason: "",userOutput: "",}
    }
    let [problem, setProblem] = useState(p)
    let [problemIsLoaded, setProblemIsLoaded] = useState(false)
    let [submissionIsLoaded, setSubmissionIsLoaded] = useState(false)
    let [submission, setSubmission] = useState(s);
    useEffect(() => {
        fetch('http://localhost:8000/problem',{
            method : 'POST',
            // headers:{'content-type':'application/json'},
            body:JSON.stringify({name})
        })
        .then((res) => res.json())
        .then((json) => {
            setProblem(json);
            setProblemIsLoaded(true);
        })
    },[])

    useEffect(() => {
        console.log(problem)
        
    })

    const [language, setLanguage] = useState('cpp');
    const allLanguages = ['java', 'c', 'cpp', 'python'];
    const [code, setCode] = React.useState(`#include <iostream> 
    using namespace std;
        
        int main()
        {
             int x,y;
             cin>>x>>y;
             
             cout << x+y << endl;
             return 0;
        }
        `);
    const closeVerdict=()=>{
        setSubmissionIsLoaded(false);
    }
    const handleSubmit=()=>{
        let hasCookie = cookies.get("cookie")
        if(!hasCookie){
            navigate("/login")
        }
        else{
            const problemid=problem.problemId;
            const submissionRequest:SubmissionRequest = {
                problemID: problem.problemId,
                ownerID: 0,
                language: language,
                code: code,
                submissionId: 18,
                date: "1/1/2022", //to be changed
            }
            fetch('http://localhost:8000/submit',{
                method : 'POST',
                // headers:{'content-type':'application/json'},
                credentials:'include',
                body:JSON.stringify(submissionRequest)
            })
            .then((res) => res.json())
            .then((json)=>{
                console.log(json);
                setSubmission(json);
                setSubmissionIsLoaded(true);
            })
        }
    }
    if (!problemIsLoaded) return (
        <div>
            <TopNav/>
            <h1> Loading "{name}", please wait some time... </h1>
        </div>
    );
    else return (
        <div>
            <TopNav />
            <Container>
            <div >
                <div className={styles["problemPage"]}>
                    <h1>{problem.problemId}. {problem.problemName}</h1>
                    <h5>
                        time limit per test: {problem.timeLimit} <br/>
                        memory limit per test: {problem.memoryLimit}<br/>
                        input: standard input<br/>
                        output: standard output<br/>
                    </h5>
                </div>
                
                <p className={styles["problem"]}>
                    {problem.description}
                </p>
                <div className={styles["table"]}><DenseTable test={problem.testcases}/></div>
                <div>
                    <br/>
                    <div style = {{width: "30%", marginRight: "0", marginLeft: "auto"}}>
                        <Dropdown options={allLanguages} onChange={(language) => {setLanguage(language.value)}} value={language} placeholder="Select an option" />
                    </div>
                </div>
                <hr />
                <CodeEditor
                value={code}
                language={language}
                placeholder="Please enter or paste your code."
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                style={{
                    fontSize: 12,
                    backgroundColor: "#f5f5f5",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
                />
                <hr />
                <Button variant='contained' color="primary" onClick={handleSubmit}>Submit</Button>
            </div>
            {submissionIsLoaded && 
                <div>
                <div className = "header" >
                    <h3>Verdict: </h3>
                    {submission.accepted && <h3 style = {{color: "green"}}> Accepted</h3>}
                    {!submission.accepted && <h3 style = {{color: "red"}}> {submission.failedTestCase.reason}</h3>}
                </div>
                <CodeSnippet code= {submission.submittedCode} language = {submission.language}/>
                {!submission.accepted && <div  className = "failedTestCase">
                        <h3>Test case #{submission.failedTestCase.testCase.testCaseNumber}</h3> <hr />
                        <h4>Input: </h4><h4>  {submission.failedTestCase.testCase.input}</h4> <hr /> 
                        <h4>Output:   </h4><h4 style = {{color: "red"}}>{submission.failedTestCase.userOutput}</h4> <hr />
                        <h4>Expected: </h4><h4 style = {{color: "green"}}>{submission.failedTestCase.testCase.output}</h4>
                    </div>} 
                    <hr/>
                    <Button variant='contained' color="primary" onClick={closeVerdict}>Close</Button>
                    <br />
                </div>}
            </Container>
        </div>
    );
}

export default Problem;
