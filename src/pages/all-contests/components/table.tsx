import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import React from "react";
import {Contest} from "../../../data/interfaces";



export default function DataTable(props:{
  data: Contest[],
  curruserid:number,
}) {
  console.log(props.curruserid)
  
  const rows = [{}];

  let checkregister=(contestName :string)=>{

    for (let i = 0; i < props.data.length; i++) {
      if(props.data[i].contestName==contestName){
        if(props.data[i].RegisteredUserids.includes(props.curruserid)){
        return true;
        }
      }
    }

    return false;
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "Name", width: 400,
    renderCell: (cellValues) => {
      return (
        <Link
          component="button"
          onClick={() =>
            (window.location.href =
              "/all-contests/contest/" + cellValues.row.name + "/startTime/" + cellValues.row.start)
          }
        >
          {cellValues.row.name }
        </Link>
      );
    },
  
  
  
  },
    {
      field: "start",
      headerName: "Start Date",
      width: 400,
    },
    {
      field: "register",
      headerName: "Register",
      renderCell: (cellValues) => {
        return (
          <li> 
          { 
            checkregister(cellValues.row.name)
            ? <Link >Already registered</Link>
            : <Link component="button" onClick={() =>
              (window.location.href =
              "/all-contests/Registration/?contest-name=" + cellValues.row.name)
              }  >    Register</Link>
          }
          </li>
        );
      },
      width: 200,
    },
  ];
  for (let i = 0; i < props.data.length; i++) {
    rows[i] = {
      name: props.data[i].contestName,
      id:i+1,
      start: new Date(props.data[i].contestStartDate).toUTCString(),
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
