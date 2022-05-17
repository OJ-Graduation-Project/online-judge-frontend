import React, { Component,useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Container, TablePagination } from "@mui/material";
import TopNav from "../../components/topNav";
import {CREATE_CONTEST_URL, HOME_URL} from "../../data/EndPoints";
import BasicTableComponent from "./table";
import { Problem} from "../../data/interfaces";
import { GridRowId } from "@mui/x-data-grid";
import ScoreWindow from "./scoreWindow";
import {useNavigate} from 'react-router-dom'
const DEFAULT_SCORE=50;

interface Props {}

interface State {
  id: number[];
  elements: number;
  page: number;
  contestName: string;
  contestStartDate: string;
  contestEndDate: string;
  contestProblems: string[];
  problems: Problem[];
  problemsScore:number[];

}
export class CreateContest extends Component<Props, State> {
  OnClickState(selectedIDs: Set<GridRowId>, rows_size: number) {

    let newArr=[""];
    selectedIDs.forEach((key,value)=>
    newArr.push(value.toString())
    )
    newArr.shift()

    this.setState(
      {
        contestProblems: newArr,
        elements: rows_size,
      },
      () => {
        console.log(this.state.contestProblems);
      }
    );
  }

  handleProblemScore(problemScores:Array<number>){
    this.setState(
      {
        problemsScore: problemScores
      }
    )
  }

  handleChangePage = (event: unknown, newPage: number) => {
    this.setState({ page: newPage });
  };

  handleContestName = (event: unknown, name: string) => {
    console.log(name)
    this.setState({ contestName: name });
  };

  handleContestStartDate = (event: unknown, date: string) => {
    this.setState({ contestStartDate: date });
  };

  handleContestEndDate = (event: unknown, date: string) => {

    this.setState({ contestEndDate: date });
  };

  handleContestProblems = (event: unknown, name: string[]) => {
    this.setState({ contestProblems: name });
  };

  handleProblems = (event: unknown, name: Problem[]) => {
      this.setState({ problems: name });
  };

  handleCheckEnteredScore=()=>{
    let problemScores=new Array(this.state.contestProblems.length)
    if(this.state.problemsScore.length===0){
      problemScores.fill(DEFAULT_SCORE)
    }
    return problemScores;
  }


  handleCreateButton=()=>{
    const defaultScores= this.handleCheckEnteredScore()
    const contestDetails = {contestName: this.state.contestName, contestStartDate: this.state.contestStartDate, contestEndDate: this.state.contestEndDate, contestProblemSet: this.state.contestProblems, problemsScore:this.state.problemsScore};

    if(contestDetails.problemsScore.length===0){
      contestDetails.problemsScore=defaultScores
    }

    console.log(contestDetails)
    console.log(JSON.stringify(contestDetails))
    fetch(CREATE_CONTEST_URL,{
        method : 'POST',
        credentials: 'include',
        body:JSON.stringify(contestDetails)
    }).then(()=>{
        window.location.href = "/all-contests"
    })
  }
  componentDidMount() {
    this.fetchProblems();
 }

  constructor(props: Props) {
    super(props);
    let problem :Problem = {_id: 0, problemName:"", numberOfSubmissions:0, writerId:0, description:"", timeLimit:"", memoryLimit:"", difficulty:"", testcases:[],problemSubmissionsId:[]};
    this.state = {
      id: [],
      elements: 0,
      page: 0,
      contestName: "",
      contestStartDate: "",
      contestEndDate: "",
      contestProblems: [],
      problems:[problem],
      problemsScore:[]
    };

  }
  fetchProblems = () => {

    fetch(HOME_URL,{
              method : 'POST',
              body:JSON.stringify({searchValue: ''})
          })
          .then((res) => res.json())
          .then((json) => {
            if(json){
               this.handleProblems(null, json);
            }
          })
  }

  render() {

    return (
      <div>
        <TopNav />

        <Container maxWidth="lg">
          <h2 style={{ margin: "25px 0px", lineHeight: "1.2" }}>
            Contest Creation
          </h2>
            <div>
              <div>
                <label style={{ textAlign: "center" }}>Contest Name:</label>
              </div>
              <br></br>
              <div>
                <input
                  name="ContestName"
                  id="ContestName"
                  type="text"
                  placeholder="Contest Name"
                  onChange={ e => this.handleContestName(e, e.target.value) }
                  required
                />
              </div>
              <br></br>
              <label>Contest start time:</label>
              <br></br> <br></br>
              <input
                type="datetime-local"
                id="ContestStartDate"
                name="ContestStartDate"
                onChange={ e => this.handleContestStartDate(e, e.target.value) }
                required
              />
              <br></br> <br></br>
              <label>Contest End time:</label>
              <br></br> <br></br>
              <input
                type="datetime-local"
                id="ContestEndDate"
                name="ContestEndDate"
                onChange={ e => this.handleContestEndDate(e, e.target.value) }
                required
              />
              <br></br> <br></br>
              <div style={{ textAlign: "center", backgroundColor: "#E1E1E1" }}>
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

            <BasicTableComponent
                  onClick={this.OnClickState.bind(this)}
                  data={this.state.problems}

/>
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
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >

    
                <Button
                  style={{ alignItems: "center", justifyContent: "center" }}
                  variant="contained"
                  size="large"
                  type="submit"
                  onClick={this.handleCreateButton}
                >
                  Create 
                </Button>
                <ScoreWindow data={this.state.contestProblems} onClick={this.handleProblemScore.bind(this)}/>
              </div>
            </div>
          {/* </form> */}
        </Container>
      </div>
    );
  }
}

export default CreateContest;