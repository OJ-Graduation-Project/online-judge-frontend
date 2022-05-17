import * as S from "./styles";
import { Link,BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Cookie from "universal-cookie"

const cookie = new Cookie();

function TopNav() {
  return (
    <>
      <S.Ul>
        <h3>  <Link style={{ textDecoration: 'none', color: 'crimson' }} to="/">
          Online Judge
        </Link></h3>
        <NavLink to="/">
          <li>Problems</li>
        </NavLink>
        <NavLink to="/all-contests">
          <li>Contests</li>
        </NavLink>
        {cookie.get("cookie")&&<NavLink to="/create-contest">
          <li>Create Contest</li>
        </NavLink>}
        <NavLink to="/profile">
          <li>My Profile</li>
        </NavLink>
        {/* <NavLink to="/submit">
          <li>Submit</li>
        </NavLink> */}
        {/* <NavLink to="/submission">
          <li>Submission</li>
        </NavLink> */}
       {cookie.get("cookie")&& <NavLink to="/create-problem">
          <li>Create a problem</li>
        </NavLink>}
        {cookie.get("cookie")&&<NavLink to="/logout">
          <li>Logout</li>
        </NavLink>}
        {!cookie.get("cookie")&&<NavLink to="/login">
          <li>Login</li>
        </NavLink>}
        {/* <NavLink to="/scoreboard">
          <li>View Scoreboard</li>
        </NavLink> */}
        {/* <NavLink to="/contest">
          <li>Contest 1</li>
        </NavLink> */}

      </S.Ul>
    </>
  );
}

export default TopNav;
