import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserSubmissions from "./pages/user-submissions";
import Scoreboard from "./pages/scoreboard";
import Contest from "./pages/contest";
import CreateContest from "./pages/create-contest";
import Submission from "./pages/submission";
import Profile from "./pages/profile";
import CreateProblem from "./pages/create-problem";
import Problem from "./pages/problem";
import Submit from "./pages/submit";
import SignUp from "./pages/sign-up";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Home></Home>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/create-problem" element={<CreateProblem />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/create-contest" element={<CreateContest />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/user-submissions" element={<UserSubmissions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
