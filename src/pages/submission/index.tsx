import React, {useState} from "react";
import useEffect from "react";
import styles from "./styles.module.css";
import { CopyBlock ,a11yLight} from "react-code-blocks";
import CodeSnippet from "../../components/CodeSnippet";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
interface submission {
    code: string;
    verdict: string;
    language: string;
}
interface testCase{
    id: number,
    input: string,
    yourOutput: string,
    expectedOutput: string
}
const Submission: React.FC = () =>{
    const [submission , setSubmission] = useState({
        code: "class Solution {\npublic:\n    bool isPowerOfTwo(int n) {\n        if(n < 0)\n            return false;\n        return __builtin_popcount(n) == 1;\n    }\n};",
        accepted: true,
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
    // const fetchSubmission = async () => {
    //     const res = await fetch('http://localhost:5000/submissions');
    //     const data = await res.json();
    //     return data;
    // }
    // React.useEffect(() => {
    //     const getSubmission = async () => {
    //         const submissionFromServer = await fetchSubmission()
    //         setSubmission(submissionFromServer);
    //     }  
    //     getSubmission();
    // }, []);
    // const text: string = "Lorem Ipsum is simply \ndummy text of the \nprinting and\n typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    return (
        <React.Fragment>
        <CssBaseline />
        <Container fixed>
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
            
        </Container>
      </React.Fragment>
    );
}

export default Submission;


