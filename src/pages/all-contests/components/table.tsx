import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import React, { useState, useEffect } from "react";
import data from "../contest.json";

const columns: GridColDef[] = [
  { field: "id", headerName: "Name", width: 400 },
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
          onClick={(event) =>
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

export default function DataTable() {
  const [d, setD] = useState(data);

  const rows = [{}];

  for (let i = 0; i < d.length; i++) {
    rows[i] = {
      id: d[i].contestName,
      writers: "tbd",
      start: d[i].startDate + ",  " + d[i].startTime,
      length: d[i].duration,
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
