import { Link } from "react-router-dom";
export default function Page() {
  return (
    <div className="relative w-200 h-200 bg-amber-200 rounded-4xl flex justify-center items-center box-border">
      <Link to="/main-clock">
        <button className="clock animate-bounce block w-30 h-10 p-2 bg-blue-400 rounded-2xl hover:cursor-pointer text-white font-semibold">
          Main Clock
        </button>
      </Link>
      <Link to="/calculate">
        <button className="absolute top-20 left-40 animate-bounce block w-30 h-10 p-2 bg-blue-400 rounded-2xl hover:cursor-pointer text-white font-semibold">
          Calculate
        </button>
      </Link>
      <Link to="/todolist">
        <button className="absolute top-80 left-100 animate-bounce block w-30 h-10 p-2 bg-blue-400 rounded-2xl hover:cursor-pointer text-white font-semibold">
          Todo List
        </button>
      </Link>
      <Link to="/quizz">
        <button className="absolute top-20 left-80 animate-bounce block w-30 h-10 p-2 bg-blue-400 rounded-2xl hover:cursor-pointer text-white font-semibold">
          Quizz App
        </button>
      </Link>
    </div>
  );
}
