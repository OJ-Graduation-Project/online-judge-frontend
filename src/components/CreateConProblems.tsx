import React, { Component, useState } from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';



function createRow(
    id: number,
    problemname: string,
    problem_Difficulty: string,
) {
    return { id, problemname, problem_Difficulty };
}



const rows = [
    createRow(1, "Equal or Not Equal", "Hard"),
    createRow(2, "Triangles on a Rectangle", "Easy"),
    createRow(3, "BA-String", "Easy"),
    createRow(4, "Exact Change", "Meduim"),
    createRow(5, "Exact Change2", "Hard"),
    createRow(6, "Exact Change3", "Meduim"),
    createRow(7, "Exact Change3", "Meduim"),
    createRow(8, "Exact Change3", "Meduim"),
    createRow(9, "Exact Change3", "Meduim"),
    createRow(10, "Exact Change3", "Meduim"),



];


interface Props {
    page:number;
    onClick:(id: number,size:number)=>void;
}

interface State {

}


export class CreateConProblems extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }


    render() {
        return (
            <TableBody >
                {rows.slice(this.props.page*5,this.props.page*5+5).map((row) => (
                    
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell style={{fontSize:'15px',border:'4px solid #E1E1E1',borderCollapse:'collapse',width:'10%'}} > <input onChange={() => this.props.onClick(row.id,rows.length)} type="checkbox" name="CheckProblem" />&nbsp; </TableCell>

                        <TableCell style={{fontSize:'17px',border:'4px solid #E1E1E1',borderCollapse:'collapse'}} align="left">
                            <a href=''>{row.problemname}</a> </TableCell>
                        <TableCell style={{fontSize:'15px',border:'4px solid #E1E1E1',borderCollapse:'collapse',width:'10%'}} align="center">{row.problem_Difficulty}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        )
    }
}


export default CreateConProblems;
