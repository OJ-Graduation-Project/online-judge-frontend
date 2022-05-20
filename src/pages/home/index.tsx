import React, {useState, useEffect} from "react";
import TopNav from "../../components/topNav";
import Collapse from "./components/collapse";
import SearchBar from "./components/searchBar";
import styles from "./styles.module.css";
import BasicTableComponent from "./components/table";
import {HOME_URL} from "../../data/EndPoints"
import {Problem} from "../../data/interfaces";

const Home: React.FC = () => {
  let problem :Problem = {_id: 0, problemName:"", writerId:0, description:"", timeLimit:"", memoryLimit:"", difficulty:"", testcases:[],topic:""}
  const [problems, setProblems] = useState([problem]);
  
  const urlParams = new URLSearchParams(window.location.search);
  const searchValue = urlParams.get("search");
  useEffect(() => {
    fetch(HOME_URL,{
        method : 'POST',
        body:JSON.stringify({searchValue: searchValue})
    })
    .then((res) => res.json())
    .then((json) => {
      if(json){
        setProblems(json);
      }
    })
},[searchValue])

  return (
    <div className={styles["title"]}>
      <TopNav />
      <Collapse />
      <div className={styles["filters"]}>
        <div className={styles["search"]}>
          <SearchBar />
        </div>
      </div>
      <div className={styles["table"]}>
        <BasicTableComponent data = {problems}/>
      </div>
    </div>
  );
};

export default Home;
