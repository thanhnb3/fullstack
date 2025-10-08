export default function Learning() {
  return (
    <div id="wrapper" className="p-10">
      <button
        onClick={() => {
          console.log(Math.random());
        }}
      >
        Click Me!
      </button>
    </div>
  );
}
