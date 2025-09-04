import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainClock from "./component/Clock/MainClock.jsx";
import Page from "./Page.jsx";
import TodoList from "./component/TodoList/TodoList.jsx";
import QuizzApp from "./component/quizz/QuizzApp.jsx";
import Profile from "./component/Profile/Profile.jsx";
import "./App.css";
import Tea from "./component/Tea/Tea.jsx";
import Learning from "./component/Learning.jsx";
import QuizzAppVer2 from "./component/TodoList/TodoVer2/QuizzAppVer2.jsx";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/main-clock" element={<MainClock />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/quizz" element={<QuizzApp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tea" element={<Tea />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/quizApp_ver2" element={<QuizzAppVer2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
