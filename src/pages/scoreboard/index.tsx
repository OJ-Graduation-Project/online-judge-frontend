import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Scoreboard: React.FC = () =>{
    const columns: GridColDef[] = [
        { field: "username", headerName: "Name", width: 300 },
        { field: "problem1", headerName: "Problem 1", width: 300 },
        { field: "problem2", headerName: "Problem 2", width: 300 },
        { field: "problem3", headerName: "Problem 3", width: 300 }
    ];
    const rows = [
        { id: "1", username: "Omar ", problem1: "lel" ,problem2: "lel" ,problem3: "lel" },
        { id: "2", username: "Tarek", problem1: "lel" ,problem2: "lel" ,problem3: "lel" },
        { id: "3", username: "Mohamed", problem1: "lel" ,problem2: "hehe" ,problem3: "lele" },
        { id: "4", username: "Youssef", problem1: "lel" ,problem2: "hehe" ,problem3: "lele" },
        { id: "5", username: "Veju", problem1: "lel" ,problem2: "hehe" ,problem3: "lele" },
        { id: "6", username: "Rado :/", problem1: "lel" ,problem2: "hehe" ,problem3: "lele" }
    ]
    const [state, setState] = React.useState({ rows: rows, columns: columns });
    return (
        <div>
            <h2>Scoreboard</h2>
            <div style={{ height: 500, width: "100%" }}>
            <DataGrid
                    rows={state.rows}
                    columns={state.columns}
                    pageSize={6}
                    rowsPerPageOptions={[6]}
                />
            </div>

        </div>
    );
}

export default Scoreboard;
