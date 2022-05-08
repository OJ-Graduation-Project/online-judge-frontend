import React, { useEffect, useState } from "react";
import Problemline from "../../components/Problemline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TopNav from "../../components/topNav";
import { useParams } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { CONTEST_URL } from "../../data/EndPoints";
import { Problem, scoreRequest, scoreResponse } from "../../data/interfaces";
import styles from "./styles.module.css";
import CountDownTimer from "./components/CountDownTimer";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const renderHeader = () => {
    let headerElement = ["#", "Name", "constraint", "Difficulty"];

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

const ContestFront: React.FC = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const startTime = urlParams.get("startTime");
    const splitted = startTime.split("T");
    const date = splitted[0].split("-");
    const time = splitted[1].split(":");


    var today = new Date();
    var contestDate = new Date();
    contestDate.setFullYear(parseInt(date[0]), parseInt(date[1])-1, parseInt(date[2]));
    contestDate.setHours(parseInt(time[0]), parseInt(time[1]), 0);

    var timeLeft = new Date(contestDate.getTime() - today.getTime());

    const { id } = useParams();
    let probs: Problem = {
        _id: 0,
        problemName: "",
        difficulty: "",
        description: "",
        memoryLimit: "",
        numberOfSubmissions: 0,
        problemSubmissionsId: [],
        testcases: [],
        timeLimit: "",
        writerId: 0,
    };
    const [problems, setProblems] = useState([probs]);
    const [loading, setLoading] = useState(true);
    const [loadingScore, setLoadingScore] = useState(true);

    let scorereq: scoreRequest = { page: 1, contestid: Number(id) };
    const [scoreRequest, setScoreRequest] = useState(scorereq);
    let scoreresp: scoreResponse = { firstName: "", userid: 0, score: 0 };
    const [scoreboardresp, setScoreboardresp] = useState([scoreresp]);
    useEffect(() => {
        fetch(CONTEST_URL + id, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((json) => {
                setLoading(false);
                setProblems(json);
            });
        fetch(CONTEST_URL + id + "/scoreboard", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(scoreRequest),
        })
            .then((scoreresp) => scoreresp.json())
            .then((jsonval) => {
                setScoreboardresp(jsonval);
                setLoadingScore(false);
            });
    }, []);

    const columns: GridColDef[] = [
        { field: "id", headerName: "Rank", width: 300 },
        { field: "name", headerName: "Name", width: 300 },
        { field: "score", headerName: "score", width: 300 },
    ];

    const resprows = [{}];

    let loaddata = () => {
        if (loadingScore) return false;

        for (let i = 0; i < scoreboardresp.length; i++) {
            console.log(scoreboardresp[i]);

            resprows[i] = {
                name: scoreboardresp[i].firstName,
                id: i + 1,
                score: scoreboardresp[i].score,
            };
        }
        console.log(resprows);
        return true;
    };

    return (contestDate.getTime() - today.getTime() > 0) ? (
        <div className={styles["contest"]}>
            <h1>timer here</h1>
            <CountDownTimer millis={timeLeft.getTime()} />
        </div>
    ) : (
        <div>
            <TopNav />
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
                        <Grid item xs={12}>
                            <Item>
                                <div
                                    style={{ textAlign: "center", backgroundColor: "#E1E1E1" }}
                                >
                                    Problemset{" "}
                                </div>
                                <br></br>
                                <div>
                                    {loading ? (
                                        <div></div>
                                    ) : (
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

                                            <Problemline data={problems}></Problemline>
                                        </table>
                                    )}
                                </div>
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
                {loaddata() ? (
                    <div>
                        <h2>Scoreboard</h2>
                        <div style={{ height: 500, width: "100%" }}>
                            <DataGrid
                                rows={resprows}
                                columns={columns}
                                pageSize={20}
                                rowsPerPageOptions={[20]}
                            />
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </Container>
        </div>
    );
    // }
};

export default ContestFront;
