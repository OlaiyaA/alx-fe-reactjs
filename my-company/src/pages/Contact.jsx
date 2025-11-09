import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "300px",
    margin: "2rem auto",
  };

  const inputStyle = {
    padding: "0.5rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    backgroundColor: "#1e1e2f",
    color: "#fff",
    padding: "0.5rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
      <form style={formStyle}>
        <input
          style={inputStyle}
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          style={inputStyle}
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          style={inputStyle}
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button style={buttonStyle} type="button">
          Send Message
        </button>
      </form>
    </div>
  );
}
