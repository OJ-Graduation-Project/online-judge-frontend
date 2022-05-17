import React, {useState} from "react";
import styles from "./styles.module.css";
import CodeSnippet from "../../components/CodeSnippet";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TopNav from "../../components/topNav";
import { VIEW_SUBMISSION_URL } from "../../data/EndPoints";

const Submission: React.FC = () =>{
    const [submission , setSubmission] = useState({
        submittedCode: "class Solution {\npublic:\n    bool isPowerOfTwo(int n) {\n        if(n < 0)\n            return false;\n        return __builtin_popcount(n) == 1;\n    }\n};",
        language: "cpp",
        accepted: false,
        date: "1/1/2021",
        problemId: 0,
        space: "100 kb",
        time: "100 ms",
        failedTestCase: { //should be testcase object
            reason: "Wrong Answer",
            testCase: {
                input: "1 2",
                output: "3",
                problemId: 371,
                testCaseNumber: 1
            },
            userOutput:"true",
        },
        _id: 0,
        userId: 0,
    });
    var rendered = false;

    const urlParams = new URLSearchParams(window.location.search);
    const submissionID = urlParams.get("submissionid");
    console.log("submissionid = " + submissionID);
    const fetchSubmission = async () => {
        const res = await fetch(VIEW_SUBMISSION_URL + submissionID);
        const data = await res.json();
        return data;
    }
    React.useEffect(() => {
        const getSubmission = async () => {
            const submissionFromServer = await fetchSubmission()
            console.log(submissionFromServer)
            setSubmission(submissionFromServer);
        }
        if(!rendered){
            getSubmission();
            rendered = true;
        }
    }, []);
    return (
        
        <React.Fragment>
        <CssBaseline />
        <TopNav/>
        <Container fixed>
            <div style={styles}>
                <div className = "header" >
                    <h2>Submitted on {submission.date}</h2>
                    <h3>Verdict: </h3>
                    {submission.accepted && <h3 style = {{color: "green"}}> Accepted</h3>}
                    {!submission.accepted && <h3 style = {{color: "red"}}> {submission.failedTestCase.reason}</h3>}
                </div>
                <CodeSnippet code= {submission.submittedCode} language = {submission.language}/>
                {!submission.accepted && <div style = {styles} className = "failedTestCase">
                        <h3>Test case #{submission.failedTestCase.testCase.testCaseNumber}</h3> <hr />
                        <h4>Input: </h4><h4>  {submission.failedTestCase.testCase.input}</h4> <hr /> 
                        <h4>Output:   </h4><h4 style = {{color: "red"}}>{submission.failedTestCase.userOutput}</h4> <hr />
                        <h4>Expected: </h4><h4 style = {{color: "green"}}>{submission.failedTestCase.testCase.output}</h4>
                    </div>} 
            </div>
            
        </Container>
      </React.Fragment>
    );
}

export default Submission;


