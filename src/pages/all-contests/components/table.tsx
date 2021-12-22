import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "@mui/material/Link";

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
            (window.location.href = "/all-contests/Registration")
          }
        >
          Register
        </Link>
      );
    },
    width: 200,
  },
];

const rows = [
  {
    id: "Contest 1",
    writers: "Verginia",
    start: "Dec/24/2021 16:35 UTC",
    length: "2:00",
  },
  {
    id: "Educational Round",
    writers: "Verginia",
    start: "Dec/24/2021 16:35 UTC",
    length: "2:30",
  },
  {
    id: "Round 18",
    writers: "Verginia",
    start: "Dec/24/2021 16:35 UTC",
    length: "3:00",
  },
  {
    id: "Round 11",
    writers: "Verginia",
    start: "Dec/24/2021 16:35 UTC",
    length: "3:00",
  },
  {
    id: "Contest 15",
    writers: "Verginia",
    start: "Dec/24/2021 16:35 UTC",
    length: "3:00",
  },
];

export default function DataTable() {
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
