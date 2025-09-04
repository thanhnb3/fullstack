import { useEffect, useState } from "react";

export default function Learning() {
  console.log("OK");
  const [title, setTile] = useState("");
  useEffect(() => {
    document.title = title;
  });
  // console.log(title);
  return (
    <div className="p-10">
      <h2 className="text-9xl">React useEffet</h2>
      <h1 className="text-7xl">Xin chào, tôi đang học React</h1>
      <input
        className="border-1"
        value={title}
        onChange={(e) => {
          setTile(e.target.value);
        }}
      />
    </div>
  );
}
