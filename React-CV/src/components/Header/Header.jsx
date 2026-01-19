import "./Header.css";
import headerImage from "../../assets/Screenshot 2026-01-19 at 14.53.38.png";

export default function Header() {
  return (
    <header>
      <img src={headerImage} />
      <h1>My Resume</h1>
      <p>Jonas Bergström</p>
    </header>
  );
}
