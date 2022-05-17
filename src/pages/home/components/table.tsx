import React from "react";
import Link from "@mui/material/Link";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Problem} from "../../../data/interfaces";

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
    { field: "difficulty", headerName: "Difficulty", width: 300 },
  ];

  const rows = [{}];

  for (let i = 0; i < d.length; i++) {
    rows[i] = {
      id: i+1,
      name: d[i].problemName,
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
      />
    </div>
  );
}
