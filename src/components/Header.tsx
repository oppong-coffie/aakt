import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        padding: "1rem",
        background: "#f0f0f0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>My App</h1>
      <nav>
        <Link to="/dashboard" style={{ margin: "0 10px" }}>
          Home
        </Link>
        <Link to="/dashboard/about" style={{ margin: "0 10px" }}>
          About
        </Link>
        <Link to="/dashboard/contact" style={{ margin: "0 10px" }}>
          Contact
        </Link>
        <Link to="/" style={{ margin: "0 10px", color: "red" }}>
          Logout
        </Link>
      </nav>
    </header>
  );
};

export default Header;
