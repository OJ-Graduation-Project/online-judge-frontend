import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "@mui/material/Link";

const columns: GridColDef[] = [
  {
    field: "submission",
    headerName: "Submission",
    renderCell: (cellValues) => {
      return (
        <Link href={`#${cellValues.row.submission}`}>
          {cellValues.row.submission}
        </Link>
      );
    },
    width: 200,
  },
  { field: "id", headerName: "Problem", width: 400 },
  { field: "language", headerName: "Language", width: 200 },
  {
    field: "verdict",
    headerName: "Verdict",
    width: 200,
  },
  { field: "time", headerName: "Time", width: 200 },
  { field: "space", headerName: "Space", width: 150 },
];

const rows = [
  {
    submission: "123456",
    id: "84. Largest Rectangle in Histogram",
    language: "Python",
    verdict: "Accepted",

    time: "46 ms",
    space: "1000 KB",
  },
  {
    submission: "334324",

    id: "68. Text Justification",
    language: "C++",
    verdict: "Accepted",
    time: "46 ms",
    space: "1000 KB",
  },
  {
    submission: "4232",

    id: "41. First Missing Positive",
    language: "Java",
    verdict: "Accepted",
    time: "46 ms",
    space: "1000 KB",
  },
  {
    submission: "67676",

    id: "32. Longest Valid Parentheses",
    language: "C++",
    verdict: "Time limit exceeded",
    time: "2000 ms",
    space: "1000 KB",
  },
  {
    submission: "343433",

    id: "23. Merge k Sorted Lists",
    language: "C++",
    verdict: "Accepted",
    time: "46 ms",
    space: "1000 KB",
  },
  {
    submission: "232323",

    id: "63. Unique Paths II",
    language: "python",
    verdict: "Accepted",
    time: "46 ms",
    space: "1000 KB",
  },
  {
    submission: "787877",

    id: "61. Rotate List",
    language: "python",
    verdict: "Accepted",
    time: "46 ms",
    space: "1000 KB",
  },
  {
    submission: "123456",

    id: "50. Pow(x, n)",
    language: "python",
    verdict: "Accepted",
    time: "46 ms",
    space: "1000 KB",
  },
  {
    submission: "123456",

    id: "50. Pow(x, n)",
    language: "python",
    verdict: "Accepted",
    time: "46 ms",
    space: "1000 KB",
  },
  {
    submission: "123456",

    id: "19. Remove Nth Node From End of List",
    language: "python",
    verdict: "Accepted",
    time: "46 ms",
    space: "1000 KB",
  },
  {
    submission: "123456",

    id: "7. Reverse Integer",
    language: "python",
    verdict: "Accepted",
    time: "46 ms",
    space: "1000 KB",
  },
  {
    submission: "123456",

    id: "1736. Latest Time by Replacing Hidden Digits",
    language: "python",
    verdict: "Accepted",
    time: "46 ms",
    space: "1000 KB",
  },
  {
    submission: "123456",

    id: "1752. Check if Array Is Sorted and Rotated",
    language: "python",
    verdict: "Accepted",
    time: "46 ms",
    space: "1000 KB",
  },
  {
    submission: "123456",

    id: "121. Best Time to Buy and Sell Stock",
    language: "python",
    verdict: "Accepted",
    time: "46 ms",
    space: "1000 KB",
  },
  {
    submission: "123456",
    id: "119. Pascal's Triangle II",
    language: "python",
    verdict: "Accepted",
    time: "46 ms",
    space: "1000 KB",
  },
  {
    submission: "123456",

    id: "9. Palindrome Number",
    language: "python",
    verdict: "Accepted",
    time: "46 ms",
    space: "1000 KB",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
      />
    </div>
  );
}
