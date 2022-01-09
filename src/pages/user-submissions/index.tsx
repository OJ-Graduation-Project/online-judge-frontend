import styles from "./styles.module.css";
import DataTable from "../user-submissions/components/table";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TopNav from "../../components/topNav";
import Link from "@mui/material/Link";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StayCurrentLandscapeSharp } from "@material-ui/icons";

const columns: GridColDef[] = [
  { field: "date", headerName: "Date", width: 150 },
  { field: "accepted", headerName: "VERDICT", width: 150 },
  { field: "language", headerName: "Language", width: 150 },
  { field: "time", headerName: "Time", width: 150 },
  { field: "space", headerName: "Space", width: 150 },
  { field: "userOutput", headerName: "User Output", width: 150 },
  { field: "input", headerName: "Input", width: 150 },
  { field: "output", headerName: "Output", width: 150 },
  { field: "submittedCode", headerName: "SubmittedCode", width: 400 },
];

interface Submission {
  date: string,
  submittedCode: number,
  language: string,
  accepted: string,
  time: string,
  space: string,
  userOutput: string,
  input: string,
  output: string,
  failedTestCase: {
    testCase: {
      input: string,
      output: string
    }
    userOutput: string
  },
}

const UserSubmissions: React.FC = () => {
  const { id } = useParams()

  let submission: Submission = {
    date: "",
    submittedCode: 0,
    language: "",
    accepted: "",
    time: "",
    space: "",
    userOutput: "",
    input: "",
    output: "",
    failedTestCase: {
      userOutput: "",
      testCase: {
        input: "",
        output: ""
      }
    }
  }

  const [submissions, setSubmissions] = useState([submission])
  const [loadingScore, setLoadingScore] = useState(true)

  let rows = [{}]

  useEffect(() => {
    fetch('http://localhost:8000/user-submissions/' + id, {
      method: 'GET',
    }).then((res) => res.json())
      .then((json) => {
        setSubmissions(json);
        setLoadingScore(false)
      })
    console.log(submissions)
  }, [])

  let loaddata = () => {
    if (loadingScore) return false;

    for (let i = 0; i < submissions.length; i++) {
      console.log("subs[i] ", submissions[i])

      rows[i] = {
        id: i,
        date: submissions[i].date,
        submittedCode: submissions[i].submittedCode,
        language: submissions[i].language,
        accepted: submissions[i].accepted == "false" ? "Wrong answer" : "accepted",
        time: submissions[i].time,
        space: submissions[i].space,
        failedTestCase: submissions[i].failedTestCase,
        userOutput: submissions[i].failedTestCase.userOutput,
        input: submissions[i].failedTestCase.testCase.input,
        output: submissions[i].failedTestCase.testCase.output
      };
    }
    console.log("rows", rows)
    return true;
  }

  return (

    <div className={styles["table"]}>
      <TopNav />

      <h3>Your Submissions</h3>

      {loaddata() ?
        (
          <div style={{ height: 500, width: "100%" }}><DataGrid
            rows={rows}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[7]}

          />
          </div>) : (
          <div>
            You have no submissions
          </div>
        )}
    </div>
  );
};

export default UserSubmissions;
