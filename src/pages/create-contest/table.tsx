import React,{FormEvent} from "react";
import Link from "@mui/material/Link";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import { Problem} from "../../data/interfaces";
import {Dispatch, SetStateAction, useEffect, useState} from "react";

export default function DataTable(props:{
  data: Problem[],
  onClick:(problemname: Set<GridRowId>,size:number)=>void;

}) {
  const d = props.data;
  const columns: GridColDef[] = [

    {
      field: "id",
      headerName: "Problem Name",
      renderCell: (cellValues) => {
        return (
          <Link
            component="button"
            onClick={(event) =>
              (window.location.href = "/problem/?name=" + cellValues.row.id)
            }
          >
            {cellValues.row.id}
          </Link>
        );
      },

      width: 600,
    },
    { field: "difficulty", headerName: "Difficulty", width: 400 },

  ];

  const rows = [{id:"",difficulty:""}];

  for (let i = 0; i < d.length; i++) {
    rows[i] = {
      id: d[i].problemName,
      difficulty: d[i].difficulty,
    };
  }
  return (
    <div style={{ height: 350, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(ids) => {
             const selectedIDs = new Set(ids);
             props.onClick(selectedIDs,rows.length)

          }}

      />
    </div>
  );
}
