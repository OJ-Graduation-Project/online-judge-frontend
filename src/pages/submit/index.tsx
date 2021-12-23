import React,{useState} from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// import Editor from "react-simple-code-editor";
import CodeEditor from '@uiw/react-textarea-code-editor';
import Container from '@mui/material/Container';

import { useSearchParams } from "react-router-dom";
import styles from "./styles.module.css";
import TopNav from "../../components/topNav";

const Submit: React.FC = () =>{
    const [problem, setProblem] = useState({
        name:  "84. Largest Rectangle in Histogram",
        id: 84
    });
    const [language, setLanguage] = useState('java');
    const allLanguages = ['java', 'c', 'cpp', 'python'];
    const [code, setCode] = React.useState(
        `function add(a, b) {\n  return a + b;\n}`
      );
      
    return (
        <div>
            <TopNav/>
            <Container>
                <div>
                    <h2>{problem.name}</h2>
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
                <button>Submit</button>
            </Container>
        
        </div>
    );
}

export default Submit;
