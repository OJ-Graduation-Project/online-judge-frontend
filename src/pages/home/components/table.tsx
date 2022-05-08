import React, { useState, useEffect } from "react";
import Link from "@mui/material/Link";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Problem from "../../problem";
export default function DataTable(props:{
  data: Problem[],
}) {
  const d = props.data;
  const columns: GridColDef[] = [
    { field: "id", headerName: "id", width: 50 },

    {
      field: "name",
      headerName: "Title",
      renderCell: (cellValues) => {
        return (
          <Link
            component="button"
            onClick={(event) =>
              (window.location.href = "/problem/?name=" + cellValues.row.name)
            }
          >
            {cellValues.row.name}
          </Link>
        );
      },

      width: 800,
    },
    { field: "status", headerName: "Status", width: 300 },
    { field: "difficulty", headerName: "Difficulty", width: 300 },
  ];

  const rows = [{}];

  console.log(d , " d")

  for (let i = 0; i < d.length; i++) {
    rows[i] = {
      id: d[i]._id,
      name: d[i].problemName,
      difficulty: d[i].Difficulty,
      status: "to be discussed ",
    };
    console.log(rows[i])
  }
  return (
    <div style={{ height: 350, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
