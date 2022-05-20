import styles from "./styles.module.css";
import BaseTable from "./components/table";
import TopNav from "../../components/topNav";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import React, { useEffect, useState } from "react";
import {TOPICS_URL} from "../../data/EndPoints";
import AlertDialoge from "../../components/alertDialoge"
import {Problem} from "../../data/interfaces";

const Topics: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const topicName = urlParams.get("name");
  const emptyString=`No Problems in topic ${topicName} exist yet!`
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
    problemSubmissionsId: [],
    topic:[]
  }
  let [items, setItems] = useState([problem]);
  let [DataisLoaded, setDataisLoaded] = useState(true);
  const [empty, setEmpty] = useState(false)

  useEffect(() => {
    fetch(TOPICS_URL, {
      method: "POST",
      body: JSON.stringify({ topicName }),
    })
      .then((res) => res.json())
      .then((json) => {
        if(json.message){
          setEmpty(true);
          setDataisLoaded(false);
        }else{
          setEmpty(false);
        setItems(json);
        //console.log(json)
        setDataisLoaded(false);
        }
      });
  }, []);
  return (

    <div>
    <TopNav />
    <div className={styles["table"]}>
      

    <div className={styles["header"]}>
        <h3>{topicName} Problems.</h3>
      </div>
                <div>{ empty &&<AlertDialoge data={emptyString}/>}</div>

<div>{(!DataisLoaded)&&(!empty)&&<BaseTable data={items} />}</div>
    </div>
    </div>
  );
};

export default Topics;
