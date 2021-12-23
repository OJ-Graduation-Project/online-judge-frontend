import React, { Component } from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';



function createRow(
    id : number,
    problemname : string,
    problem_data :string,
    numofsolved : number,
  ) {
    return { id, problemname, problem_data, numofsolved };
  }
  
interface State {
    
}
interface Props {
    
}


const rows= [
    createRow(1,"Equal or Not Equal","standard input/output",100),
    createRow(2,"Triangles on a Rectangle","standard input/output",50),
    createRow(3,"BA-String","standard input/output",25),
    createRow(4,"Exact Change","standard input/output",10),
];



export class Problemline extends Component<Props, State> {
    state = {}

    render() {
        return (
            <TableBody >
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell  style={{fontSize:'15px',border:'4px solid #E1E1E1',borderCollapse:'collapse'}} align="center" component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell  style={{fontSize:'17px',border:'4px solid #E1E1E1',borderCollapse:'collapse'}} align="left">
                    <a href=''>{row.problemname}</a> </TableCell>
                <TableCell style={{fontSize:'10px',border:'4px solid #E1E1E1',borderCollapse:'collapse'}} align="center">{row.problem_data}</TableCell>
                <TableCell style={{fontSize:'15px',border:'4px solid #E1E1E1',borderCollapse:'collapse'}}  align="center">{row.numofsolved}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )
    }
}


export default Problemline;
