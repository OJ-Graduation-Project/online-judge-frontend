import styles from "./styles.module.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TopNav from "../../components/topNav";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {USER_PROBLEMS_URL} from "../../data/EndPoints";
import {Problem} from "../../data/interfaces";
import AlertDialoge from "../../components/alertDialoge"
import BaseTable from "./components/table";

const emptyString="You don't have any created Problems yet! But you can create your own Problem now from Create Problem tab."

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
  const [empty, setEmpty] = useState(false)


  useEffect(() => {
    fetch(USER_PROBLEMS_URL + id, {
      method: 'POST',
    }).then((res) => res.json())
      .then((json) => {
        if(json.message){
          setEmpty(true);
          setLoadingScore(false);
        }
        else{
          setEmpty(false);
        setProblems(json);
        setLoadingScore(false)
        }
      })
  }, [])

  return (
    <div>
    <TopNav />
    <div className={styles["table"]}>
      

      <h3>Your Created Problems</h3>

                <div>{ empty &&<AlertDialoge data={emptyString}/>}</div>

<div>{(!loadingScore)&&(!empty)&&<BaseTable data={problems} />}</div>
    </div>
    </div>
  );
};

export default UserProblems;
