import React, { Component } from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

interface Testcase {
	id: number,
	input: string,
	output: string
}

interface Problem {
    problemId: number,
	problemName: string,
	numberOfSubmissions: number,
	writerId: number,
	description: string,
	timeLimit: string,
	memoryLimit: string,
	Difficulty: string,
	testcases: Testcase[],
	problemSubmissionsId: []
}

/*
function createRow(
    id : number,
    problemname : string,
    problem_data :string,
    numofsolved : number,
  ) {
    return { id, problemname, problem_data, numofsolved };
  }
  
const rows= [
    createRow(1,"Equal or Not Equal","standard input/output",100),
    createRow(2,"Triangles on a Rectangle","standard input/output",50),
    createRow(3,"BA-String","standard input/output",25),
    createRow(4,"Exact Change","standard input/output",10),
];
*/


export default function Problemline(props:{
  data: Problem[],
}) { 
  console.log(props.data)
 // export default function Problemline(){
        return (
            <TableBody >
            {props.data.map((row,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell  style={{fontSize:'15px',border:'4px solid #E1E1E1',borderCollapse:'collapse'}} align="center" component="th" scope="row">
                  {row.problemId}
                </TableCell>
                <TableCell  style={{fontSize:'17px',border:'4px solid #E1E1E1',borderCollapse:'collapse'}} align="left">
                    <a href=''>{row.problemName}</a> </TableCell>
                <TableCell style={{fontSize:'10px',border:'4px solid #E1E1E1',borderCollapse:'collapse'}} align="center">standard input/output</TableCell>
                <TableCell style={{fontSize:'15px',border:'4px solid #E1E1E1',borderCollapse:'collapse'}}  align="center">{row.Difficulty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )
    
}


