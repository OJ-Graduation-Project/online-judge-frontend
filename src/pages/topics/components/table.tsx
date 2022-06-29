import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import React, { useEffect, useState } from "react";
import styles from "../../topics/styles.module.css";
import {TOPICS_URL} from "../../../data/EndPoints";
import AlertDialoge from "../../../components/alertDialoge"
import {Problem} from "../../../data/interfaces";

const columns: GridColDef[] = [
  { field: "id", headerName: "id", width: 50 },
  {
    field: "problemName",
    headerName: "Name",
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
    width: 300,
  },
  { field: "difficulty", headerName: "Difficulty", width: 200 },
  {
    field: "numberOfSubmissions",
    // headerName: "Number of Submissions",
    width: 300,
  },
  {
    field: "topic",
    headerName: "Topic",
    width: 400,
  },
];

const arrayToString=(topics:string[])=>{
  let beautifulString=""
  let beautifulStringArray=[]

  beautifulString=topics.toString().replaceAll(',',", ")

return beautifulString
}

export default function DataTable(props:{
  data: Problem[],
}) {
  const rows = [{}];

    for (let i = 0; i < props.data.length; i++) {

      rows[i] = {
        id: i + 1,
        name: props.data[i].problemName,
        difficulty: props.data[i].difficulty,
        numberOfSubmissions: props.data[i].numberOfSubmissions,
        //topic: props.data[i].topic,
        topic: arrayToString(props.data[i].topic),

      };
    }
  return (
    <div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}
