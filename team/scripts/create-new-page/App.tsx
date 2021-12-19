import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Scoreboard from './pages/scoreboard'
import Contest from './pages/contest'
import Create-contest from './pages/create-contest'
import Submission from './pages/submission'
import Profile from './pages/profile'
import CreateProblem from './pages/create-problem'
import Problem from './pages/problem'
import Submit from './pages/submit'
import Signup from './pages/signup'
import Login from './pages/login'
import Home from './pages/home'




function App() {
  return (
    <div>
      <Router>
        <Routes>

  
             <Route path="/home" element={<Home/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/signup" element={<Signup/>}/>
             <Route path="/submit" element={<Submit/>}/>
             <Route path="/problem" element={<Problem/>}/>
             <Route path="/create-problem" element={<CreateProblem/>}/>
             <Route path="/profile" element={<Profile/>}/>
             <Route path="/submission" element={<Submission/>}/>
             <Route path="/create-contest" element={<Create-contest/>}/>
             <Route path="/contest" element={<Contest/>}/>
             <Route path="/scoreboard" element={<Scoreboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
