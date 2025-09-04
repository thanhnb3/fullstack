import logo from "../../../assets/listtodo_ver2/logo.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="Logo Quizz App" />
        <h1>Quizz App</h1>
      </header>
    </>
  );
}
