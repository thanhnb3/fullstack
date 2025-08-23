import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainClock from "./component/Clock/MainClock.jsx";
import Page from "./Page.jsx";
import Calculate from "./component/Calculate/Calculate.jsx";
import TodoList from "./component/TodoList/TodoList.jsx";
import QuizzApp from "./component/quizz/QuizzApp.jsx";
import Profile from "./component/Profile/Profile.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      {/* className="min-h-screen flex items-center justify-center " */}
      <div>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/main-clock" element={<MainClock />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/quizz" element={<QuizzApp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
