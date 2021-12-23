import CreateConProblems from "../../components/CreateConProblems";
import styles from "./styles.module.css";
import React, { Component, useState } from 'react'
import Button from '@mui/material/Button';
import { Container, TablePagination } from "@mui/material";

type Contest = {
    id:number
    ContestName: string
    ContestStartDate: Date
    ContestEndDate: Date
    contest_problemset:string[]
  }

const onChange=()=>{
    console.log("changed")
}

const renderHeader = () => {
    let headerElement = ["", "Name", "Difficulty"];
  
    return headerElement.map((key, index) => {
      return (
        <th
          style={{
            textAlign: "center",
            border: "4px solid #E1E1E1",
            borderCollapse: "collapse",
          }}
          key={index}
        >
          {key.toUpperCase()}
        </th>
      );
    });
  };

interface Props {

}

interface State {
    id: number[];
    elements:number;
    page:number;
}




export class CreateContest extends Component<Props, State> {

    
OnClickState(idP:number,rows_size:number){
    let newArr = [...this.state.id];

    const index = newArr.indexOf(idP, 0);
    if (index > -1) {
        newArr.splice(index, 1);
    }else{
        newArr.push(idP);
    }
    this.setState({
        id:newArr,
        elements:rows_size
    },()=>{console.log(this.state.id)}) 

}

 handleChangePage = (event: unknown, newPage: number) => {
    this.setState({page:newPage})
  };

    constructor(props: Props) {
        super(props);
        this.state = {
            id: [],
            elements:0,
            page:0,
        }
    }

 
    

    render() {
    return (
        <Container maxWidth="lg">
        <h1 style={{ margin: "40px 0px", lineHeight: "1.7" }}>Contest Creation</h1>

        <form onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
              email: { value: string };
              password: { value: string };
            };
            const email = target.email.value;
            const password = target.password.value; 
            //check data here
            
          }}>
        <div>
            <div><label style={{textAlign:"center"}}>Contest Name:</label></div>
            <br></br>
            <div>
            <input
                name='ContestName'
                id='ContestName'
                type='text'
                placeholder='Contest Name'
                onChange={onChange}
                required
                />
            </div>
            <br></br>
            <label >Contest start time:</label>
            <br></br>            <br></br>

             <input type="datetime-local" id="ContestStartDate" name="ContestStartDate" required/>
             <br></br>            <br></br>
             <label >Contest End time:</label>
             <br></br>            <br></br>
             <input type="datetime-local" id="ContestEndDate" name="ContestEndDate" required/>
             <br></br>            <br></br>
             <div
                  style={{ textAlign: "center", backgroundColor: "#E1E1E1" }}
                >
                  Problemset{" "}
                </div>
                <table
                  style={{
                    width: "100%",
                    position: "relative",
                    boxSizing: "border-box",
                    borderColor: "grey",
                    border: "4px solid #E1E1E1",
                    borderCollapse: "collapse",
                  }}
                > 

            <tr>{renderHeader()}</tr>
            <CreateConProblems onClick={this.OnClickState.bind(this)} page={this.state.page} ></CreateConProblems>
            </table>
            <TablePagination
                rowsPerPageOptions={[5]}
                component="div"
                count={this.state.elements}
                rowsPerPage={5}
                page={this.state.page}
                onPageChange={this.handleChangePage}
        />


            <br></br>
            <div style={{alignItems: 'center',justifyContent:'center',display: 'flex'}} >
            <Button  style={{alignItems: 'center',justifyContent:'center'}} variant="contained" size="large" type='submit' onClick={()=>console.log(this.state.id)}>
            Create Contest
        </Button>
        </div>

           
        </div>
        </form>
        </Container>
    )
        }
}

export default CreateContest;
