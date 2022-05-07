import styles from "./styles.module.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TopNav from "../../components/topNav";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {USER_PROBLEMS_URL} from "../../data/EndPoints";
import {Problem} from "../../data/interfaces";

const columns: GridColDef[] = [
  { field: "problemName", headerName: "Problem Name", width: 150 },
  { field: "numberOfSubmissions", headerName: "Number Of Submissions", width: 150 },
  { field: "description", headerName: "Description", width: 150 },
  { field: "timeLimit", headerName: "Time Limit", width: 150 },
  { field: "memoryLimit", headerName: "Space", width: 150 },
  { field: "difficulty", headerName: "Difficulty", width: 150 },
];

const UserProblems: React.FC = () => {
  const { id } = useParams()

  let problem: Problem = {
    problemName: "",
    numberOfSubmissions: 0,
    description: "",
    timeLimit: "",
    memoryLimit: "",
    difficulty: "",
    _id: 0,
    writerId: 0,
    testcases: [],
    problemSubmissionsId: []
  }

  const [problems, setProblems] = useState([problem])
  const [loadingScore, setLoadingScore] = useState(true)

  let rows = [{}]

  useEffect(() => {
    fetch(USER_PROBLEMS_URL + id, {
      method: 'GET',
    }).then((res) => res.json())
      .then((json) => {
        setProblems(json);
        setLoadingScore(false)
      })
    // console.log(problems)
  }, [])

  let loaddata = () => {
    if (loadingScore) return false;

    for (let i = 0; i < problems.length; i++) {
      console.log("subs[i] ", problems[i])

      rows[i] = {
        id: i,
        problemName: problems[i].problemName,
        numberOfSubmissions: problems[i].numberOfSubmissions,
        description: problems[i].description,
        timeLimit: problems[i].timeLimit,
        memoryLimit: problems[i].memoryLimit,
        difficulty: problems[i].difficulty,
        //loop on test cases 
        // input: submissions[i].testcases.testCase.input,
        // output: submissions[i].failedTestCase.testCase.output
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

export default UserProblems;
