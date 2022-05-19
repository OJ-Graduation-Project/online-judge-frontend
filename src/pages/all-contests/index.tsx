import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import BaseTable from "./components/table";
import TopNav from "../../components/topNav";
import {Contest} from "../../data/interfaces";
import {ALL_CONTESTS_URL} from "../../data/EndPoints"; 
import AlertDialoge from "../../components/alertDialoge"
const AllContests: React.FC = () => {
  let thisLastId=0;
  const [curruserid, setUserId] = useState(0)  
  let contest :Contest = {_id: 0, contestName:"",contestProblemsId:[],duration:"",RegisteredUserids:[],problemsScore:[],contestStartDate:"",wrongSubmissionCost:0}
  const [contests, setContests] = useState([contest]);
  const [loading, setLoading] = useState(true)
  const [empty, setEmpty] = useState(false)
  const emptyString="No contests exist in the system yet! But you can create your own contest now from Create Contest tab and choose the problems you want to include in it."

  useEffect(() => {
  fetch(ALL_CONTESTS_URL,{
            method : 'GET',
            credentials:'include',
        }).then((res) => res.json())
        .then((json) => {
          if(json.message) {
            setEmpty(true);
            setLoading(false);
            
        }else{
          console.log(json)

            setEmpty(false);
            setLoading(false);
            setContests(json.contestsArr);
            setUserId(json.userId)
            console.log(curruserid)
            

        }
        })
  
}, [])

  return (
    <div>
       <TopNav/>
    <div className={styles["table"]}>
     
      <h3>Contests</h3>
        <div>{ empty &&<AlertDialoge data={emptyString}/>}</div>

<div>{(!loading)&&(!empty)&&<BaseTable data={contests} curruserid={curruserid} />}</div>
      
    </div>
    </div>
  );
};

export default AllContests;
