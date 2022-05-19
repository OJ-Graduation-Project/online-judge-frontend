import styles from "./styles.module.css";
import TopNav from "../../components/topNav";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {USER_SUBMISSIONS_URL} from "../../data/EndPoints";
import {Submission} from "../../data/interfaces";
import AlertDialoge from "../../components/alertDialoge"
import BaseTable from "./components/table";


const emptyString="You don't have any Submissions yet! But you can try to submit your solution for any Problem."

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
  const [empty, setEmpty] = useState(false)

  useEffect(() => {
    fetch(USER_SUBMISSIONS_URL + id, {
      method: 'POST',
      credentials:"include"
    }).then((res) => res.json())
      .then((json) => {
        if(json.message){
          setEmpty(true);
          setLoadingScore(false);
        }
        else{
          setEmpty(false);
        setSubmissions(json);
        setLoadingScore(false)
        }
      })
  }, [])



  return (
    <div>
      <TopNav />
    <div className={styles["table"]}>
      

      <h3>Your Submissions</h3>

      <div>{ empty &&<AlertDialoge data={emptyString}/>}</div>

<div>{(!loadingScore)&&(!empty)&&<BaseTable data={submissions} />}</div>
    </div>
    </div>
  );
};

export default UserSubmissions;
