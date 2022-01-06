import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import React, { useState, useEffect } from "react";

import Contest from "../components/interface"
interface Row{
  id:number,
  cont:Contest
}
const columns: GridColDef[] = [
  { field: "id", headerName: "Name", width: 400,
  renderCell: (cellValues) => {
    return (
      <Link
        component="button"
        onClick={() =>
          (window.location.href =
            "/all-contests/contest/" + cellValues.row.id)
        }
      >
        {cellValues.row.name }
      </Link>
    );
  },



},
  { field: "writers", headerName: "Writers", width: 200 },
  {
    field: "start",
    headerName: "Start",
    width: 250,
  },
  { field: "length", headerName: "Length", width: 200 },
  {
    field: "register",
    headerName: "Register",
    renderCell: (cellValues) => {
      return (
        <Link
          component="button"
          onClick={() =>
            (window.location.href =
              "/all-contests/Registration/?contest-name=" + cellValues.row.id)
          }
        >
          Register
        </Link>
      );
    },
    width: 200,
  },
];

export default function DataTable(props:{
  data: Contest[],
}) {
  //const [d, setD] = useState(data);
  
  const rows = [{}];

  for (let i = 0; i < props.data.length; i++) {
    rows[i] = {
      name: props.data[i].contestName,
      id:props.data[i].contestId,
      writers: "tbd",
      start: props.data[i].startTime,
      length: props.data[i].duration,
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
