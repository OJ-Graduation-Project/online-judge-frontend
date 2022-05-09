import styles from "./styles.module.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TopNav from "../../components/topNav";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {USER_SUBMISSIONS_URL} from "../../data/EndPoints";
import {Submission} from "../../data/interfaces";

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


const UserSubmissions: React.FC = () => {
  const { id } = useParams()

  let submission: Submission = {
    date: "",
    submittedCode: "",
    language: "",
    accepted: "",
    time: "",
    space: "",
    failedTestCase: {
      userOutput: "",
      reason: "",
      testCase: {
        problemId: 0,
        testCaseNumber: 0,
        input: "",
        output: ""
      }
    },
    _id: 0,
    problemId: 0,
    userId: 0
  }

  const [submissions, setSubmissions] = useState([submission])
  const [loadingScore, setLoadingScore] = useState(true)

  let rows = [{}]

  useEffect(() => {
    fetch(USER_SUBMISSIONS_URL + id, {
      method: 'POST',
      credentials:"include"
    }).then((res) => res.json())
      .then((json) => {
        setSubmissions(json);
        setLoadingScore(false)
      })
    console.log(submissions)
  }, [])

  let loaddata = () => {
    if (loadingScore ||submissions==null ) return false;

    for (let i = 0; i < submissions.length; i++) {
      console.log("subs[i] ", submissions[i])

      rows[i] = {
        id: i,
        date: submissions[i].date,
        submittedCode: submissions[i].submittedCode,
        language: submissions[i].language,
        accepted: submissions[i].failedTestCase.reason == null ? "Accepted" : submissions[i].failedTestCase.reason,
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
    <div>
      <TopNav />
    <div className={styles["table"]}>
      

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
    </div>
  );
};

export default UserSubmissions;
