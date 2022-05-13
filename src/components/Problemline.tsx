import React, { Component } from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {Problem} from "../data/interfaces";



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
                  {row._id}
                </TableCell>
                <TableCell  style={{fontSize:'17px',border:'4px solid #E1E1E1',borderCollapse:'collapse'}} align="left">
                    <a href ={window.location.href+'/problem/'+row.problemName}>{row.problemName}</a> </TableCell>
                <TableCell style={{fontSize:'10px',border:'4px solid #E1E1E1',borderCollapse:'collapse'}} align="center">standard input/output</TableCell>
                <TableCell style={{fontSize:'15px',border:'4px solid #E1E1E1',borderCollapse:'collapse'}}  align="center">{row.difficulty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )
    
}


