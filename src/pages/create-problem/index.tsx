import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button"
import { Container } from '@mui/material';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Dropdown from 'react-dropdown';
import TopNav from "../../components/topNav";
import {CREATE_PROBLEM_URL} from "../../data/EndPoints"
import {TestCase} from "../../data/interfaces";

const CreateProblem: React.FC = () => {


    const saveProblem = () => {
        const problem = {
            problemName: problemName,
            Description: description,
            Category: problemCategory,//
            Difficulty: difficulty,
            TimeLimit: timeLimit,
            MemoryLimit: memoryLimit,
            SolutionCode: solutionCode, //
            testcases : testcases
        }
        console.log(problem)

        fetch(CREATE_PROBLEM_URL,{
            method : 'POST',
            body:JSON.stringify(problem)
        }).then(()=>{
            console.log("done");
        })
    }

    const [problemName, setProblemName] = useState("")
    const [description, setProblemDesc] = useState("")
    const [problemCategory, setProblemCategory] = useState("")
    const [difficulty, setProblemDifficulty] = useState("")
    const [timeLimit, setProblemTimeLimit] = useState(0)
    const [memoryLimit, setProblemMemLimit] = useState(0)
    const [solutionCode, setProblemSolution] = React.useState(
        `function add(a, b) {\n  return a + b;\n}`
    );  

    const addProblem = () => {
        // insert to database
        saveProblem()

        //Empty fields or redirect to home

        setProblemName("")
        setProblemDesc("")
        setProblemDifficulty("")
        setProblemCategory("")
        setProblemSolution(" `function add(a, b) {\n  return a + b;\n}`")
        setProblemTimeLimit( 0 ) 
        setProblemMemLimit( 0 )

    }
    const verifySolution = () => {
        //Call solution result from server and show it
        console.log("solution is tamam yasta ")
        // if success call setProblemSolution with the solution
    }

    const [language, setLanguage] = useState('java');
    const allLanguages = ['java', 'c', 'cpp', 'python'];
    var testCaseIndex = 1;
    var problemIdIndex = 0;
    const categories = ['DP', 'Binary Search', 'Graph', 'Trees'];
    const difficulties = ['Easy', 'Medium', 'Hard'];

    let testCase:TestCase={problemId: 0, testCaseNumber: 0, input:'', output:''} //first testCase in testCases is empty 3shan msh 3aref aghayarha :(


    const [testcases, setTestCases] = useState([])
    
    const saveTestCase = () => {
        console.log("before adding" , testcases)

        testcases.push( {
            problemId: problemIdIndex,
            testCaseNumber: testCaseIndex,
            input: input, 
            output: output
        } )
        testCaseIndex = testCaseIndex + 1;
        console.log(testcases)
        
    }

    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")

    const addTestCase = () => {
        saveTestCase()
        //send this testcase to the backend and increment its number then reset fields
        setInput("")
        setOutput("")
    }

    return (
        <div>
            
            <TopNav />
            <Container>
            <h2>Enter Problem Name:</h2>
            <TextField id="outlined-basic"  required fullWidth={true} label="Problem Name" multiline={true} variant="filled" onChange={event => setProblemName(event.target.value)} />
            <h2>Enter Problem Description:</h2>
            <TextField id="outlined-basic" required minRows={10} fullWidth={true} label="Problem description" multiline={true} variant="filled" onChange={event => setProblemDesc(event.target.value)} />
            <h2>Choose problem category:</h2>
            <Dropdown options={categories}  onChange={(problemCategory) => { setProblemCategory(problemCategory.value) }} value={problemCategory} placeholder="Select a category" />
            <h2>Choose problem difficulty:</h2>
            <Dropdown options={difficulties} onChange={(problemDifficulty) => { setProblemDifficulty(problemDifficulty.value) }} value={difficulty} placeholder="Select a difficulty" />
            <h2>Enter Problem Time Limit:</h2>
            <input id="outlined-basic"  required onChange={event => setProblemTimeLimit(event.target.valueAsNumber)} />
            <h2>Enter Problem Memory Limit:</h2>
            <input id="outlined-basic" required onChange={event => setProblemMemLimit(event.target.valueAsNumber)} />

            <div>
                <h2>Enter Problem Solution:</h2>
                <div style={{ width: "50%" }}>
                    <Dropdown options={allLanguages} onChange={(language) => { setLanguage(language.value) }} value={language} placeholder="Select an option" />
                </div>
                <hr />
                <CodeEditor
                    value={solutionCode}
                    language={language}
                    placeholder="Please enter or paste your code."
                    onChange={(evn) => setProblemSolution(evn.target.value)}
                    padding={15}
                    required
                    style={{
                        fontSize: 12,
                        backgroundColor: "#f5f5f5",
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
                />
            </div>

            <Button onClick={verifySolution} style={{ float: 'right' }} variant="text">Verify</Button>
            <h2>Enter Test Cases:</h2>
            <div style={{ height: 400, width: "100%" }}>
                <h3>Enter the input</h3>
                <TextField id="outlined-basic" fullWidth={true} label="Test case input" multiline={true} variant="filled" value={input} onChange={event => setInput(event.target.value)} />
                <h3>Enter the output</h3>
                <TextField id="outlined-basic" fullWidth={true} label="Test case output" multiline={true} variant="filled" value={output} onChange={event => setOutput(event.target.value)} />

                <Button style={{ float: 'right' }} variant="text" onClick={addTestCase}> Add Test Case</Button>
            </div>
            <Button style={{ float: 'right' }} variant="text" onClick={addProblem}>Submit Problem</Button>
            </Container>
        </div>
    );
}

export default CreateProblem;