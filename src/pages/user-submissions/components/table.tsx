import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import React from "react";
import {Submission} from "../../../data/interfaces";

const columns: GridColDef[] = [
  { field: "date", headerName: "Date", width: 350 },
  { field: "accepted", headerName: "VERDICT", width: 300 },
  { field: "language", headerName: "Language", width: 300 },
  { field: "submittedCode", headerName: "SubmittedCode",
  renderCell: (cellValues) => {
    return (
      <Link
        component="button"
        onClick={(event) =>
          (window.location.href = "/submission/?submissionid=" + cellValues.row.submittedCode)}>
        {cellValues.row.submittedCode}
      </Link>
    );
  }, width: 300 },
];

export default function DataTable(props:{
  data: Submission[],
}) {
  
  const rows = [{}];

  for (let i = 0; i < props.data.length; i++) {
    rows[i] = {
      date: props.data[i].date,
      accepted: props.data[i].failedTestCase.reason == null ? "Accepted" : props.data[i].failedTestCase.reason,
      language: props.data[i].language,
      submittedCode: props.data[i]._id.toString(),
      id:i+1,
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
