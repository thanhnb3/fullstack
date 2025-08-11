import { useEffect, useMemo, useRef, useState } from "react";
import icon from "./icon.png";
import unchecked from "./unchecked.png";
import checked from "./checked.png";
import BackHome from "../BackHome";

export default function App() {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem("todo-items");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("todo-items", JSON.stringify(items));
  }, [items]);

  const addTask = () => {
    const value = text.trim();
    if (!value) return;
    setItems((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: value, done: false },
    ]);
    setText("");
    inputRef.current?.focus();
  };

  const toggleTask = (id) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it))
    );
  };

  const removeTask = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const remaining = useMemo(() => items.filter((i) => !i.done).length, [items]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#153667] to-[#4e085f] p-3 md:p-6">
      <BackHome />
      <div className="mx-auto mt-16 w-full max-w-[540px] rounded-xl bg-white p-8 pb-16 shadow-lg">
        <h2 className="mb-5 flex items-center text-2xl font-bold text-[#002765]">
          To-do List
          <img src={icon} alt="" className="ml-2 h-7 w-7" />
        </h2>

        {/* Row input */}
        <div className="mb-6 flex items-center justify-between rounded-full bg-[#edeef0] pl-5">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add your task"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            className="flex-1 bg-transparent p-3 outline-none"
          />
          <button
            onClick={addTask}
            className="rounded-full bg-[#ff5945] px-8 py-4 text-white transition-opacity hover:opacity-90"
          >
            Add
          </button>
        </div>

        {/* List */}
        <ul className="space-y-1">
          {items.map((it) => (
            <li key={it.id} className="relative select-none">
              <button
                onClick={() => toggleTask(it.id)}
                className="group flex w-full items-center gap-3 rounded-lg px-2 py-3 pr-10 text-left hover:bg-gray-100"
              >
                {/* Icon trạng thái: dùng ảnh import */}
                <img
                  src={it.done ? checked : unchecked}
                  alt={it.done ? "Checked" : "Unchecked"}
                  className="h-7 w-7"
                />

                <span
                  className={
                    "text-[17px] " +
                    (it.done ? "line-through text-gray-500" : "text-gray-900")
                  }
                >
                  {it.text}
                </span>
              </button>

              {/* nút xóa */}
              <button
                aria-label="Delete"
                onClick={() => removeTask(it.id)}
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-600 hover:bg-gray-100"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                </svg>
              </button>
            </li>
          ))}
        </ul>

        {/* Footer nhỏ */}
        <div className="mt-6 text-sm text-gray-500">
          {items.length === 0
            ? "No tasks yet."
            : `${remaining} task${remaining !== 1 ? "s" : ""} remaining`}
        </div>
      </div>
    </div>
  );
}
