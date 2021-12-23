import React, { useState } from "react";
import Problemline from "../../components/Problemline";
import Rankingline from "../../components/Rankingline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const renderHeader = () => {
  let headerElement = ["#", "Name", "constraint", "Solved"];

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
const renderRankHeader = () => {
  let headerElement = ["Rank", "Name", "Score"];
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

const Contest: React.FC = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <h1 style={{ margin: "40px 0px", lineHeight: "1.7" }}>Contest 1</h1>
        <h3 style={{ fontWeight: "300" }}>Welcome to the 1st Weekly Contest</h3>
        <br></br>
        <h4 style={{ fontWeight: "400" }}>Important Notes </h4>

        <ol>
          <li style={{ fontWeight: "300" }}>
            The penalty time of 5 minutes will be applied for each wrong
            submission.
          </li>
          <li style={{ fontWeight: "300" }}>
            To ensure the fairness of the contest, The judge will hide some test
            cases during the contest. When users submit incorrect submissions,
            The judge will not show the hidden test cases to the users.
          </li>
          <li style={{ fontWeight: "300" }}>
            The final rating of this contest will be updated within 5 working
            days after the contest.
          </li>
        </ol>
        <br></br>
        <br></br>
        <br></br>

        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={8}>
              <Item>
                <div
                  style={{ textAlign: "center", backgroundColor: "#E1E1E1" }}
                >
                  Problemset{" "}
                </div>
                <br></br>
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
                  <Problemline></Problemline>
                </table>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <div
                  style={{ textAlign: "center", backgroundColor: "#E1E1E1" }}
                >
                  Ranking{" "}
                </div>
                <br></br>
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
                  <tr>{renderRankHeader()}</tr>
                  <Rankingline></Rankingline>
                </table>
              </Item>
            </Grid>
          </Grid>
        </Box>

        <br></br>
        <br></br>
        <br></br>
        <b>Below actions are deemed contest violations</b>
        <br></br>
        <ul>
          <li>One user submitting with multiple accounts during a contest.</li>
          <li>
            Multiple accounts submitting similar code for the same problem.
          </li>
          <li>
            Creating unwanted disturbances which interrupt other users'
            participation in a contest.{" "}
          </li>
          <li>
            Disclosing contest solutions in public discuss posts before the end
            of a contest.{" "}
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Contest;
