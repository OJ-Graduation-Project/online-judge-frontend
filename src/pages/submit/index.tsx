import React,{Dispatch, SetStateAction, useEffect, useState} from "react";
import 'react-dropdown/style.css';

// import Editor from "react-simple-code-editor";
import CodeEditor from '@uiw/react-textarea-code-editor';
import Dropdown from 'react-dropdown';

import Container from '@mui/material/Container';

import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import styles from "./styles.module.css";
import TopNav from "../../components/topNav";
import Problem from "../problem";

const Submit: React.FC= () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const problemId = urlParams.get("id");
    let p :Problem = {problemId: 0, problemName:"", numberOfSubmissions:0, writerId:0, description:"", timeLimit:"", memoryLimit:"", Difficulty:"", testcases:[],problemSubmissionsId:[]}
    const [problem, setProblem] = useState(p);
    const navigate = useNavigate()
    useEffect(()=>{
        fetch('http://localhost:8000/submit/problemid={id}',{
            method : 'GET',
            // body:JSON.stringify({id: problemId})
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            setProblem(json);
        })
    })
    const [language, setLanguage] = useState('cpp');
    const allLanguages = ['java', 'c', 'cpp', 'python'];
    const [code, setCode] = React.useState(
        `#include <iostream>
        using namespace std;
        
        int main()
        {
             int x,y;
             cin>>x>>y;
             
             cout << x+y << endl;
             return 0;
        }
        `
      );


      const handleClick=()=>{
        const problemid=problem.problemId;
        const user ={language,code,problemid};
        fetch('http://localhost:8000/submit',{
            method : 'POST',
            // headers:{'content-type':'application/json'},
            credentials: 'include',
            body:JSON.stringify(user)
        }).then(()=>{
            console.log("done");
        })
    }

      
    return (
        <div>
            {/* <TopNav/> */}
            {/* <Container> */}
                <div>
                    <h2>{problem.problemName}</h2>
                    <div style = {{width: "50%"}}>
                        <Dropdown options={allLanguages} onChange={(language) => {setLanguage(language.value)}} value={language} placeholder="Select an option" />
                    </div>
                </div>
                <hr />
                <CodeEditor
                value={code}
                language={language}
                placeholder="Please enter or paste your code."
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                style={{
                    fontSize: 12,
                    backgroundColor: "#f5f5f5",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
                />
                <button onClick={handleClick}>Submit</button>
            {/* </Container> */}
        
        </div>
    );
}

export default Submit;
