import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import React, { useEffect, useState } from "react";
import styles from "../../topics/styles.module.css";
import {TOPICS_URL} from "../../../data/EndPoints";
interface Problem {
  id: number;
  problemName: string;
  numberOfSubmissions: number;
  difficulty: string;
  topic: string[];
}
const columns: GridColDef[] = [
  { field: "id", headerName: "id", width: 50 },
  {
    field: "problemName",
    headerName: "Name",
    renderCell: (cellValues) => {
      return (
        <Link
          component="button"
          onClick={(event) =>
            (window.location.href = "/problem/?name=" + cellValues.row.name)
          }
        >
          {cellValues.row.name}
        </Link>
      );
    },
    width: 300,
  },
  { field: "difficulty", headerName: "Difficulty", width: 200 },
  {
    field: "numberOfSubmissions",
    // headerName: "Number of Submissions",
    width: 300,
  },
  {
    field: "topic",
    headerName: "Topic",
    width: 400,
  },
];

export default function DataTable() {
  const urlParams = new URLSearchParams(window.location.search);
  const topicName = urlParams.get("name");
  let problem = {
    id: 0,
    problemName: "test",
    numberOfSubmissions: 0,
    difficulty: "",
    topic: [""],
  } as Problem;
  let [items, setItems] = useState([problem]);
  let [DataisLoaded, setDataisLoaded] = useState(false);
  useEffect(() => {
    fetch(TOPICS_URL, {
      method: "POST",
      body: JSON.stringify({ topicName }),
    })
      .then((res) => res.json())
      .then((json) => {
        setItems(json);

        setDataisLoaded(true);
      });
  }, []);

  useEffect(() => {
    console.log(items);
  });
  const rows = [{}];

  if (!DataisLoaded)
    return (
      <div>
        <h4> Loading "{topicName}", please wait some time... </h4>
      </div>
    );
  else
    for (let i = 0; i < items.length; i++) {
      let topics: string[] = [""];
      for (let j = 0; j < items[i].topic.length; j++) {
        topics[j] = items[i].topic[j] + " ";
      }
      rows[i] = {
        id: i + 1,
        name: items[i].problemName,
        difficulty: items[i].difficulty,
        numberOfSubmissions: items[i].numberOfSubmissions,
        //topic: items[i].topic,
        topic: topics,
      };
    }
  return (
    <div>
      <div className={styles["header"]}>
        <h3>{topicName} Problems.</h3>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}
