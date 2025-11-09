import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    backgroundColor: "#1e1e2f",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  };

  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      <Link style={linkStyle} to="/about">
        About
      </Link>
      <Link style={linkStyle} to="/services">
        Services
      </Link>
      <Link style={linkStyle} to="/contact">
        Contact
      </Link>
    </nav>
  );
}
