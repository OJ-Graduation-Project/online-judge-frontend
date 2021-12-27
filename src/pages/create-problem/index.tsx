import React, { useState } from "react";
import styles from "./styles.module.css";
import { CodeBlock, dracula } from "react-code-blocks";
import TextField from '@mui/material/TextField';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Button from "@mui/material/Button"
import { Container } from '@mui/material';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Dropdown from 'react-dropdown';
import TopNav from "../../components/topNav";

const CreateProblem: React.FC = () => {

    const [problemJSONName, setproblemJSONName] = useState("problem")

    const saveProblem = () => {
        const fileData = JSON.stringify({
            name: problemName,
            problemDesc: problemDesc,
            category: problemCategory,
            difficulty: problemDifficulty,
            timeLimit: problemTimeLimit,
            solutionCode: problemSolution
        });
        const blob = new Blob([fileData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `${problemJSONName}.json`;
        link.href = url;
        link.click();
    }

    const [problemName, setProblemName] = useState("")
    const [problemDesc, setProblemDesc] = useState("")
    const [problemCategory, setProblemCategory] = useState("")
    const [problemDifficulty, setProblemDifficulty] = useState("")
    const [problemTimeLimit, setProblemTimeLimit] = useState("")
    const [problemSolution, setProblemSolution] = React.useState(
        `function add(a, b) {\n  return a + b;\n}`
    );




    const handleProblemChange = () => {
        console.log("problemDesc: ", problemDesc)
        console.log("problemName: ", problemName)
        console.log("problemCategory: ", problemCategory)
        console.log("problemDifficulty: ", problemDifficulty)
        console.log("problemTimeLimit: ", problemTimeLimit)
    }

    const addProblem = () => {
        // setJsonData(problem)
        saveProblem()

        //Empty fields or redirect to home

        setProblemName("")
        setProblemDesc("")
        setProblemDifficulty("")
        setProblemCategory("")
        setProblemSolution(" `function add(a, b) {\n  return a + b;\n}`")
        setProblemTimeLimit("")

    }
    const verifySolution = () => {
        //Call solution result from server and show it
        console.log("solution is tamam yasta ")
        // if success call setProblemSolution with the solution
    }
    const [language, setLanguage] = useState('java');
    const allLanguages = ['java', 'c', 'cpp', 'python'];

    const categories = ['DP', 'Binary Search', 'Graph', 'Trees'];
    const difficulties = ['Easy', 'Medium', 'Hard'];


    const [testCaseJSONName, settestCaseJSONName] = useState("testcase")
    const saveTestCase = () => {
        const fileData = JSON.stringify({
            input: input,
            output: output
        });
        const blob = new Blob([fileData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `${testCaseJSONName}.json`;
        link.href = url;
        link.click();
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
            <h2>Enter Problem Name:</h2>
            <TextField id="outlined-basic" fullWidth={true} label="Problem Name" multiline={true} variant="filled" onChange={event => setProblemName(event.target.value)} />
            <h2>Enter Problem Description:</h2>
            <TextField id="outlined-basic" minRows={10} fullWidth={true} label="Problem description" multiline={true} variant="filled" onChange={event => setProblemDesc(event.target.value)} />
            <h2>Choose problem category:</h2>
            <Dropdown options={categories} onChange={(problemCategory) => { setProblemCategory(problemCategory.value) }} value={problemCategory} placeholder="Select a category" />
            <h2>Choose problem difficulty:</h2>
            <Dropdown options={difficulties} onChange={(problemDifficulty) => { setProblemDifficulty(problemDifficulty.value) }} value={problemDifficulty} placeholder="Select a difficulty" />
            <h2>Enter Problem TimeLimit:</h2>
            <TextField id="outlined-basic" fullWidth={true} label="Problem TimeLimit in ms" multiline={true} variant="filled" onChange={event => setProblemTimeLimit(event.target.value)} />

            <Button type="submit" onClick={handleProblemChange} style={{ float: 'right' }} variant="text">Submit</Button>

            <div>
                <h2>Enter Problem Solution:</h2>
                <div style={{ width: "50%" }}>
                    <Dropdown options={allLanguages} onChange={(language) => { setLanguage(language.value) }} value={language} placeholder="Select an option" />
                </div>
                <hr />
                <CodeEditor
                    value={problemSolution}
                    language={language}
                    placeholder="Please enter or paste your code."
                    onChange={(evn) => setProblemSolution(evn.target.value)}
                    padding={15}
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
        </div>
    );
}

export default CreateProblem;