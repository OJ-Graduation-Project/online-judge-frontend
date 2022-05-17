import styles from "./styles.module.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TopNav from "../../components/topNav";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {USER_SUBMISSIONS_URL} from "../../data/EndPoints";
import {Submission} from "../../data/interfaces";
import Link from "@mui/material/Link";

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
      console.log("index " + i + ": "+ submissions[i]._id)
      rows[i] = {
        id: i,
        date: submissions[i].date,
        submittedCode: submissions[i]._id.toString(),
        language: submissions[i].language,
        accepted: submissions[i].failedTestCase.reason == null ? "Accepted" : submissions[i].failedTestCase.reason,
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
