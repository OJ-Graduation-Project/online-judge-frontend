import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import styles from "../../home/styles.module.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface HeaderProps {
  list: string[];
  placeHolder: string;
}

const DropDown: React.FC<HeaderProps> = (props: HeaderProps) => {
  const [field, setfield] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setfield(event.target.value as string);
  };

  return (
    <div className={styles["dropdown"]}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          {props.placeHolder}
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={field}
          label="field"
          autoWidth
          onChange={handleChange}
        >
          <MenuItem value={props.list[0]} className={styles["black"]}>
            {props.list[0]}
          </MenuItem>
          <MenuItem value={props.list[1]} className={styles["green"]}>
            {props.list[1]}
          </MenuItem>
          <MenuItem value={props.list[2]} className={styles["orange"]}>
            {props.list[2]}
          </MenuItem>
          <MenuItem value={props.list[3]} className={styles["red"]}>
            {props.list[3]}
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default DropDown;
