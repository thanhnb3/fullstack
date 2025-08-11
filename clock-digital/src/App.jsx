import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainClock from "./component/Clock/MainClock.jsx";
import Page from "./Page.jsx";
import Calculate from "./component/Calculate/Calculate.jsx";
import TodoList from "./component/TodoList/TodoList.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-100 flex items-center justify-center ">
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/main-clock" element={<MainClock />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
