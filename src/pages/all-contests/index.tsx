import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import BaseTable from "./components/table";
import TopNav from "../../components/topNav";
import Contest from "../all-contests/components/interface"
const AllContests: React.FC = () => {

  let contest :Contest = {contestId: 0, contestName:"",contestProblemsId:[],duration:"",numberOfRegisteredUsers:0,problemsScore:[],startTime:"",wrongSubmissionCost:0}
  const [contests, setContests] = useState([contest]);
  const [loading, setLoading] = useState(true)
useEffect(() => {
  fetch('http://localhost:8000/all-contests',{
            method : 'GET',
        }).then((res) => res.json())
        .then((json) => {
            setLoading(false);
            setContests(json);
        })
  
}, [])

  return (
    <div>
       <TopNav/>
    <div className={styles["table"]}>
     
      <h3>Contests</h3>
    <div>{ loading && <h1>Loading data.</h1>}</div>
<div>{(!loading)&&<BaseTable data={contests} />}</div>
      
    </div>
    </div>
  );
};

export default AllContests;
