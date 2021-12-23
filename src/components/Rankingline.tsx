import React, { Component } from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';



function createRow(
  id:number,
    Rank : number,
    Name : string,
    Score :number,
  ) {
    return { id,Rank, Name, Score};
  }
  
interface State {
    
}
interface Props {
    
}


const rows= [
    createRow(1,1,"Tourist",1000),
    createRow(2,2,"Jon Doe",900),
    createRow(3,3,"Jon",800),
    createRow(4,4,"Mark",10),
];



export class Rankingline extends Component<Props, State> {
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
                {row.Rank}
                </TableCell>
                <TableCell  style={{fontSize:'17px',border:'4px solid #E1E1E1',borderCollapse:'collapse'}} align="left">
                <a href=''>{row.Name}</a> 
                  </TableCell>
                <TableCell style={{fontSize:'12px',border:'4px solid #E1E1E1',borderCollapse:'collapse'}} align="center">
                  
                  {row.Score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )
    }
}


export default Rankingline;
