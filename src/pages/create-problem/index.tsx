import React ,{useState} from "react";
import styles from "./styles.module.css";
import { CodeBlock, dracula } from "react-code-blocks";
import TextField from '@mui/material/TextField';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Button from "@mui/material/Button"
import TopNav from "../../components/topNav";
import CodeEditor from '@uiw/react-textarea-code-editor';
import Dropdown from 'react-dropdown';
import Container from '@mui/material/Container';

const CreateProblem: React.FC = () => {
    const columns: GridColDef[] = [
        { field: "input", headerName: "Input", width: 300 },
        { field: "output", headerName: "Output", width: 300 }
    ];
    const rows = [
        { id: "das", input: "10", output: "20" },
        { id: "ss", input: "50", output: "100" },
        { id: "s", input: "25", output: "50" }
    ]
    const [state, setState] = React.useState({ rows: rows, columns: columns });
    const [language, setLanguage] = useState('java');
    const allLanguages = ['java', 'c', 'cpp', 'python'];
    const [code, setCode] = React.useState(
        `function add(a, b) {\n  return a + b;\n}`
      );
    return (
        <div>
            <TopNav />
            <Container>

            
            <h2>Enter Problem Description:</h2>
            <TextField id="outlined-basic"  minRows={10} fullWidth={true} label="Problem description" multiline={true} variant="filled" />
            
            <div>
                <h2>Enter Problem Solution:</h2>
                <div style = {{width: "50%"}}>
                        <Dropdown options={allLanguages} onChange={(language) => {setLanguage(language.value)}} value={language} placeholder="Select an option" />
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
            </div>
            {/* <CodeBlock
                text={"print('Hello World!') \nfor(problem in problems)\n   solve(problem) "}
                language={"python"}
                showLineNumbers={true}
                theme={dracula}
            /> */}
            <Button style={{ float: 'right' }} variant="text">Verify</Button>
            <h2>Enter Test Cases:</h2>
            <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                    rows={state.rows}
                    columns={state.columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />

                <Button style={{ float: 'right' }} variant="text"> Add Test Case</Button>
            </div>
            </Container>
        </div>
    );
}

export default CreateProblem;