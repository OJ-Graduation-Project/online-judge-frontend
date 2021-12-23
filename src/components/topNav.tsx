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
        <NavLink to="/contest">
          <li>Contest</li>
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
      </S.Ul>
    </>
  );
}

export default TopNav;
