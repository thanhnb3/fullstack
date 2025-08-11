import { Link } from "react-router-dom";

export default function BackHome() {
  return (
    <Link to="/">
      <button className="fixed z-10 top-4 left-4 p-2 w-15 h-15 bg-[#f5ae07] text-white rounded-full focus:outline-none shadow-md hover:cursor-pointer">
        Back
      </button>
    </Link>
  );
}
