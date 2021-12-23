import { CodeBlock,nord,sunburst, atomOneLight,dracula,xt256,solarizedLight,rainbow ,tomorrow,obsidian,github,arta,androidstudio,ocean,monoBlue,googlecode,tomorrowNightBlue,zenburn,vs2015,tomorrowNightBright} from "react-code-blocks";
import React from 'react';

interface submission {
    code: string;
    verdict: string;
    language: string;
}

function CodeSnippet(props:{
    code: string,
    language: string
}) {
  return (
    // <div style={{margin: "auto",width: "50%", height: "400px"}}>
    <div style = {{width: "100%"}}>
        <CodeBlock 
        text = {props.code}
        language={props.language}
        showLineNumbers="true"
        startingLineNumber={1}
        theme={dracula}
    />
    </div>
  );
}
export default CodeSnippet;