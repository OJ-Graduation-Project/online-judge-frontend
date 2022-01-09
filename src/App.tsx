import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserSubmissions from "./pages/user-submissions";
import Scoreboard from "./pages/scoreboard";
import ContestFront from "./pages/contest";
import CreateContest from "./pages/create-contest";
import Submission from "./pages/submission";
import Profile from "./pages/profile";
import CreateProblem from "./pages/create-problem";
import Problem from "./pages/problem";
import Submit from "./pages/submit";
import SignUp from "./pages/sign-up";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Home from "./pages/home";
import Topics from "./pages/topics";
import AllContests from "./pages/all-contests";
import Registration from "./pages/registration";
import UserProblems from "./pages/user-problems";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/submit/problemid={id}" element={<Submit />} />
        <Route path="/submit" element={<Submit />} />

        <Route path="/problem" element={<Problem isContest={false}/>} />
        <Route path="/all-contests/contest/:contestid/problem/:problemid" element={<Problem isContest={true}/>} />

        <Route path="/create-problem" element={<CreateProblem />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-contest" element={<CreateContest />} />
        <Route path="/all-contests/contest/:id" element={<ContestFront />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/user-submissions/:id" element={<UserSubmissions />} />
        <Route path="/user-problems/:id" element={<UserProblems />} />
        <Route path="/all-contests" element={<AllContests />} />
        <Route path="/all-contests/Registration" element={<Registration />} />
        <Route path="/topic" element={<Topics />} />
      </Routes>
    </Router>
  );
}

export default App;