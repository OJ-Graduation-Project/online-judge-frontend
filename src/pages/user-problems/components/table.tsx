import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import React from "react";
import {Problem} from "../../../data/interfaces";

const columns: GridColDef[] = [
    { field: "problemName", headerName: "Problem Name", width: 300 },
    { field: "numberOfSubmissions", headerName: "Number Of Submissions", width: 300 },
    { field: "timeLimit", headerName: "Time Limit", width: 200 },
    { field: "memoryLimit", headerName: "Space", width: 200 },
    { field: "difficulty", headerName: "Difficulty", width: 100 },
  ];

export default function DataTable(props:{
  data: Problem[],
}) {
  
  const rows = [{}];

  for (let i = 0; i < props.data.length; i++) {
    rows[i] = {
        problemName: props.data[i].problemName,
        numberOfSubmissions: props.data[i].numberOfSubmissions,
        timeLimit: props.data[i].timeLimit,
        memoryLimit: props.data[i].memoryLimit,
        difficulty: props.data[i].difficulty,

      id:i+1,
    //   start: new Date(props.data[i].conteststartdate).toUTCString(),
    };
  }
  
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
