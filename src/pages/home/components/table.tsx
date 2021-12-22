import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "Title", width: 800 },
  { field: "status", headerName: "Status", width: 300 },
  { field: "difficulty", headerName: "Difficulty", width: 300 },
];

const rows = [
  {
    id: "84. Largest Rectangle in Histogram",
    difficulty: "Hard",
    status: "Todo",
  },
  {
    id: "68. Text Justification",
    difficulty: "Hard",
    status: "Todo",
  },
  {
    id: "41. First Missing Positive",
    difficulty: "Hard",
    status: "Todo",
  },
  {
    id: "32. Longest Valid Parentheses",
    difficulty: "Hard",
    status: "Todo",
  },
  {
    id: "23. Merge k Sorted Lists",
    difficulty: "Hard",
    status: "Solved",
  },
  {
    id: "63. Unique Paths II",
    difficulty: "Medium",
    status: "Todo",
  },
  {
    id: "61. Rotate List",
    difficulty: "Medium",
    status: "Todo",
  },
  {
    id: "50. Pow(x, n)",
    difficulty: "Medium",
    status: "Solved",
  },
  {
    id: "50. Pow(x, n)",
    difficulty: "Medium",
    status: "Solved",
  },
  {
    id: "19. Remove Nth Node From End of List",
    difficulty: "Medium",
    status: "Solved",
  },
  {
    id: "7. Reverse Integer",
    difficulty: "Medium",
    status: "Solved",
  },
  {
    id: "1736. Latest Time by Replacing Hidden Digits",
    difficulty: "Easy",
    status: "Todo",
  },
  {
    id: "1752. Check if Array Is Sorted and Rotated",
    difficulty: "Easy",
    status: "Todo",
  },
  {
    id: "121. Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    status: "Todo",
  },
  {
    id: "119. Pascal's Triangle II",
    difficulty: "Easy",
    status: "Todo",
  },
  {
    id: "9. Palindrome Number",
    difficulty: "Easy",
    status: "Todo",
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
