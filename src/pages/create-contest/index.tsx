import CreateConProblems from "../../components/CreateConProblems";
import React, { Component } from "react";
import Button from "@mui/material/Button";
import { Container, TablePagination } from "@mui/material";
import TopNav from "../../components/topNav";
import {CREATE_CONTEST_URL} from "../../data/EndPoints";

// type Contest = {
//   id: number;
//   ContestName: string;
//   ContestStartDate: Date;
//   ContestEndDate: Date;
//   contest_problemset: string[];
// };

// let contestID = "1";
// // let contestName = 'FirstContest';
// let contestStartDate = 'Today';
// let contestEndDate = 'Tomorrow';
// let contestProblemSet = [1,2,3];

// const [contestID, SetcontestID] = useState("")
// const [contestName, SetcontestName] = useState("")
// const [contestStartDate, SetcontestStartDate] = useState("")
// const [contestEndDate, SetcontestEndDate] = useState("")
// const [contestProblemSet, SetcontestProblemSet] = useState("")

const onChange = () => {
  console.log("changed");
};

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

interface Props {}

interface State {
  id: number[];
  elements: number;
  page: number;
  contestName: string;
  contestStartDate: string;
  contestEndDate: string;
  contestProblems: number[];

}

export class CreateContest extends Component<Props, State> {


  OnClickState(idP: number, rows_size: number) {
    let newArr = [...this.state.id];

    const index = newArr.indexOf(idP, 0);
    if (index > -1) {
      newArr.splice(index, 1);
    } else {
      newArr.push(idP);
    }
    this.setState(
      {
        id: newArr,
        elements: rows_size,
      },
      () => {
        console.log(this.state.id);
      }
    );
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

  handleContestProblems = (event: unknown, name: number[]) => {
    this.setState({ contestProblems: name });
  };


  // type Contest = {
  //   id: number;
  //   ContestName: string;
  //   ContestStartDate: Date;
  //   ContestEndDate: Date;
  //   contest_problemset: string[];
  // };



  handleCreateButton=()=>{
    // const [state, setState] = useState({ contestName});
    const contestDetails = {contestName: this.state.contestName, contestStartDate: this.state.contestStartDate, contestEndDate: this.state.contestEndDate, contestProblemSet: this.state.id};
    console.log(contestDetails)
    console.log(JSON.stringify(contestDetails))
    fetch(CREATE_CONTEST_URL,{
        method : 'POST',
        body:JSON.stringify(contestDetails)
    }).then(()=>{
        console.log("done");
    })
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      id: [],
      elements: 0,
      page: 0,
      contestName: "",
      contestStartDate: "",
      contestEndDate: "",
      contestProblems: [],
    };
  }

  render() {
    return (
      <div>
        <TopNav />

        <Container maxWidth="lg">
          <h2 style={{ margin: "25px 0px", lineHeight: "1.2" }}>
            Contest Creation
          </h2>

          {/* <form
            onSubmit={(e: React.SyntheticEvent) => {
              e.preventDefault();
              const target = e.target as typeof e.target & {
                email: { value: string };
                password: { value: string };
              };
              const email = target.email.value;
              const password = target.password.value;
              //check data here
            }}
          > */}
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
                <tr>{renderHeader()}</tr>
                <CreateConProblems
                  onClick={this.OnClickState.bind(this)}
                  page={this.state.page}
                ></CreateConProblems>
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
                  // onClick={() => console.log(this.state.id)}
                  onClick={this.handleCreateButton}
                >
                  Create Contest
                </Button>
              </div>
            </div>
          {/* </form> */}
        </Container>
      </div>
    );
  }
}

export default CreateContest;
