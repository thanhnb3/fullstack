import { Link } from "react-router-dom";
export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-wrap justify-center items-center gap-1 relative w-200 h-200 px-2 bg-amber-200 rounded-4xl box-border">
        <Link to="/main-clock">
          <button className="clock animate-bounce block w-30 h-10 p-2 bg-blue-400 rounded-2xl hover:cursor-pointer text-white font-semibold">
            Main Clock
          </button>
        </Link>
        <Link to="/calculate">
          <button className="animate-bounce block w-30 h-10 p-2 bg-blue-400 rounded-2xl hover:cursor-pointer text-white font-semibold">
            Calculate
          </button>
        </Link>
        <Link to="/todolist">
          <button className="animate-bounce block w-30 h-10 p-2 bg-blue-400 rounded-2xl hover:cursor-pointer text-white font-semibold">
            Todo List
          </button>
        </Link>
        <Link to="/quizz">
          <button className="animate-bounce block w-30 h-10 p-2 bg-blue-400 rounded-2xl hover:cursor-pointer text-white font-semibold">
            Quizz App
          </button>
        </Link>
        <Link to="/profile">
          <button className="animate-bounce block w-30 h-10 p-2 bg-blue-400 rounded-2xl hover:cursor-pointer text-white font-semibold">
            Profile
          </button>
        </Link>
        <Link to="/tea">
          <button className="animate-bounce block w-30 h-10 p-2 bg-blue-400 rounded-2xl hover:cursor-pointer text-white font-semibold">
            Tea
          </button>
        </Link>
      </div>
    </div>
  );
}
