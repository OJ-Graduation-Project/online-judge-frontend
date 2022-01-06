import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import DenseTable from "./components/table"
import { Button } from "@mui/material";
import TopNav from "../../components/topNav";
import problem from './components/problem.json'
import Submit from '.'
import CodeEditor from '@uiw/react-textarea-code-editor';
import Dropdown from 'react-dropdown';
import CodeSnippet from "../../components/CodeSnippet";
import Container from '@mui/material/Container';

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
    let p:Problem = {problemId: 1, problemName:"test", numberOfSubmissions:0, writerId:0, description:"", timeLimit:"", memoryLimit:"", Difficulty:"", testcases:[],problemSubmissionsId:[]}

    let [problem, setProblem] = useState(p)
    let [problemIsLoaded, setProblemIsLoaded] = useState(false)
    let [submissionIsLoaded, setSubmissionIsLoaded] = useState(true)
    let [submission, setSubmission] = useState({
        code: "class Solution {\npublic:\n    bool isPowerOfTwo(int n) {\n        if(n < 0)\n            return false;\n        return __builtin_popcount(n) == 1;\n    }\n};",
        accepted: false,
        language: "cpp",
        date: "1/1/2021",
        failedCase: { //should be testcase object
            id: 34,
            reason: "Wrong Answer",
            input:"[0,1,2,3]",
            yourOutput:"true",
            expectedOutput:"false"
        } 
    });
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
    const [code, setCode] = React.useState(
        `#include <iostream>
        using namespace std;
        
        int main()
        {
             int x,y;
             cin>>x>>y;
             
             cout << x+y << endl;
             return 0;
        }
        `
      );
      const handleSubmit=()=>{
        const problemid=problem.problemId;
        const user ={language,code,problemid};
        fetch('http://localhost:8000/submit',{
            method : 'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(user)
        })
        .then((res) => res.json())
        .then((json)=>{
            console.log(json);
            setSubmission(json);
            // console.log("done");

        })
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
            <div className={styles["problemPage"]}>
                <h1>Problem: {problem.problemName}</h1>
                <h5>
                    time limit per test: {problem.timeLimit} <br/>
                    memory limit per test: {problem.memoryLimit}<br/>
                    input: standard input<br/>
                    output: standard output<br/>
                </h5>
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
                <div style = {{height: "40px"}}></div>
                <br/>
            </div>
            {submissionIsLoaded && <Container>
                <div style={styles}>
                <div className = "header" >
                    <h2>Submitted code on {submission.date}</h2>
                    <h3>Verdict: </h3>
                    {submission.accepted && <h3 style = {{color: "green"}}> Accepted</h3>}
                    {!submission.accepted && <h3 style = {{color: "red"}}> {submission.failedCase.reason}</h3>}
                </div>
                <CodeSnippet code= {submission.code} language = {submission.language}/>
                {!submission.accepted && <div style = {styles} className = "failedTestCase">
                        <h3>Test case {submission.failedCase.id}</h3> <hr />
                        <h4>Input: </h4><h4>  {submission.failedCase.input}</h4> <hr /> 
                        <h4>Output:   </h4><h4 style = {{color: "red"}}>{submission.failedCase.yourOutput}</h4> <hr />
                        <h4>Expected: </h4><h4 style = {{color: "green"}}>{submission.failedCase.expectedOutput}</h4>
                    </div>} 
                    <button>Back to problem</button>

            </div>
            </Container>}
        </div>
    );
}

export default Problem;
