import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import React from "react";
import {Problem} from "../../../data/interfaces";

const columns: GridColDef[] = [

  { field: "id", headerName: "#", width: 400},
  {
    field: "name",
    headerName: "Name",
    renderCell: (cellValues) => {
        return (
          <Link
            component="button"
            onClick={() =>
              (window.location.href = window.location.href+'/problem/'+cellValues.row.name
                )
            }
          >
                        {cellValues.row.name}

          </Link>
        );
      },
    width: 250,
  },
  {
    field: "constraint",
    headerName: "Constraint",
    width: 200,
  },
  {
    field: "difficulty",
    headerName: "Difficulty",
    width: 200,
  },
];

export default function DataTable(props:{
  data: Problem[],
}) {
  
  const rows = [{}];

  for (let i = 0; i < props.data.length; i++) {
    rows[i] = {
      name: props.data[i].problemName,
      id:props.data[i]._id,
      constraint:"standard input/output",
      difficulty:props.data[i].difficulty
    };
  }
  
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[3]}
      />
    </div>
  );
}
