import React from "react";
import styles from "./styles.module.css";
import { CodeBlock, dracula } from "react-code-blocks";
import TextField from '@mui/material/TextField';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Button from "@mui/material/Button"


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
    return (
        <div>
            <h2>Enter Problem Description:</h2>
            <TextField id="outlined-basic"  minRows={10} fullWidth={true} label="Problem description" multiline={true} variant="filled" />
            <h2>Enter Problem Solution:</h2>
            <CodeBlock
                text={"print('Hello World!') \nfor(problem in problems)\n   solve(problem) "}
                language={"python"}
                showLineNumbers={true}
                theme={dracula}
            />
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
        </div>
    );
}

export default CreateProblem;