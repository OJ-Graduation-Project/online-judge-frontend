import * as S from "./styles";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function TopNav() {
  return (
    <>
      <S.Ul>
        <h3>Online Judge</h3>
        <NavLink to="/home">
          <li>Problems</li>
        </NavLink>
        <NavLink to="/all-contests">
          <li>contests</li>
        </NavLink>
        <NavLink to="/create-contest">
          <li>Create Contest</li>
        </NavLink>
        <NavLink to="/profile">
          <li>My Profile</li>
        </NavLink>
        <NavLink to="/submit">
          <li>Submit</li>
        </NavLink>
        <NavLink to="/submission">
          <li>Submission</li>
        </NavLink>
        <NavLink to="/create-problem">
          <li>Create a problem</li>
        </NavLink>
        <NavLink to="/scoreboard">
          <li>View Scoreboard</li>
        </NavLink>
        <NavLink to="/contest">
          <li>Contest 1</li>
        </NavLink>

      </S.Ul>
    </>
  );
}

export default TopNav;
