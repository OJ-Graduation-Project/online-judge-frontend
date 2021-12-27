import React from "react";
import scoreboard from "../../scoreboard.json"
import TopNav from "../../components/topNav";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const Scoreboard: React.FC = () =>{
    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 300 },
        { field: "username", headerName: "Name", width: 300 },
        { field: "problem1", headerName: "Problem 1", width: 300 },
        { field: "problem2", headerName: "Problem 2", width: 300 },
        { field: "problem3", headerName: "Problem 3", width: 300 }
    ];
    
    // const rows = [
    //     { id: "1", username: scoreboard[0].name, problem1: scoreboard[0].p1 ,problem2: scoreboard[0].p2 ,problem3: scoreboard[0].p3 }
        
        // { id: "2", username: "Tarek", problem1: "lel" ,problem2: "lel" ,problem3: "lel" },
        // { id: "3", username: "Mohamed", problem1: "lel" ,problem2: "hehe" ,problem3: "lele" },
        // { id: "4", username: "Youssef", problem1: "lel" ,problem2: "hehe" ,problem3: "lele" },
        // { id: "5", username: "Veju", problem1: "lel" ,problem2: "hehe" ,problem3: "lele" },
        // { id: "6", username: "Rado :/", problem1: "lel" ,problem2: "hehe" ,problem3: "lele" }
    // ]

    const [data,setData] = React.useState(scoreboard)
    const rows = [{ }]
    for (let i = 0;i < 2;i++) {
        console.log(data[i])
        rows[i] = {
            id: i,
            username : data[i].name,
            problem1: data[i].p1,
            problem2: data[i].p2,
            problem3: data[i].p3
        };
        console.log(rows[i])

    }
    const [state, setState] = React.useState({ rows: rows, columns: columns });

    return (
        <div>
            <TopNav />
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
