import React from "react";
import styles from "./styles.module.css";
import {TitleInfoProps} from "../../../data/interfaces"

const TitleInfo: React.FC<TitleInfoProps> = (props: TitleInfoProps) => {
  return (
  
    <div className={styles["title-info-container"]}>
      <label className={styles["text"]}>{props.title+":"}</label>
      <label className={styles["text"]}>{props.value}</label>
    </div>
  );
};

export default TitleInfo;
