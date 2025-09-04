import "./quizzApp.css";
import BackHome from "../../BackHome.jsx";
import Header from "./Header.jsx";
import Quiz from "./Quiz.jsx";
export default function QuizzAppVer2() {
  return (
    <div className="body">
      <BackHome />
      <Header />
      <main>
        <Quiz />
      </main>
    </div>
  );
}
