import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button"
import { Container } from '@mui/material';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Dropdown from 'react-dropdown';
import TopNav from "../../components/topNav";
import {CREATE_PROBLEM_URL} from "../../data/EndPoints"
import {TestCase} from "../../data/interfaces";
import {useNavigate} from 'react-router-dom'

const CreateProblem: React.FC = () => {
    const navigate = useNavigate();
    const saveProblem = () => {
        const problem = {
            problemName: problemName,
            description: description,
            topic: problemTopic,//
            difficulty: difficulty,
            timeLimit: timeLimit,
            memoryLimit: memoryLimit,
            testcases : testcases
        }
        console.log(problem)

        fetch(CREATE_PROBLEM_URL,{
            method : 'POST',
            credentials: 'include',
            body:JSON.stringify(problem)
        }).then(()=>{
            alert("Problem created successfully.")
            navigate("/")
        })
    }

    const [problemName, setProblemName] = useState("")
    const [description, setProblemDesc] = useState("")
    const [problemTopic, setProblemTopic] = useState("")
    const [difficulty, setProblemDifficulty] = useState("")
    const [timeLimit, setProblemTimeLimit] = useState("")
    const [memoryLimit, setProblemMemLimit] = useState("")

    const addProblem = () => {
        // insert to database
        saveProblem()

        //Empty fields or redirect to home

        setProblemName("")
        setProblemDesc("")
        setProblemDifficulty("")
        setProblemTopic("")
        setProblemTimeLimit("")
        setProblemMemLimit("")

    }

    const [language, setLanguage] = useState('java');
    const allLanguages = ['java', 'c', 'cpp', 'python'];
    var testCaseIndex = 1;
    var problemIdIndex = 0;
    const categories = [ "Array",
    "String",
    "Hash Table",
    "Dynamic Programming",
    "Maths",
    "Depth First search",
    "Sorting",
    "Greedy",
    "Breadth First Search",
    "Tree",
    "Binary Tree",
    "Binary Search",
    "Two Pointers",
    "Stack",
    "Heap",
    "Graph",
    "Linked-List",
    "Recursion",
    "Divide and Conquer",
    "Segment Tree",];
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
            <Dropdown options={categories}  onChange={(problemTopic) => { setProblemTopic(problemTopic.value) }} value={problemTopic} placeholder="Select a category" />
            <h2>Choose problem difficulty:</h2>
            <Dropdown options={difficulties} onChange={(problemDifficulty) => { setProblemDifficulty(problemDifficulty.value) }} value={difficulty} placeholder="Select a difficulty" />
            <h2>Enter Problem Time Limit:</h2>
            <input id="outlined-basic"  required onChange={event => setProblemTimeLimit(event.target.value)} />
            <h2>Enter Problem Memory Limit:</h2>
            <input id="outlined-basic" required onChange={event => setProblemMemLimit(event.target.value)} />
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